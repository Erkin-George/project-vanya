const commando = require('discord.js-commando');

//Class definition
class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the voice channel'
        });
    }

    //Code to disconnect the bot from the server. Uses message input. 
    async run(message, args)
    {
        if(message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect();
        }
        else{
            message.reply('Bot ain\'t here');
        }
    }
}

//Sends out the result of this file to the rest of the program
module.exports = LeaveChannelCommand;