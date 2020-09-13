const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
       let erro = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`ERRO | ${message.author.username}`)
      .addField(`Uso incorreto do comando`, `o uso correto é t!emoji nomedoemoji `)
      .addField(`OBSERVAÇÃO`, `não tem necessidade de colocar dois pontos exemplo :emoji: escreva o nome normalmente `)
      .setTimestamp(`${message.createdAt}`)
      .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})) 
       
       let erro1 = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`ERRO | ${message.author.username}`)
      .addField(`${args[0]}`, `não é um emoji deste servidor. `)
      .addField(`OBSERVAÇÃO`, `não tem necessidade de colocar dois pontos exemplo :emoji: escreva o nome normalmente `)
      .setTimestamp(`${message.createdAt}`)
      .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32})) 
  
  if (!args[0])
    return message.channel.send(erro);
  let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0]);

  if (!emoji) {
    message.channel.send(erro1);
  } else if (emoji.animated === true) {
    message.channel.send(`<a:${args[0]}:${emoji.id}>`);
  } else {
    message.channel.send(`<:${args[0]}:${emoji.id}>`);
  }
}
exports.help = {
  name: "emoji"
}