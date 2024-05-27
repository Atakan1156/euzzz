const { AoiClient } = require("aoi.js");

const bot = new AoiClient({
    token: process.env.token, 
    prefix: "+", 
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./src/")

bot.command({
name: "sa",
nonPrefixed:true,
code: `
Aleyküm Selam
$onlyIf[$message==sa]`
})