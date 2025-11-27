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
  
// Day 2
if (message.content.toLowerCase() === "pflanze 70") {
  const text = `Hallo Jagi, ich hoffe, du hast gut geschlafen :)

Nuna hat mir erzählt, dass sie unbedingt mit dir zusammenziehen will und zusammen mit dir eine Ente als Haustier holen will, aber dass das wahrscheinlich noch sehr lange nicht möglich sein wird. Das zu hören hat mich echt ein bisschen traurig gemacht, weshalb ich eine süße Alternative für euch habe.

Diese Pflanze ist nicht einfach irgendeine Pflanze. Das ist eine Sukkul*ente* 🥰. Solange ihr euch keine richtige Ente holen könnt, ist diese Ente solange euer Haustier.

Ich habe gehört, dass du dir Sorgen machst, dass du dich nicht gut um Pflanzen kümmern kannst. Bei Sukkulenten ist das kein Problem! Sie sind sehr pflegeleichte Pflanzen, da sie nur wenig Wasser benötigen, viel Licht bevorzugen und auch in kleineren Töpfen problemlos wachsen.

Wenn sie sich wohlfühlen, zeigen sie es dir im Frühling oder Sommer mit hübschen Blüten, die an langen Stielen erscheinen – ein kleines Dankeschön dafür, dass du sie so entspannt und liebevoll behandelst ♥️ Wenn du sehr nett zu ihr bist, lernt sie ja vielleicht auch zu quaken.`;

  // normale Antwort
  await message.reply(text);

  // Embed direkt danach
  const embed1 = new EmbedBuilder()
    .setColor(0x00ff7f)
    .setTitle("Tag 2: Dampfmaschine")
    .setDescription("test");

  await message.channel.send({ embeds: [embed1] });

  // danach nichts anderes mehr für diese Nachricht
  return;
}

  

client.on("guildMemberAdd", async (member) => {
  const welcomeChannel = member.guild.channels.cache.find(
    (channel) => channel.name === "ori" && channel.isTextBased()
  );

  if (!welcomeChannel) return;

  welcomeChannel.send(
    `🎉 **_QUAK QUAK!_** 🎉\n\n` +
    `Jagiii!!! Ich freu mich, dass du endlich hier bist!\n` +
    `Ich bin **${member.guild.name}** und ich werde dich über die Weihnachtszeit begleiten🦆\n` +
    `Nuna hat mir erzählt, dass sie gerne etwas schönes für deinen Adventskalender machen möchte und hat mich deswegen gefragt...\n` +
    `Ich habe eigentlich nur Enten als Freunde aber von dem was Nuna mir über dich erzählt hört es sich so an als wärst du echt süß, weshalb ich denke, dass wir uns echt gut verstehen werden _quak quak_\n\n` +
    `Ich habe für dich für jeden Tag ein kleines Rätsel vorbereitet. Du musst dir also dein Weihnachtsgeschenk hart erarbeiten _hahahaha quak hahaha_ \n` +
    `Das funktioniert, indem du den Gegenstand aus dem Adventskalender zusammen mit der Lösung vom Rätsel des vorherigen Tages zusammen hier in den Chat schreibst.\n` +
    `Als Beispiel: Wenn du aus deinem Adventskalender heute ein Butt-Plug bekommst und die Lösung vom Rätsel "Schokolade" ist, schreibst du in diesen Chat "Buttplug Schokolade". So kann ich sicherstellen, dass du jeden Tag etwas Kleines zu tun hast, und nicht alle auf einmal machst🦆 Die heutige Lösung passt zusammen mit dem morgigen Gegenstand`
  );
   if (!welcomeChannel) return;

  // --- Embed 1 ---
  const embed1 = {
    color: 0x00ff7f,
    title: "Tag 1: Jeder Weg hat seinen Anfang",
    description: `Heute vor 11 Monaten hat sich euer Leben stark verändert, als ihr das erste Mal Magic Mushrooms probiert habt. Außerdem, heute vor genau 7 Monaten habt ihr das legendäre Tetris Video entdeckt, während ihr Balls am trippen wart, wodurch ihr ein perfektes Video zum Hochkommen gefunden habt. Deshalb will ich dir heute diese süßen Tetris-Gummibärchen schenken. Aber nur zuschen ist doch bisschen lagweilig oder nicht~?\n` +
   `Deine Aufgabe heute ist, auf tetr.io zu gehen, dich anzumelden und bei dem Blitz-Modus möglichst nah an 15000 Punkte heranzukommen. Die Lösung ist der der globale prezentuale TOP Wert. Viel Erfolg!  `
  };
    // Nachricht 1 senden
  await welcomeChannel.send({ embeds: [embed1] });
});




client.on("ready", () => {
  console.log("Bot is ready!");
});

// Bot einloggen
client.login(Token);
