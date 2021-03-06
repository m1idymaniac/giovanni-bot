const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

//Filesystem
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.")
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

})

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`)
  bot.user.setActivity("Pokemon GO!");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

//Good Bot Command
  if(message.content === "Good bot" || message.content === "good bot" || message.content === "GOOD BOT"){
    return message.channel.send(`Thank you <@${message.member.id}>`);
  }

//Bad Bot Command
  if(message.content === "Bad bot" ||message.content === "bad bot" || message.content === "BAD BOT"){
    return message.channel.send("WHAT! This cannot be!");
  }

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(botconfig.token);
