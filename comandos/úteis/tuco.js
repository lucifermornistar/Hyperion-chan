const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('SEU TÍTULO AQUI!')
    .setDescription('SUA DESCRIÇÃO AQUI!')
    message.channel.send(embed)
}
 