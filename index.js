//Erkin George
//12-01-18

//Libraries
const Commando = require('discord.js-commando');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

//Creates the bot object
const bot = new Commando.Client();

//TOKEN feature to be implemented for changing servers easily
const TOKEN = require("./auth.json");

//Registering folders as groups with the needed files
bot.registry.registerGroup('simple','Simple');
bot.registry.registerGroup('timing','Timing');
bot.registry.registerGroup('music','Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn( __dirname + '/commands');

//Logs bot into given server
bot.login("");

//Greeting code that uses a message to parse out user input
bot.on('message',function(message){

    if(message.content == 'Hello' || message.content == 'hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', nice to see you here.');
    }

});
