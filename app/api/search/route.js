import { API_URL } from '@/lib/constants';
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const term = searchParams.get('term')

    const res = await fetch(`${API_URL}/pokemon/${term}`);
    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data)
    }
  } catch (e) {
    console.log("error", e);
  }

  return NextResponse.json({ data: null }, { status: 404 })
}