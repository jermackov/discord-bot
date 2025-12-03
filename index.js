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
      .setDescription("Dein wahrer Wohnort ist nicht dort, wo du denkst. Du findest ihn in Dampf umhüllt. Du musst diesen Ort auf der Karte bestehend aus Quadraten aufsuchen. Dort werde ich auf dich warten. ");

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

Da es zurzeit sehr kalt ist, darfst du nicht vergessen, dich um deine Haut zu kümmern! Vor allem deine Lippen müssen weich bleiben, damit Nuna nicht verletzt wird beim Küssen. Obwohl egal wie deine Hände oder Lippen aussehen, Nuna würde dich immer lieben`;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 3: Geoguessr extreme")
      .setDescription(
        "Mir wurde erzählt, dass letztes Jahr im Adventskalender die GeoGuessr-Aufgabe zu leicht für dich war. Deswegen dieses Mal ein bisschen schwerer hehe. " +
        "Dieses Foto wurde an einem Flughafen geschossen. Jeder Flughafen auf der Welt hat einen spezifischen viertelligen ICAO-Code. " +
        "Dein Ziel ist es, den Code von diesem Flughafen herauszufinden"
      );

    // Erst das Embed schicken
    await message.channel.send({ embeds: [embed1] });

    // Dann die ZIP-Datei schicken
    // ACHTUNG: Pfad muss relativ zu deinem Projekt auf dem Server sein,
    // nicht "C:/Users/...". Lege die Datei z.B. in einen Ordner ./files
    const zipFile = new AttachmentBuilder("./foggy_field.zip");

    await message.channel.send({ files: [zipFile] });

    return; // nichts weiteres für diese Nachricht ausführen
  }

  // hier kommen deine anderen message-Checks (hello, how are you, zip, …)
});


// ------------------------------------------------------
// DAY 4
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  // Bots ignorieren
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

 if (content === "minecraft egzv") {
    const text = `Selam aleykum Jagi, ich hoffe du hast heute schon gebetet.

Gute Arbeit bei der letzten Aufgabe, es ist sehr beeindruckend, dass du weißt wie Gras in welchem Land aussieht!! Als Belohnung möchte ich dir diese Kekse schenken. Vielleicht kannst du ja ein paar Enten damit füttern :)`;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 4: Escape Room")
      .setDescription(
        "Du bist gefangen in einem Raum. Dein Ziel ist es herauszukommen " +
        "und herauszufinden, in welcher Stadt du dich befindest.\n\n" +
        "**jagi.aternos.me**"
      );

    // Embed senden
    await message.channel.send({ embeds: [embed1] });

    // nichts anderes mehr für diese Nachricht ausführen
    return;
  }
});


// ------------------------------------------------------
// DAY 5
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.content) return;

  const content = message.content.toLowerCase();

  if (
    content === "shortbread auschwitz" ||
    content === "short bread auschwitz"
  ) {
    const text = `доброе утро Jagi *квак квак*

Heute vor genau 80 Monaten hat Nuna gefragt ob sie dir Shortbread aus Schottland mitbringen darf. Sie hat mir erzählt sie war sehr nervös dich zu fragen aber es war einer der besten Entscheidungen, die sie je getroffen hat. Vielleicht wärt ihr ohne das ja nicht zusammen gekommen. Das wäre eine sehr schkreckliche Welt dann.

Ach und ich hoffe wegen dem Auschwitz in Minecraft denkst du jetzt nicht Ori wär rassistisch oder so!! Mein Bester Freund ist sogar aus der Türkei, das heißt Ori kann nicht rassistisch sein!!

Auf jeden Fall genieß das Shortbread und falls was übrig bleibt kannst du ja Utka-Nuna damit füttern. `;

    await message.reply(text);

    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 4: Jagi Guessr")
      .setDescription("Deine heutige Aufgabe ist eine Runde Jagi-Guessr. Ich habe Bilder von dir (die sehr süß sind, wie kann man so gut aussehen?) zusammengestellt und du musst erraten in welcher Stadt diese aufgenommen wurden. ");

    await message.channel.send({ embeds: [embed1] });

    // HIER: PDF senden (ohne ZIP)
    const pdfFile = new AttachmentBuilder("./Jagi_Guessr.pdf");
    await message.channel.send({ files: [pdfFile] });

    return; // fertig
  }

  // andere Checks …
});

// ------------------------------------------------------
// DAY 6
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  // Bots ignorieren
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

 if (content === "ente stromkabel") {
    const text = `GuMo Jagi. Hoffentlich hattest du einen schönen Start in den Tag.

Frohen Nikolaus-Tag!!🎉🎉

Als Geschenk möchte ich dir diese Ente geben. Es ist nicht irgendeine Ente. Tatsächlich bin ich Mutter geworden!!! diese Ente ist mein Sohn und heißt Poseidon! Er heißt so, weil er als Gott des Meeres geboren wurde, aber ich erzäle dir mehr in der Aufgabe.

Du fragst dich vielleicht, warum "Stromkabel"? Weil du bist Nunas Stromkabel. Du gibst ihr ganz viel Energie und ohne dich wäre es sehr schwer zu leuchten *quak quak*

Vielleicht ist dir auch aufgefallen, dass die Weihnachtsmütze ein bisschen zu groß für Poseidon ist. Das liegt daran, dass es nicht seine ist. Nuna hat sie mir mitgegeben und hat gesagt du sollst sie an Utcar übergeben, weil es ihr wichtig ist, dass während du fährst weiterhin in Weihnachtsstimmung bleiben sollst und damit Utcars Kopf bei der Kälte nicht einfriert!`;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 6: Poseidons Rutsche")
      .setDescription(
        "Jetzt wo du aus dem Raum entkommen bist, musst du weiter reisen. " +
        "Poseidon hat für dich mit seinen Fähigkeiten als Gott eine Rutsche aus Eis im Himmel gebaut, der du folgen musst. Am Ziel wirst du einen Freund von ihm Finden.\n\n" +
        "Wer ist dieser Freund?"
      );

    // Embed senden
    await message.channel.send({ embeds: [embed1] });

    // nichts anderes mehr für diese Nachricht ausführen
    return;
  }
});

// ------------------------------------------------------
// DAY 7
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  // Bots ignorieren
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

 if (content === "tape schildkröte") {
    const text = `Hallo Jagi, ich hoffe du konntest heute schön ausschlafen.

Hoffentlich haben Nuna und du sich die Jahreskarte fürs Bouldern geholt, weil Nuna macht es sehr viel Spaß mit dir zusammen zu gehen. Aber es wird bestimmt auch Tage geben, wo ihr nicht zusammen gehen könnt und du auch mal alleine gehen musst. Damit deine Zehen und Finger nicht zu sehr leiden, möchte ich dir dieses Tape geben. Und wenn es deinen Händen mal nicht so gut geht, kannst du diese Maske für deine Hände benutzen🥰

Pass auf dich auf und verletz dich nicht beim Bouldern!`;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 7: Die Mr.Hase Magie Show")
      .setDescription(
        "Findest du nicht auch Magie Shows beeindruckend?" +
        "Du kannst dir eine gratis anschauen, im Dampf sogar.\n\n" +
        "Mit welchem Gegenstand wird der Hase im zehten Akt abgestochen?"
      );

    // Embed senden
    await message.channel.send({ embeds: [embed1] });

    // nichts anderes mehr für diese Nachricht ausführen
    return;
  }
});


// ------------------------------------------------------
// DAY 8
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  // Bots ignorieren
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

 if (content === "seelenwärmer schwert") {
    const text = `안녕 자기, 잘잤엉? ㅎㅎ

Ich hoffe die Mr. Rabbit Magic Show hat dir gefallen. Wenn ja kannst du ja mit Nuna zusammen das Spiel weiterspielen damit ihr zusammen die Rätsel weiter lösen könnt.

Als heutiges Geschenk gibt's einen Seelenwärmer. Das ist ein Pudding, und perfekt wenn du an einem kalten Tag ein warmes, süßes Dessert willst! (obwohl du schon das Maximum von süß sein erreicht hast)

Bleib warm und hab einen schönen Start in die Woche🥰`;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 8: Grüne Hände")
      .setDescription(
        "Du siehst sie fast täglich, aber nur von außen. Die Frau die Beutelwölfe und Falken kontrolliert." +
        "Du musst in sie hineingehen und ihre Hände betrachten. Dort finest du einen Code.\n\n" +
        "Wie endet dieser Code? 161211 _ _ _"
      );

    // Embed senden
    await message.channel.send({ embeds: [embed1] });

    // nichts anderes mehr für diese Nachricht ausführen
    return;
  }
});

// ------------------------------------------------------
// DAY 9
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  // Bots ignorieren
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

 if (content === "soba 420") {
    const text = `*hust hust* Guten Morgen *hust* Jagi

Ich habe mich wohl nicht *hust* richtig angezogen *hust* Und das bei dieser Kälte *hust hust* 

Ich denke *hust* ich mach mir jetzt ein Tee und gönn mir einen Jonny *hust hust*`;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 9: Hust hust")
      .setDescription(
        "Ich *hust* schaff das heute nicht *hust* Heute muss mein Bester Freund für mich übernehmen *hust* Du musst ihm schreiben auf I... *HUST HUST QUAK HUST*" 

      );

    // Embed senden
    await message.channel.send({ embeds: [embed1] });

    // nichts anderes mehr für diese Nachricht ausführen
    return;
  }
});

// ------------------------------------------------------
// DAY 10
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  // Bots ignorieren
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

 if (
   content === "hot chocolate allahu quakbar" ||
    content === "heiße schokolade allahu quakbar"
   ){
    const text = `Wunderschönen Morgen Jagi!
Hoffentlich war Mohammutka nett zu dir! Ich kenne ihn schon sehr ewig, er ist immer für mich da wenn ich ihn brauche, sowi Utka-Nuna immer für dich da sein wird, wenn du sie brauchst.

Mir geht es zum Glück besser als gestern, und auch du musst aufpassen, dass es dich nicht erwischt. Auch heute soll es kalt werden, deswegen zieh dich gut an und trink die heiße Schokolade falls dir kalt wird :)`

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 10: Johann Wolfgang von Goethe")
      .setDescription(
        "Es ist ein Wunder, wie gut manche Menschen im Schreiben und Komponieren sind. Manche dieser Texte haben es bis zu dir und Utka-Nuna geschafft, sodass manche davon sogar vielleicht eine Bedeutung für euch haben. \n\n" +
        "Irgendwie sind einige Wörter verloren gegangen. Schaffst du es sie wieder zu finden?"
      );

    // Embed senden
    await message.channel.send({ embeds: [embed1] });

    const pdfFile = new AttachmentBuilder("./Missing_Words.pdf");
    await message.channel.send({ files: [pdfFile] });


    // nichts anderes mehr für diese Nachricht ausführen
    return;
  }
});


// ------------------------------------------------------
// DAY 11
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  // Bots ignorieren
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

 if (
   content === "cashew erdnuss godsbattler" ||
    content === "cashew erdnuss mix godsbattler"
   ){
    const text = `Bonjour Jagi

Utka-Nuna dakt dir, dass sie mit dir dieses Jahr so viele schöne neuer Lieder entdecken konnte (obwohl die meisten davon hight entdeckt wurden). Und mit Godsbattler bist du geimeint! Weil in meinen Augen diffst du jeden möglichen Gott auf dieser Welt einfach nur indem du du bist. Bu bist mein einziger Gott *quak quak*
Hoffentlich können Utka-Nuna und du bald high auf der Couch in eurer Wohnung zusammen kuscheln während ihr neue Banger in der Trippy-Playlist entdeckt🥰`;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 11: Totenkopf Jagd")
      .setDescription(
        "Dieses Mal sollst du die Lösung von dem Rätsel alleine inden Chat schreiben." +
        "Was sagt der Text über dem Totenkopf mit Flügeln auf dem Briefkasten in einem Stück?" +
        "Du Findest ihn hier:\n\n" +
        "E1000000M10001S11011"
      );

await message.channel.send({ embeds: [embed1] });

const answer = "baroque";

if (message.content.toLowerCase() === answer) {
    // 1. Normale Antwort
    await message.reply("Richtig! 🎉");

    // 2. Embed schicken
    const embed = new EmbedBuilder()
        .setColor(0x00ff7f)
        .setTitle("Zusatz-Info")
        .setDescription("Hier kommt dein Zusatz-Embed!");

    await message.channel.send({ embeds: [embed] });

    // nichts anderes mehr für diese Nachricht ausführen
    return;
}
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
    `Utka-Nuna hat mir erzählt, dass sie gerne etwas schönes für deinen Adventskalender machen möchte und hat mich deswegen gefragt...\n` +
    `Eigentlich habe ich nur Enten als Freunde aber von dem was Utka-Nuna mir über dich erzählt hört es sich so an als wärst du echt süß, weshalb ich denke, dass wir uns echt gut verstehen werden _quak quak_\n\n` +
    `Ich habe für dich für jeden Tag ein kleines Rätsel vorbereitet. Du musst dir also dein Weihnachtsgeschenk hart erarbeiten _hahahaha quak hahaha_ \n` +
    `Das funktioniert, indem du den Gegenstand aus dem Adventskalender zusammen mit der Lösung vom Rätsel des vorherigen Tages zusammen hier in den Chat schreibst.\n` +
    `Als Beispiel: Wenn du aus deinem Adventskalender heute ein Butt-Plug bekommst und die Lösung vom Rätsel "Schokolade" ist, schreibst du in diesen Chat "Buttplug Schokolade". So kann ich sicher gehen dass du für jeden Tag etwas zu tun hast und nicht alles an einem Tag machst. Falls du wenig Zeit hast ist das auch in Ordnung, du kannst alles so spät machen wie du willst. Also kein Stress und hab Spaß!`
  );

  const embed1 = new EmbedBuilder()
    .setColor(0x00ff7f)
    .setTitle("Tag 1: Jeder Weg hat seinen Anfang")
    .setDescription(
      `Heute vor 11 Monaten hat sich euer Leben stark verändert. Ihr habt euch zusammen das Feuerwerk amgeschaut nachdem ihr zum ersten Mal Pilze probiert habt und dadurch unvergessliche Erinnerungen entstanden sind. Heute von 7 Monaten habt ihr euch spontan dazu entschieden Tee zu probieren, wobei das legendäre Tetris-Video entdeckt wurde, was nicht nur visuell aber auch skill-technisch und musikalisch ein Meisterwerk ist. Doch was bringt es nur zuzuschauen wenn man nicht selber spielt?  \n\n` +
      `Deine Aufgabe heute ist, auf tetr.io zu gehen. In den wie viel TOP % weltweit ist man, wenn man bei dem Blitz-Modus 15000 Punkte erreicht?`
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
