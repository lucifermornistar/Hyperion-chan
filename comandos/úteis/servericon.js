const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
 
    let embed = new Discord.MessageEmbed()
 
    .setColor('GOLD')
    .setTimestamp(`${message.createdAt}`)
    .setTitle(`${message.guild.name}`)
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))
    .setImage(message.guild.iconURL())
 
    message.reply(embed)
 
}
 
exports.help = {
    name: 'servericon'
}
