# Discord.js-Bot-Skeleton
## This is the bare skeleton you need for a Discord bot - it covers most of the quirks of the Discord API that you normally need weeks to find out
<br><br>
WTFPL license - do whatever you wanna do with this code, you don't even have to credit me!

<br><br><br>

# Instructions to install and run the bot:
Download or clone the repository and follow these steps to set up and run your bot:

1. Make sure you have Node.js and npm (Node Package Manager) installed
2. Open a terminal in the folder you downloaded and run the command `npm i` to install the required packages
3. Open the `.env` file and enter your bot token there (you get it from the [Discord Developer Portal](https://discordapp.com/developers/applications/))
4. Invite your bot to a guild by using this URL (insert client ID first): https://discordapp.com/oauth2/authorize?client_id=CLIENT_ID_HERE&scope=bot&permissions=8
5. Run the bot in the terminal by using `node .` or by double clicking the batch file

<br><br><br>

# Nice to know things:
- If you publish your bot token somewhere, people **will** hijack your bot. This has happened to me and some of my friends. The hijackers will run a second instance of your bot (which is possible) and send DMs to random users containing a malicious URL. If you notice anything like that, make sure to re-generate the bot token on the [Discord Developer Portal](https://discordapp.com/developers/applications/) and to never ever publish it anywhere again.
- The Discord API is really unstable and can throw many client errors. This is mostly covered by the error catcher in the code but if you are still getting crashes, you might wanna check out my package [Node-Wrap](https://npmjs.org/package/node-wrap) - it also provides the ability to easily and quickly restart your bot.
- You might wanna read through the [Discord API documentation](https://discordapp.com/developers/docs/intro), the [Discord.js documentation](https://discord.js.org/#/docs/main/stable/general/welcome) and the [Discord.js guide](https://discordjs.guide/#before-you-begin).
- If you want some other practical examples to look at, you might wanna check out the bots of the [Jabrils Community](https://github.com/Jabrils-Discord-Server), or [my own bot, sBot](https://github.com/Sv443/sBot) - you can also [join our Discord server](https://discord.gg/EZagHBx) to get help while you are coding your bot.
- Once you are done with your bot and want it to get added by other people, make sure to add it to the Discord bot archive [discordbots.org](https://discordbots.org/)
