import { sql } from "./neon";

export async function getUser(email: string) {
  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email};`;
    return user[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
