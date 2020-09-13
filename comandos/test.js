const Discord = require("discord.js")
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  
  const ajuda = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Lista de comandos!")
    .setDescription("Reagir de acordo com o  que procura!\n\n📚 - Informações\n\n👮 - Administrativos\n\n🎊 - Diversão")
    .setTimestamp()
    .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   
    
  message.channel.send(ajuda).then(msg => {
    msg.react('📚').then(r => {
      msg.react('👮').then(r => {
    msg.react('🎊').then(r => {
      msg.react('🖥').then(r => {
      })
      })
    })
  })
    
    const infosFilter = (reaction, user) => reaction.emoji.name === '📚' && user.id === message.author.id;
        const admFilter = (reaction, user) => reaction.emoji.name === '👮' && user.id === message.author.id;
    const funFilter = (reaction, user) => reaction.emoji.name === '🎊' && user.id === message.author.id;
    const utilFilter = (reaction, user) => reaction.emoji.name === '🖥' && user.id === message.author.id;
    
    const infos = msg.createReactionCollector(infosFilter);
        const adm = msg.createReactionCollector(admFilter);
    const fun = msg.createReactionCollector(funFilter);
    const util = msg.createReactionCollector(utilFilter)

    infos.on('collect', r2 => {
      
      ajuda.setTitle("📚|Comandos informativos!")
      ajuda.setDescription(bot.prefixo+"Ajuda - Mostra os comandos do bot!")
      msg.edit(ajuda)
      
    })
    
    adm.on('collect', r2 => {
      
      ajuda.setTitle("⚠️|Comandos de administração!")
      ajuda.setDescription("ban - Bana um membro!\n"+"ttban - Veja a lista dos usuários banidos!\n"+"unban - Desbana um membro!\n"+"anuncio - faça um anúncio em algum canal!")
      msg.edit(ajuda)
      
    })
    
    fun.on('collect', r2 => {
      
      ajuda.setTitle("🎊|Comandos de diversão!")
      ajuda.setDescription("say - Me faça falar algo!")
      msg.edit(ajuda)
      
    })
    
    util.on('collect', r2 => {
      
      ajuda.setTitle("🖥|Comandos Úteis")
      ajuda.setDescription("`sugestao` - Mande uma sugestão pro servidor.\n"+"`report` - Reporta um usuário para a staff.\n"+"`user-info` - Veja as Informações de um usuário.\,"+"`Server-info` - Veja as Informações do servidor.")
    })
    
  })  
} 