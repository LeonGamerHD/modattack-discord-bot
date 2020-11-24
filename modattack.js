const Discord = require('discord.js');
const fetch = require('node-fetch')
const fs = require('fs');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '/ma '

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

var version = '1.0.0';

var servers = {};

setInterval(async () => {
    await fetch('https://yuuki-konno-dc.glitch.me').then(console.log('Pinged!'))
  }, 240000)

client.on('ready', () => {
    console.log(`${client.user.tag} Dieser Bot ist Online! ' + version`)
    client.user.setActivity('MODATTACK', { type: "WATCHING"}).catch(console.error);
})

        // Willkommens Nachricht
client.on('guildMemberAdd', member =>{

    let channel = client.channels.cache.get("780439057221812245");
    const targetChannelIdDiscord = '780491379323043850'
    const targetChannelIdMinecraft = '780491456825655347'
    if(!channel) return;

    channel.send(`Willkommen auf dem Projekt Discord Server von Minecraft MODATTACK, **${member.displayName}**! Ich wünsche dir im namen des ganzen Teams viel Spaß hier und bitte lese dir die Discord Server Regeln in ${member.guild.channels.cache.get(targetChannelIdDiscord).toString()} und die Minecraft Server Regeln in ${member.guild.channels.cache.get(targetChannelIdMinecraft).toString()}.`)
});

        // Aufwiedersehens Nachricht
        client.on('guildMemberRemove', member =>{

            let channel = client.channels.cache.get("780491100472868894");
            if(!channel) return;
        
            channel.send(`Schade das du und verlässt, **${member.displayName}**!.`)
        });

        // Befehle
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
        // Chat leeren
    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
        // Hilfe
    else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    }
        // Server info
    else if(command === 'server'){
        client.commands.get('server').execute(message, args);
    }
})

client.login(token);
