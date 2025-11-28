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
const { Client, GatewayIntentBits, AttachmentBuilder, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const Token = process.env["Token"];
const CLIENT_ID = process.env["client_id"];
const GUILD_ID = process.env["guild_id"];

const schedule = require("node-schedule");

const date = new Date(2025, 0, 6, 21, 24, 0);
schedule.scheduleJob(date, function () {
  console.log("The world is going to end today.");
});

// ------------------------------------------------------
// MESSAGE CREATE LISTENER
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  // ZIP COMMAND
  if (message.content.toLowerCase() === "zip") {
    try {
      const zipFile = new AttachmentBuilder("./x/day-1.zip");
      await message.reply({
        content: "Hier ist deine ZIP-Datei:",
        files: [zipFile],
      });
    } catch (error) {
      console.error("Fehler beim Senden der Datei:", error);
      message.reply("Es gab ein Problem beim Senden der ZIP-Datei.");
    }
  }

  // BASIC RESPONSES
  if (message.content.toLowerCase() === "hello") {
    return message.reply("Hi there! 👋");
  }

  if (message.content.toLowerCase() === "how are you?") {
    return message.reply("I am just a bot, but I am doing great! How about you?");
  }

  // ------------------------------------------------------
  // DAY 2
  // ------------------------------------------------------

  if (message.content.toLowerCase() === "pflanze 70") {
    const text = `Hallo Jagi, ich hoffe, du hast gut geschlafen :)

Nuna hat mir erzählt, dass sie unbedingt mit dir zusammenziehen will und zusammen mit dir eine Ente als Haustier holen will, aber dass das wahrscheinlich noch sehr lange nicht möglich sein wird. Das zu hören hat mich echt ein bisschen traurig gemacht, weshalb ich eine süße Alternative für euch habe.

Diese Pflanze ist nicht einfach irgendeine Pflanze. Das ist eine Sukkul*ente* 🥰. Solange ihr euch keine richtige Ente holen könnt, ist diese Ente solange euer Haustier.

Ich habe gehört, dass du dir Sorgen machst, dass du dich nicht gut um Pflanzen kümmern kannst. Bei Sukkulenten ist das kein Problem! Sie sind sehr pflegeleichte Pflanzen, da sie nur wenig Wasser benötigen, viel Licht bevorzugen und auch in kleineren Töpfen problemlos wachsen.

Wenn sie sich wohlfühlen, zeigen sie es dir im Frühling oder Sommer mit hübschen Blüten, die an langen Stielen erscheinen – ein kleines Dankeschön dafür, dass du sie so entspannt und liebevoll behandelst ♥️ Wenn du sehr nett zu ihr bist, lernt sie ja vielleicht auch zu quaken.`;

    await message.reply(text);

    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 2: Dampfmaschine")
      .setDescription("Dein wahrer Wohnort ist nicht wo du denkst, dass er ist. Du findest ihn ihm Dampf umhüllt. Du musst diesen Ort auf der Karte ohne kreise aufsuchen. Dort werde ich auf dich warten. ");

    await message.channel.send({ embeds: [embed1] });

    return;
  }
});

// ------------------------------------------------------
// DAY 3
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  if (message.author.bot) return; // Bots ignorieren

  const content = message.content.toLowerCase();

  if (
    content === "handcreme weihnachtszeit" ||
    content === "vaseline weihnachtszeit"
  ) {
    const text = `Guten Morgen Jagi, ich hoffe du hast schön geträumt *quak*
    
    Da es zu zeit sehr kalt ist, darfst du nicht vergessen dich um deine Haut zu kümmern! Vor allem; deine Lippen müssen weich bleiben damit Nuna nicht verletzt wird beim küssen.  `;

    await message.reply(text);

    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 3: Geoguessr extreme")
      .setDescription("Mir wurde erzählt, dass letztes Jahr im Adventskalender die GeoGuessr-Aufgabe zu leicht für dich war. Deswegen dieses Mal bisschen schwerer hehe Dieses Foto wurde an einem Flughafen geschossen. Jeder Flughafen auf der Welt hat ein sogenannten ICAO-Code. Dein Ziel ist es den Code von diesem Flughafen herauszufinden :) ");

    

    await message.channel.send({ embeds: [embed1] 
                               
// Datei laden (dein ZIP)
      
const zipFile = new AttachmentBuilder("C:/Users/jerma/Documents/Ideas/foggy_field.zip");

await message.channel.send({
  embeds: [embed1],
  files: [zipFile]

});

    return; // nichts weiteres für diese Nachricht ausführen
  }

  // hier kommen deine anderen message-Checks (hello, how are you, zip, …)
});


// ------------------------------------------------------
// MEMBER JOIN EVENT
// ------------------------------------------------------

client.on("guildMemberAdd", async (member) => {
  const welcomeChannel = member.guild.channels.cache.find(
    (channel) => channel.name === "ori" && channel.isTextBased()
  );

  if (!welcomeChannel) return;

  await welcomeChannel.send(
    `🎉 **_QUAK QUAK!_** 🎉\n\n` +
    `Jagiii!!! Ich freu mich, dass du endlich hier bist!\n` +
    `Ich bin **${member.guild.name}** und ich werde dich über die Weihnachtszeit begleiten🦆\n` +
    `Nuna hat mir erzählt, dass sie gerne etwas schönes für deinen Adventskalender machen möchte und hat mich deswegen gefragt...\n` +
    `Ich habe eigentlich nur Enten als Freunde aber von dem was Nuna mir über dich erzählt hört es sich so an als wärst du echt süß, weshalb ich denke, dass wir uns echt gut verstehen werden _quak quak_\n\n` +
    `Ich habe für dich für jeden Tag ein kleines Rätsel vorbereitet. Du musst dir also dein Weihnachtsgeschenk hart erarbeiten _hahahaha quak hahaha_ \n` +
    `Das funktioniert, indem du den Gegenstand aus dem Adventskalender zusammen mit der Lösung vom Rätsel des vorherigen Tages zusammen hier in den Chat schreibst.\n` +
    `Als Beispiel: Wenn du aus deinem Adventskalender heute ein Butt-Plug bekommst und die Lösung vom Rätsel "Schokolade" ist, schreibst du in diesen Chat "Buttplug Schokolade".`
  );

  const embed1 = new EmbedBuilder()
    .setColor(0x00ff7f)
    .setTitle("Tag 1: Jeder Weg hat seinen Anfang")
    .setDescription(
      `Heute vor 11 Monaten hat sich euer Leben stark verändert...\n\n` +
      `Deine Aufgabe heute ist, auf tetr.io zu gehen...`
    );

  await welcomeChannel.send({ embeds: [embed1] });
});

// ------------------------------------------------------
// READY
// ------------------------------------------------------

client.on("ready", () => {
  console.log("Bot is ready!");
});

// LOGIN
client.login(Token);
