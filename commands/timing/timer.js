const commando = require('discord.js-commando');

//Class definition
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

    //Async code that runs the timer
    async run(message, args) {

        var channel = message.channel;
        var count = parseInt(args) * 1000;

        setTimeout(timing,count, message);
    }

}

//Sends out the result of this file to the rest of the program
module.exports = Timer;