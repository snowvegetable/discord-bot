import { Client, IntentsBitField } from "discord.js";
import config from "./config.js";

const TOKEN = config.token;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (context) => {
  console.log(`😃 ${context.user.tag} 已上線`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "你好") {
    message.reply("你好啊！😇");
  }

  console.log(
    `id：${message.id}  名稱：${message.author.globalName}  內容：${message.content}`,
  );
});

client.login(TOKEN);
