import { config } from "dotenv";
config();

export const DEBUG = (process.env.DEBUG ?? "true") !== "false";

export const mongoURL = process.env.MONGODB_SRV;

export const BOT_TOKEN = process.env.BOT_TOKEN;

export const GUILD_ID = process.env.GUILD_ID;