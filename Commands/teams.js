const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

//Team Variables
  let instinct = message.guild.roles.find(r => r.name === "Team Instinct");
    if(!instinct) return message.reply("That team does't exist");

  let valor = message.guild.roles.find(r => r.name === "Team Valor");
    if(!valor) return message.reply("That team does't exist");

  let mystic = message.guild.roles.find(r => r.name === "Team Mystic");
    if(!mystic) return message.reply("That team does't exist");

//Team Instinct
if(args[0] == "instinct"){
  if (message.member.roles.has(instinct.id) || message.member.roles.has(valor.id) || message.member.roles.has(mystic.id))
    {
      message.reply("you have already joined a team, please contact an Admin or Moderator if you wish to change.");
    }
  else
    {
      message.member.addRole(instinct.id).catch(console.error);
      message.channel.send(`Okay <@${message.member.id}>, I'll make you Team Instinct`);
    };
  }

//Team Valor
if(args[0] == "valor"){
  if (message.member.roles.has(instinct.id) || message.member.roles.has(valor.id) || message.member.roles.has(mystic.id))
    {
      message.reply("you have already joined a team, please contact an Admin or Moderator if you wish to change.");
    }
  else
    {
      message.member.addRole(valor.id).catch(console.error);
      message.channel.send(`Okay <@${message.member.id}>, I'll make you Team Valor`);
    };
  }

//Team Mystic
if(args[0] == "mystic"){
  if (message.member.roles.has(instinct.id) || message.member.roles.has(valor.id) || message.member.roles.has(mystic.id))
    {
      message.reply("you have already joined a team, please contact an Admin or Moderator if you wish to change.");
    }
  else
    {
      message.member.addRole(mystic.id).catch(console.error);
      message.channel.send(`Okay <@${message.member.id}>, I'll make you Team Mystic`);
    };
  }
}
module.exports.help = {
  name: "team"
}
