exports.run = (client, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.send(`= SERVERINFO =
• Server Name:: ${message.guild.name}
• Created At :: ${message.guild.createdAt}
• Users      :: ${message.guild.memberCount}
• Joined At  :: ${message.member.joinedAt}`, {code: "asciidoc"});
};

exports.help = {
  name: "serverinfo",
  category: "Miscelaneous",
  description: "Gives some useful server info's",
  usage: "serverinfo"
};