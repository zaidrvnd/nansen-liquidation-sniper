import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { apiKey } = await request.json();
    
    if (!apiKey) {
      return NextResponse.json({ error: 'API Key is required' }, { status: 400 });
    }

    // Fetch real Smart Money Netflow data from Nansen API
    const res = await fetch('https://api.nansen.ai/api/v1/smart-money/netflow', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey': apiKey
      },
      body: JSON.stringify({ chains: ['ethereum', 'base', 'solana'] })
    });

    if (res.status === 200) {
      const json = await res.json();
      return NextResponse.json({ data: json.data || [] });
    } else {
      return NextResponse.json({ error: 'Failed to fetch Nansen data' }, { status: res.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
