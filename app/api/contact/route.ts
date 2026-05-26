import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Contact form is handled by Web3Forms." },
    { status: 410 }
  );
}
