const Discord = require("discord.js");
var client = new Discord.Client();
require("dotenv").config();



client.on("error", function(err) {
    // this is needed cause the Discord API is shitty and dies sometimes, causing the wrapper to throw an error and thus crashing the bot - with this function that won't happen
    console.log("\n\n\x1b[31m\x1b[1m[Client Error]: \x1b[0m" + err.message);
});



client.on("ready", function() {
    // This function gets executed once the bot is properly logged in and ready to interact and execute shit

    client.user.setActivity("with your mom's tiddies", {type: "PLAYING"}); // set the bot's activity message here - type can be "PLAYING", "WATCHING", "LISTENING" and "STREAMING"
    client.user.setStatus("online"); // can be "idle", "online", "dnd" (do not disturb) or "invisible"
    client.user.setAvatar("https://example.org/example.png") // sets the profile picture



    client.on("message", function(message) {
        // This function gets executed every time someone sends a message in a channel of a guild your bot is in

        if(message.author.bot) return; // this is used to prevent other bots from executing commands. This could create infinite recursion in the worst case
        if(message.channel.type == "dm" || !message.guild) return; // these two checks are used to prevent users from executing commands inside the DMs

        if(message.content == "!ping") {
            // if someone runs the "!ping" command, the following code gets executed:
            message.channel.send("Pong!");
        }
    });
});



client.login(process.env.BOT_TOKEN); // this pulls the bot token from the ".env" file to be extra secure