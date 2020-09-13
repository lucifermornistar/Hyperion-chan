const Discord = require('discord.js')

module.exports = async (bot, message) => { //cuida do evento de mensagens enviadas em chat 

 let embed = new Discord.MessageEmbed()
    .setColor("RED")
      .setTitle(message.author.tag)
    .setDescription("📝**Menssagem de texto deletada**\n\n**Canal de texto:**<#"+message.channel.id+">\n\n Menssagem\n `"+message.content+"`")  
 bot.channels.cache.get("752108122675347456").send(embed)

}