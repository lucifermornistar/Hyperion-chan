const Discord = require("discord.js")
module.exports.run = async (client, message, args) => {

  if (message.member.permissions.has("KICK_MEMBERS")) {
    
  let xdemb = new Discord.MessageEmbed()
  .setColor("#00FFFF")
  .setTitle("Comando de kick")
  .addField(`Usado para`,`kickar um membro`, true)
  .addField("Use:", "h!kick [usuário] [motivo]", true)
  .addField("Exemplo:" ,"h!kick @Lucifer spam")
  .setTimestamp()
  .setFooter(`Comando solicitado por ${message.member.displayName}`, message.author.displayAvatarURL({Size: 32}))   

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.kickable) 
      return message.channel.send("Eu não posso kickar este usuário!");
   if(member.id === message.author.id) return message.channel.send("Não pode se kickar!")   
   if(member.user.id == "384799694569734145") return message.channel.send("Eu não posso kickar meu dono!")

    
    let motivo = args.slice(1).join(' ');
    if(!motivo) {
     return message.channel.send("Não especificou o motivo");
    } else {
     var res = `${motivo}`
    }
    
    await member.kick(motivo)
      .catch(error => message.channel.send(`Desculpe, eu não consegui kicka-lo por : ${error}`));
        
   let staff = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle(":warning: | Kick")
      .setDescription("O usuário: ``"+member+"`` Foi kickado por ``"+member.author+"`` ```Motivo\n"+res+"```")
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({Size: 32}))
      .setTimestamp()
      .setFooter("ID do usuário: "+message.author.id)

        message.channel.send(staff)

    message.delete();
  }
    
}