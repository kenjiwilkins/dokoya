import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { getUser } from "@/app/data/user";

export async function GET(req: NextRequest) {
  const session = await getServerSession();
  console.log("sesion", session);
  if (!session || !session.user || !session.user.email) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const user = await getUser(session.user.email);
  console.log(user);

  return new Response(
    JSON.stringify({
      user: {
        email: "mock@mock.com",
        name: "John Mock",
        image: "https://example.com/image.jpg",
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
