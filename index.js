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
        "Du sollst sie dir anschauen und mitmachen.\n\n" +
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
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

  // FIRST TRIGGER
  if (
    content === "cashew erdnuss godsbattler" ||
    content === "cashew erdnuss mix godsbattler"
  ) {
    const text = `Bonjour Jagi

Utka-Nuna dakt dir, dass sie mit dir dieses Jahr so viele schöne neuer Lieder entdecken konnte (obwohl die meisten davon hight entdeckt wurden). Und mit Godsbattler bist du geimeint! Weil in meinen Augen diffst du jeden möglichen Gott auf dieser Welt einfach nur indem du du bist. Bu bist mein einziger Gott *quak quak*
Hoffentlich können Utka-Nuna und du bald high auf der Couch in eurer Wohnung zusammen kuscheln während ihr neue Banger in der Trippy-Playlist entdeckt🥰`;

    await message.reply(text);

    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 11: Totenkopf Jagd")
      .setDescription(
        "Dieses Mal sollst du die Lösung von dem Rätsel alleine inden Chat schreiben. " +
        "Was sagt der Text über dem Totenkopf mit Flügeln auf dem Briefkasten in einem Stück?" +
        "Du Findest ihn hier:\n\n" +
        "E1000000M10001S11011"
      );

    await message.channel.send({ embeds: [embed1] });
  }

 const answer = "baroque";

  if (content === answer) {
    await message.reply("Richtig! 🎉");

    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Totenkopf Jagd")
      .setDescription("Dieses Logo bezieht sich auf eine Gruppe. Wie heißt das süßeste Mitglied dieser Gruppe?");

    await message.channel.send({ embeds: [embed1] });
  }

  // ---------------------

  const answer2 = "karoo";

  if (content === answer2) {
    await message.reply("Nice! 🎉");

    const embed2 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Totenkopf Jagd")
      .setDescription("Der Affe der Gruppe hat ein Kind bekommen. Wie heißt dieses?");

    await message.channel.send({ embeds: [embed2] });
  }

// ---------------------

  const answer4 = "nanday";

  if (content === answer4) {
    await message.reply("Yippie! 🎉");

    const embed4 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Totenkopf Jagd")
      .setDescription("Der Mann mit Zahl in den Haaren redet in seiner ersten Szene darüber was er am liebsten konsumiert. Wie heißt es?");

    await message.channel.send({ embeds: [embed4] });
  }

  
  // THIRD TRIGGER
  const answer3 = "earl grey";

  if (content === answer3) {
    await message.reply("Nice! 🎉");

    const embed3 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Totenkopf Jagd")
      .setDescription("Das ist die letzte Frage für heute, schreibe die Antwort morgen wieder mit dem Gegenstand zusammen: Dieser Mann hat hat bei einem Gefängsnisausbruch einen neuen Freund gefunden. Dieser Freund taucht öfter in der Geschichte auf. Bei seinem 2ten Auftritt in dem Anime findet dieser einen anderen Freund. Wie heißt der Freund des Freundes?");

    await message.channel.send({ embeds: [embed3] });

    return;
  }

});


// Day 12


client.on("messageCreate", async (message) => {
  // Bots ignorieren
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

 if (
   content === "swirl pop gaimon" ||
    content === "lollipop gaimon"
   ){
    const text = `Ich hoffe du hast gut geschlafen du Süßer.

Sehr gute Arbeit bei diesem Rätsel, hoffentlich hat dir der One Piece throwback gefallen *ich hatte schon immer einen Crush auf Karoo quak quak*

Wenn du mal Lust hast auf ein Zuckerschock gönn dir diesen Lolipop! So hot wie du bist musst du aber aufpassen, dass er nicht schmilzt wenn der in deiner Nähe ist!!!`

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 12: Back to the ~Future~ Matheunterricht")
      .setDescription(
        "Du bekommst eine Datei, wobei du alle Aufgaben lösen musst, um auf eine Lösungszahl zu kommen. \n\n" +
        "Viel Erfolg!"
      );

    // Embed senden
    await message.channel.send({ embeds: [embed1] });

    const pdfFile = new AttachmentBuilder("./Math.pdf");
    await message.channel.send({ files: [pdfFile] });


    // nichts anderes mehr für diese Nachricht ausführen
    return;
  }
});

// Day 13

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.content) return;

  const content = message.content.toLowerCase();

  if (
    content === "redbull 141414141,5" ||
    content === "tictacs 141414141,5"
  ) {
    const text = `привет Jagi *квак квак*

Mir wurde erzählt, dass obwohl heute Samstag ist du heute Vorlesung hast? Welches Monster hat sich so etwas ausgedacht?? Damit du bisschen besser durch den Tag kommst möcht ich dir Energy und TicTacs geben. Es ist nichts Großes aber es kann eventuell dein Tag bisschen angenehmer und schöner machen.

Und nicht vergessen: Nuna-Utka liebt dich♥️`;

    await message.reply(text);

    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 13: Eye eye eye")
      .setDescription("Du schaust jeden Tag bis zu hunderten, wenn nicht sogar tausenden Menschen in die Augen. Doch erkennst du alle Augen von denen, die dir nahestehen? ");

    await message.channel.send({ embeds: [embed1] });

    // HIER: PDF senden (ohne ZIP)
    const pdfFile = new AttachmentBuilder("./eyeeyeeye.pdf");
    await message.channel.send({ files: [pdfFile] });

    return; // fertig
  }

  // andere Checks …
});

// ------------------------------------------------------
// DAY 14
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  if (message.author.bot) return; // Bots ignorieren

  const content = message.content.toLowerCase();

  if (
    content === "ddakji kindergarten" ||
    content === "squid game kindergarten"
  ) {
    const text = `JAGI ES IST ETWAS PASSIERT!!!


TAKOPI IST VERSCHWUNDEN!!!!


Ich weiß nicht wo er ist aber ich hoffe es geht ihm gut q.q Er war einer meiner besten Freundeㅠㅠㅠ

Alles was ich weiß ist, dass diese komische Karte hinterlassen wurde... Es sieht so aus als wäre Takopi zu den Squid Games eingeladen worden...
Hast du Takopi so wenig Taschengeld gegeben, dass er sowas nötig hat? ㅠㅠ Wir müssen ihn unbedingt wieder zurück zu dir bringen. Es sieht so aus als könnten die Gegenstände uns dabei helfen ihn wiederzufinden.   `;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 14: Ddakji")
      .setDescription(
        "Es geht die Nachricht herum, dass eine sehr junge Frau mit dunklen Haaren ein komisches Spiel mit blauen und roten Papieren spielt. Es soll wohl eine Person sein, die dir sehr nahe steht. " +
        "Fordere sie zu Ddakji heraus. Du musst 3 Runden hinterinander gegen sie gewinnen, um ein Hinweis zu bekommen. " +
        "Wenn du den Hinweis bekommst, sollst du die Erdnussbutter Cups mit deiner Herausforderin teilen."
      );

    // Erst das Embed schicken
    await message.channel.send({ embeds: [embed1] });

    return; // nichts weiteres für diese Nachricht ausführen
  }

  // hier kommen deine anderen message-Checks (hello, how are you, zip, …)
});

// ------------------------------------------------------
// DAY 15
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  if (message.author.bot) return; // Bots ignorieren

  const content = message.content.toLowerCase();

  if (
    content === "maske luft" ||
    content === "masken luft"
  ) {
    const text = `*quak* hallo Jagi Schatzi

Leider weiß ich nicht was mit Luft gemeint sein soll oder wie es uns helfen soll Takopi zu finden... Alles was wir jetzt machen können ist wahrscheinlich zu überlegen und abzuwarten. Und vielleicht versuchen uns etwas abzulenken, damit es uns nicht zu schlecht geht. `;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 15: ShroomID")
      .setDescription(
        "Wie du weißt hat Utka-Nuna ihr Interesse an Pilzen entdeckt. " +
        "Es ist wichtig zu wissen, dass viele Sorten ähnlich aussehen wobei eine Art super lecker und die andere Art giftig sein kann. " +
        "Deshalb ist es wichtig, diese unterscheiden zu können. Recherchiere die eigenschaften der genannten Sorten, um herauszufinden, welche die auf dem Bild ist."
      );

    // Erst das Embed schicken
   await message.channel.send({ embeds: [embed1] });

    const pdfFile = new AttachmentBuilder("./Shrooms.pdf");
    await message.channel.send({ files: [pdfFile] });

    return; // nichts weiteres für diese Nachricht ausführen
  }

  // hier kommen deine anderen message-Checks (hello, how are you, zip, …)
});


// ------------------------------------------------------
// DAY 16
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  // Bots ignorieren
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

 if (content === "nudeln enigma") {
    const text = `자기 안녕 ㅎㅎ

Ich frage und schaue gerade überall herum, leider noch nicht viel Neues wegen Takopi. Ich hoffe er ist wirklich selber irgendwo hingegangen und wurde nicht entführt...

Vielleicht können ja diese Weihnachts-Nudeln dich ein bisschen ablenken und dich wieder ein bisschen in Weihnachtsstimmung bringen (obwohl keine Nudel so perfekt ist wie deine).

Übrigens, Enigma ist eine ungewöhnliche, seltene Variante von Psilocybe cubensis, die nicht wie typische Pilze Hüte und Stiele bildet. Stattdessen wächst sie als dicht verwachsene, hirnartig wirkende Masse. Sie ist für ihren hohen Psilocybin-Gehalt bekannt und vielleicht hat Utka ja bald die Möglichkeit auch diese zu züchten.`;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 16: MCguessr")
      .setDescription(
        "Falls du selber mal entführt wirst, ist es immer gut zu wissen, wo du dich befindest. " +
        "Gehe zurück zum Ende der Eisrutsche und folge dem Wasser. Du musst erraten in welcher Stadt sich das Gebäude befindet in dem du drinne bist. Dieser Code wird dir helfen auf das Ergebnis zu kommen:\n\n" +
        "3 5 59 3 3 56 12345"
      );

    // Embed senden
    await message.channel.send({ embeds: [embed1] });

    // nichts anderes mehr für diese Nachricht ausführen
    return;
  }
});


// ------------------------------------------------------
// DAY 17
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  // Bots ignorieren
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

 if (content === "gonggi niggas in paris") {
    const text = `JAGII!!! Ich hab mit Mohammutka geredet und er weiß was mit Luft gemeint ist! Anscheinen war es ein Übersetzungsfehler von 공기놀이... 

Ich bin mir sicher wenn du das schaffst kommen wir näher an Takopi dran.`;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 17: Luft Spiel")
      .setDescription(
        "Filme ein Video wie du alle 5 Level von Gonggi machst und schick sie an Mohammutka. \n\n" +
        "Er wird bestätigen ob du es richtig gemacht hast, vielleicht hilft er dir auch weiter bei der Suche nach Takopi."
        
      );

    // Embed senden
    await message.channel.send({ embeds: [embed1] });

    // nichts anderes mehr für diese Nachricht ausführen
    return;
  }
});


// ------------------------------------------------------
// DAY 18
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.content) return;

  const content = message.content.toLowerCase();

  if (
    content === "pikant erdnüsse kamera" ||
    content === "erdnüsse kamera"
  ) {
    const text = `Hallo Jagi, es muss echt anstrengend sein. 

Schon wieder weiß ich leider nicht was das bedeuten soll... Vielleicht hast du eine Idee? 

Ich hab dafür eine Idee wie ich deine Stimmung vielleicht besser machen könnte: Ein Blick auf alte Fotos kann uns sofort wärmen. Sie erinnern uns an Momente,
in denen wir glücklich waren, und holen ein Stück dieses Gefühls zurück. Bilder sind kleine Türen zu Erinnerungen – und manchmal reicht ein kurzer Blick, um uns wieder zum lächeln zu bringen. `;

    await message.reply(text);

    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 18: Türen zu Erinnerungen")
      .setDescription("Es wurden Bilder aus Videos genommen, die du gut kennst. Errate die Titel aller davon. ");

    await message.channel.send({ embeds: [embed1] });

    // HIER: PDF senden (ohne ZIP)
    const pdfFile = new AttachmentBuilder("./Screenshots.pdf");
    await message.channel.send({ files: [pdfFile] });

    return; // fertig
  }

  // andere Checks …
});

// ------------------------------------------------------
// DAY 19
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  // Bots ignorieren
  if (message.author.bot) return;

  const content = message.content.toLowerCase();

 if (content === "bier bomboclat") {
    const text = `Bomboclat Jagi.

Du fragst dich vielleicht, warum Bomboclat? Weil Bomboclat bist du gutaussehend. Utka-Nuna muss echt glücklich sein mit einem so süßen Freund...

Weil du zur Zeit so am husteln bist, möchte ich dir dieses Bierchen geben. Ich hoffe du erhältst diese Nachricht nicht zu spät *quak* weil du sollst das Bierchen jetzt in den Kühlschrank stellen, damit du heute Abend nach Arbeit/Uni dir ein geiles kühlen Bierchen gönnen kannst.

Du hast es verdient.`;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 19: The August Before")
      .setDescription(
        "Du musst zurück in den letzten August und dort dein Zimmer aufräumen. " +
        "Irgendwo unter deinen Dingen wirst du ein Gegenstand in Bezug auf eine Ente finden. \n\n" +
        "Wohin führt dich die Ente?"
      );

    // Embed senden
    await message.channel.send({ embeds: [embed1] });

    // nichts anderes mehr für diese Nachricht ausführen
    return;
  }
});


// ------------------------------------------------------
// DAY 20
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.content) return;

  const content = message.content.toLowerCase();

  if (
    content === "drachenzungen frühling" ||
    content === "drachenzunge frühling"
  ) {
    const text = `JAGI ICH HABS! Ich weiß jetzt was mit Kamera gemeint ist! 

Ich glaub wir wissen jetzt wo Takopi ist, oder besser gesagt, wer ihn entführt hat. Mit Kamera war die Überwachungskamera in deinem Zimmer gemeint. Ich habe mir mal die Aufnahmen von dem Abend des Geschehens angeschaut und hab gesehen, wie jemand in dein Zimmer eingebrochen ist!!!!
In einem Frame konnte man sein gesicht leicht erkennen. Ich schicke dir das Bild, vielleicht erkennst du ihn ja. `;

    await message.reply(text);

    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 20: Der Einbrecher")
      .setDescription("Wer ist der Einbrecher? Melde dich unaufällig bei ihm und frag ihn, was er am Abend vom 13.Dezember gemacht hat. ");

    await message.channel.send({ embeds: [embed1] });

    // HIER: PDF senden (ohne ZIP)
    const pngFile = new AttachmentBuilder("./Überwachungskamera.png");
    await message.channel.send({ files: [pngFile] });

    return; // fertig
  }

  // andere Checks …
});

// ------------------------------------------------------
// DAY 21
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;
  if (!message.content) return;

  const content = message.content.toLowerCase();

  if (
    content === "popcorn shishabar" ||
    content === "popcorn shisha bar"
  ) {
    const text = `Selam Jagi, es sieht so aus als würde Dominik die Wahrheit sagen, ich kann mir nicht vorstellen, dass er seinen Samstagabend wo anders als dort verbringt... 

Ich möchte dir als Trost etwas Popcorn geben. Es ist dafür gedacht es mit Familie oder Freunden zu Teilen, wenn du etwas am schauen bist. Utka-Nuna hofft natürlich, dass du es mit ihr teilst wärend ihr einen süßen Anime schaut und sie in deinen Armen liegt, weil dort fühlt sie sich an
allen Orten der Welt am glücklichsten.
Außerdem wünsche ich dir einen schönen vierten Advent. Ich hoffe du kannst schön mit Familie und Utka-Nuna feiern. Sie ist sehr glücklich und dankbar, dass deine Familie und du so nett zu ihr seid.`;

    await message.reply(text);

    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 21: Streichhölzer")
      .setDescription(
        "Kennst du es nicht auch wenn deine ganzen Streichhölzer verloren gehen und du sie wieder an der richtigen Stelle plazieren musst? Heute musst du viele Streichhölzer umsortieren, damit Sie richtig liegen. \n\n" +
        "Um auf die Lösung zu kommen, musst du immer die erste Zahl von der neuen Gleichung nehmen."
        ); 
        
    await message.channel.send({ embeds: [embed1] });

    // HIER: PDF senden (ohne ZIP)
    const pdfFile = new AttachmentBuilder("./Streichhölzer.pdf");
    await message.channel.send({ files: [pdfFile] });

    return; // fertig
  }

  // andere Checks …
});

// ------------------------------------------------------
// DAY 22
// ------------------------------------------------------

client.on("messageCreate", async (message) => {
  if (message.author.bot) return; // Bots ignorieren

  const content = message.content.toLowerCase();

  if (
    content === "matcha nucao 715637891" ||
    content === "glücklich macher 715637891"
  ) {
    const text = `Guten Tag du Süßer. Utka-Nuna hat echt Glück, mit einem so schlauen Freund der so gut in Mathe-Sachen ist. Leider war Mathe nicht mein bestes Fach in der Utka-Schule, aber dafür umso besser, dass du es gut kannst *quak*

Heute wollte ich dir paar kleine Snacks geben, die dich hoffentlich zurück an den Sommer erinnern. Natürlich Weihnachtszeit ist schön, aber wenn es nicht mal Schnee gibt und es nur eklig kalt ist, denkt man manchmal schon daran, wie schön es jetzt wäre am strand zu liegen.

`;

    // normale Antwort
    await message.reply(text);

    // Embed bauen
    const embed1 = new EmbedBuilder()
      .setColor(0x00ff7f)
      .setTitle("Tag 22: Hidden Message")
      .setDescription(
        "Utka-Nuna hat sehr viel Arbeit in das Erstellen dieser ganzen Texte und Dateien gesteckt. \n\n" +
        "Doch irgendwo in den Dateien hat sich ein unsichtbarer Text eingeschlichen. " +
        "Wer bist du?"
      );

    // Erst das Embed schicken
    await message.channel.send({ embeds: [embed1] });

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
