import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: ".env.local" });
export default defineConfig({
	out: "./lib/db/migrations",
	dialect: "postgresql",
	schema: "./lib/db/schema.ts",
	dbCredentials: {
		url: process.env.DATABASE_URL || "",
	},
});
