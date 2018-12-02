const commando = require('discord.js-commando');


//Class definition
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

    //Async code that says hello
    async run(message, args)
    {
        message.reply("Hello commrade!");
    }
}

//Sends out the result of this file to the rest of the program
module.exports = Greet;