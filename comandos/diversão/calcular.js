const Discord = require('discord.js');
const c = require ('./config.json')

module.exports.run = async (bot, message, args){

        if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor(0x808080)
        .setTitle(' Calculador ')
        .addField(' Questão', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField(' Resposta ', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }