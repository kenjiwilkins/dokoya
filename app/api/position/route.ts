import { NextRequest, NextResponse } from "next/server";

let position = { lat: 0, lng: 0, timestamp: 0 };

export async function POST(request: NextRequest) {
  try {
    const { lat, lng, timestamp } = await request.json();
    position = { lat, lng, timestamp };
    return NextResponse.json({ message: "Position received", position });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
    }
  }
}

export async function GET(request: NextRequest) {
  if (position.timestamp === 0) {
    return NextResponse.json(
      { message: "No position received" },
      { status: 404 },
    );
  }
  return NextResponse.json({ ...position });
}
