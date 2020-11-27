module.exports = {
    name: 'server',
    description: "Server Informationen!",
    execute(message, args){
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setThumbnail(url="https://i.imgur.com/gMH3Kd2.png")
        .setTitle(name="Server Status")
        .addField(name="Server IP", value="modattack.apexmc.co", inline=true)
        .addField(name="Server Version", value="Forge 1.15.2", inline=true)
        .addField(name="Spieler Slots", value="100", inline=false)
	.addField(name="Server Zeiten", value="Immer", inline=false)
	.addField(name="Server Backup", value="Alle 2 Stunden", inline=true)
	.addField(name="Server neustart", value="Immer um 00:00 Uhr, 5 Minuten vorher gibt es eine info", inline=true)
        message.channel.send(embed);
    }
}