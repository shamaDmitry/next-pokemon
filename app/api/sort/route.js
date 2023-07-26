import { API_URL } from '@/lib/constants';
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic';

export async function GET(request) {
  const res = await fetch(`${API_URL}/pokemon?limit=9`);
  const allPokemonsRes = await res.json();

  try {
    const { searchParams } = new URL(request.url);
    const direction = searchParams.get('direction')

    direction === "descending" ? allPokemonsRes.results.reverse() : allPokemonsRes.results
    return NextResponse.json({
      data: allPokemonsRes.results
    })
  } catch (e) {
    console.log("error", e);

    return NextResponse.json({ "data": e }, { status: 500 })
  }
}