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

export async function createUser(email: string, name: string, image: string) {
  try {
    await sql`INSERT INTO users (email, name, image) VALUES (${email}, ${name}, ${image});`;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
}
