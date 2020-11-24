module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args){
        const Discord = require('discord.js');
        const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
        const targetChannelIdBotChannel = '780489282234220565'
        const embed = new Discord.MessageEmbed()
        .setTitle(name="**Hilfe**")
        .addField(name="Prefix", value="/ma <command>", inline=true)
        .addField(name="clear", value="Team Mitgliedern vorbehalten", inline=true)
        .addField(name="help", value="Damit kannst du diese Hilfe öffnen", inline=true)
        .addField(name="#🔳♻️🤖bot-commands🤖♻️🔳", value="Hier kannst du mir anweisungen geben!", inline=true)
        message.channel.send(embed);
    }
}