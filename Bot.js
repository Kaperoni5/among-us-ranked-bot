const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "-";

const fs = require("fs");

const token = require("./token");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Among Us MMR Bot is Online!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  //temporarily deleting .split
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get("ping").execute(message, args);
  }
    else if (command === "result") {
        client.commands.get("result").execute(message, message.content);
  }
    else if (command === "user-info") {
        client.commands.get("user-info").execute(message, args);
    }
});

client.login("   ");

// This is my change

client.login(token);
