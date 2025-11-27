const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Client, GatewayIntentBits, AttachmentBuilder } = require("discord.js");

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

// Willkommensnachricht, wenn ein Mitglied dem Server beitritt
client.on("guildMemberAdd", async (member) => {
  // Begrüßungskanal suchen (z. B. Kanal mit dem Namen 'welcome')
  const welcomeChannel = member.guild.channels.cache.find(
    (channel) => channel.name === "ori" && channel.isTextBased(),
  );

  if (!welcomeChannel) {
    console.log("Kein Begrüßungskanal gefunden.");
    return;
  }

  // Nachricht senden
  welcomeChannel.send(
    `🎉 Willkommen auf **${member.guild.name}**, Jagi! Wir freuen uns, dass du hier bist.`,
  );
});

client.on("ready", () => {
  console.log("Bot is ready!");
});

// Bot einloggen
client.login(Token);
