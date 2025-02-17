import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession();
  if (!session || !session.user || !session.user.email) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

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
