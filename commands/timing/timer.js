const commando = require('discord.js-commando');

function timing(message)
{
    message.channel.sendMessage("Timer done");
}

class Timer extends commando.Command {
    constructor(client) {
        super(client,
            {
                name: 'timer',
                group: 'timing',
                memberName: 'timer',
                description: 'Starts a timer'
            });
    }

    async run(message, args) {

        var channel = message.channel;
        var count = parseInt(args) * 1000;

        setTimeout(timing,count, message);
    }

}


module.exports = Timer;