module.exports = (client) => {
    console.log(`I like to be a ara! Ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    client.user.setActivity(
        `${client.config.prefix}help| ${client.config.botver}`, {
        type: "LISTENING"
      });
  }