const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send(" Ops,Você esqueceu de colocar a sugestão. tente colocar `h!votacao (texto)`")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "〘❗〙ᴀᴠɪsᴏs-sᴛᴀғғ" || x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send(" Não tem canal de votações com esse nome.")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setThumbnail(message.author.avatarURL()) 
    .setColor("#ff2050")
    .setDescription(args.join("  "))
    .setTimestamp()
    .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}))
    .setTitle('<a:sirene:732842806179004427> Aviso:')
    channel.send(embed).then(m => {
      m.react("😱")
      m.react("🚨")
    })
    

    
    message.channel.send(" Anuncio Enviada com sucesso! " + channel)
    
  }
}