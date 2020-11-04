const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

client.once('ready' , () => {
    console.log('Among Us MMR Bot is Online!')
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
    else if(command === 'match'){
        client.commands.get('match').execute(message, args);
    }
});
 
client.login('   ');


client.login('NzczMzMyODMzNDMwMTQyOTc2.X6HsUw.bYRoAK2rWgqAlhzeCwWDMGCtO5k');