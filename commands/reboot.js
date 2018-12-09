exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
    await message.reply("Bot is shutting down.");
    client.commands.forEach( async cmd => {
      await client.unloadCommand(cmd);
    });
    process.exit(1);
  };
  
  
  exports.help = {
    name: "reboot",
    category: "System",
    description: "Shuts down the bot. If running under PM2, bot will restart automatically.",
    usage: "reboot"
  };