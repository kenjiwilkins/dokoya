import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export const config = { matcher: "/db" };

export async function middleware() {
  const sql = neon(`${process.env.DATABASE_URL}`);
  // check if database dokoya exists
  let dbExists = await sql`SELECT 1 FROM pg_database WHERE datname = 'dokoya';`;
  if (dbExists.length === 0) {
    // create database dokoya
    await sql`CREATE DATABASE dokoya;`;
    dbExists = await sql`SELECT 1 FROM pg_database WHERE datname = 'dokoya';`;
  }
  let userTableExists =
    await sql`SELECT 1 FROM information_schema.tables WHERE table_name = 'users';`;
  if (userTableExists.length === 0) {
    // create table users
    await sql`CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    );`;
    userTableExists =
      await sql`SELECT 1 FROM information_schema.tables WHERE table_name = 'users';`;
  }

  return NextResponse.json({
    dbExists: dbExists,
    userTableExists: userTableExists,
  });
}
