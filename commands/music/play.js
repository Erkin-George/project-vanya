const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');


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
module.exports = Play;