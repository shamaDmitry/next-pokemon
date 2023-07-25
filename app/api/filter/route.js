import { API_URL } from '@/lib/constants';
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const {
      type,
      ability
    } = request;

    return NextResponse.json({
      type,
      ability
    })
  } catch (e) {
    console.log("error", e);

    return NextResponse.json({ "data": e }, { status: 500 })
  }
}