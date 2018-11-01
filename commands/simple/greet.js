const commando = require('discord.js-commando');

class Greet extends commando.Command
{
    constructor(client)
    {
        super(client,
        {
            name: 'hi',
            group: 'simple',
            memberName: 'greet',
            description: 'Greets the user'
        });
    }

    async run(message, args)
    {
        message.reply("Hello commrade!");
    }
}
module.exports = Greet;