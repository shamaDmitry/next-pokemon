import { API_URL } from '@/lib/constants';
import { filter } from 'lodash';
import { NextResponse } from 'next/server'

export async function POST(request) {
  const res = await fetch(`${API_URL}/pokemon?limit=100000`);
  const allPokemons = await res.json();

  try {
    const data = await request.json();

    return NextResponse.json({
      data: allPokemons.results
    })
  } catch (e) {
    console.log("error", e);

    return NextResponse.json({ "data": e }, { status: 500 })
  }
}