const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Discord bot is running");
});

app.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});

const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Client, GatewayIntentBits, AttachmentBuilder, EmbedBuilder } = require('discord.js');

// Client mit den benötigten Intents erstellen
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers, // Intent für Mitglieder-Events
  ],
});

const Token = process.env["Token"];
const CLIENT_ID = process.env["client_id"];
const GUILD_ID = process.env["guild_id"];

const schedule = require("node-schedule");

const date = new Date(2025, 0, 6, 21, 24, 0);

const job = schedule.scheduleJob(date, function () {
  console.log("The world is going to end today.");
});

// Listen for regular messages
client.on("messageCreate", async (message) => {
  if (message.content.toLowerCase() === "zip") {
    try {
      // Pfad zur ZIP-Datei
      const zipFile = new AttachmentBuilder("./x/day-1.zip"); // Pfad an den Ordner `x` anpassen

      // Datei senden
      await message.reply({
        content: "Hier ist deine ZIP-Datei:",
        files: [zipFile],
      });
    } catch (error) {
      console.error("Fehler beim Senden der Datei:", error);
      message.reply("Es gab ein Problem beim Senden der ZIP-Datei.");
    }
  }

  if (message.author.bot) return; // Ignore bot messages

  if (message.content.toLowerCase() === "hello") {
    message.reply("Hi there! 👋");
  }

  if (message.content.toLowerCase() === "how are you?") {
    message.reply("I am just a bot, but I am doing great! How about you?");
  }
});

client.on("guildMemberAdd", async (member) => {
  const welcomeChannel = member.guild.channels.cache.find(
    (channel) => channel.name === "ori" && channel.isTextBased()
  );

  if (!welcomeChannel) return;

  welcomeChannel.send(
    `🎉 **QUAK QUAK!**\n\n` +
    `Jagiii!!! Ich freu mich, dass du endlich hier bist!\n` +
    `Willkommen auf **${member.guild.name}**.`
  );
});

client.on("ready", () => {
  console.log("Bot is ready!");
});

// Bot einloggen
client.login(Token);
