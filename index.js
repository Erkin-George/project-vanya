const Commando = require('discord.js-commando');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const bot = new Commando.Client();
const TOKEN = require("./auth.json");


bot.registry.registerGroup('simple','Simple');
bot.registry.registerGroup('timing','Timing');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn( __dirname + '/commands');


// bot.registry.registerDefaults();
// bot.registerCommandsIn(__dirname + '/commands');

bot.login("NDE3OTUzNTgyNjY3NzkyMzk5.DrL6AA.DDvUYn5t2pqolTfOgrHpWw_Yohw");

bot.on('message',function(message){

    if(message.content == 'Hello' || message.content == 'hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', nice to see you here.');
    }

});
