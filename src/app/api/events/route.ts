import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.RCELL_API_KEY || "RCELLFESTAPI2026";
  const eventIds = [
    "69c9becbefdadf011a4b5282", 
    "69ea339eb6d3f58b8ab2cf3a",
    "6aa988e36a349ee3d97f7b7f",
    "6ab8be1ac3fc26782b3460c7"
  ];

  try {
    const eventPromises = eventIds.map(async (id) => {
      try {
        const res = await fetch(`https://rcellfest.vercel.app/api/v1/public/events/${id}`, {
          method: 'GET',
          headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json'
          }
        });

        // Cek apakah respons dari server berupa JSON atau HTML error
        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          console.error(`API mengembalikan bukan JSON untuk ID ${id}`);
          return null;
        }

        const result = await res.json();
        return result.success && result.data ? result.data : null;
      } catch (e) {
        console.error(`Gagal fetch ID ${id}:`, e);
        return null;
      }
    });

    const results = await Promise.all(eventPromises);
    const validEvents = results.filter((ev) => ev !== null);

    return NextResponse.json({ success: true, data: validEvents });
  } catch (error) {
    return NextResponse.json({ success: false, data: [] }, { status: 500 });
  }
}