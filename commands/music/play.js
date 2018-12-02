const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

//Class definition
class Play extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Plays a song'
        });
    }

    //Play the given file hosted on the server. Plays the music based on the command. 
    async run(message, args)
    {
        if(message.guild.voiceConnection){
           const broadcast = message.guild.voiceChannel.client.createVoiceBroadCast();
           broadcast.playFile('./music.mp3');
           
           //Play(message, args);
        }
        else{
            message.reply('Bot ain\'t here');
        }
    }
}

//Sends out the result of this file to the rest of the program
module.exports = Play;