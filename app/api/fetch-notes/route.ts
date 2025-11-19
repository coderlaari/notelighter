import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // Get notes from db
  const hValue1 = req.headers.get("isServer");
  const isNotUser = hValue1 !== "true";
  const hValue2 = req.headers.get("user_id");

  const notes = {};

  return new Response(JSON.stringify(notes), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
