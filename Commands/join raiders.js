const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

//Team Variables
  let raiders = message.guild.roles.find(r => r.name === "Raiders");

//Raiders Group
    if(args[0] == "raiders"){
      message.member.addRole(raiders.id).catch(console.error);
      message.channel.send(`Okay <@${message.member.id}>, I'll add you to the ${raiders.name} group.`);
    return;
    };
}

module.exports.help = {
  name: "join"
}
