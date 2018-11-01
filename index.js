const Commando = require('discord.js-commando');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const bot = new Commando.Client();
const TOKEN = require("./auth.json");


bot.registry.registerGroup('simple','Simple');
bot.registry.registerGroup('timing','Timing');
bot.registry.registerGroup('music','Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn( __dirname + '/commands');


bot.login("NDE3OTUzNTgyNjY3NzkyMzk5.DrzsqA.tOgGsvZ7pZKYO6jbyDh_0XwkreA");

bot.on('message',function(message){

    if(message.content == 'Hello' || message.content == 'hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', nice to see you here.');
    }

});
