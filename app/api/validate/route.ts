import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { apiKey } = await request.json();
    
    if (!apiKey) {
      return NextResponse.json({ valid: false, error: 'API Key is required' }, { status: 400 });
    }

    const res = await fetch('https://api.nansen.ai/api/v1/account', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });

    if (res.status === 200) {
      const data = await res.json();
      return NextResponse.json({ 
        valid: true, 
        plan: data?.plan || 'Unknown',
        credits: data?.credits_remaining || 0
      });
    } else {
      return NextResponse.json({ valid: false, error: 'Invalid API Key' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ valid: false, error: 'Internal server error' }, { status: 500 });
  }
}
