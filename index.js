//Written by Erkin George
console.log('Greetings!');
const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new Discord.Client();
var auth = require('./auth.json');
//var server = require('./server.js');
var http = require('http');

var date = new Date();
var day = date.getDay();

bot.on('message',(message) =>{

    var tempString = message.toString();
    if(message.content == 'Salute' && message.author.id == auth.ownerID)
    {
        message.reply('The Supreme Dictator');
        return;
    }
    if(tempString.includes('Russia') > 0)
    {
        message.reply('The Motherland?');
        return;
    }
    if(tempString.includes('America') > 0)
    {
        message.reply('Freedom!');
        return;
    }
    if(tempString.substr(0,1) == '!')
    {
        return;
    }
    else if(message.author.id ==auth.ownerID)
    {
        //message.reply('Heed the words of your wise leader');
        message.channel.send('Heed the words of your wise leader');
    }
});

bot.on('guildMemberAdd',member =>
{
    // Send the message to a designated channel on a server:

  const channel = member.guild.channels.find(ch => ch.name === 'member-log');

  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

bot.login(auth.token);
console.log("Bot has started...");