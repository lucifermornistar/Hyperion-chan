const Discord = require('discord.js')
exports.run = async (bot, message, args, arg_txt, chat) => {
  
  let member = message.mentions.members.first();
  var user = message.mentions.users.first()
    
    let xdemb = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Comando de ban")
    .addField("Usado para:", `Bane um membro`, true)
    .addField("Use:", `h!ban [usuário] [motivo]`, true)
    .addField("Exemplo:", `h!ban @Lucifer spam`)

  if(!message.guild.member(bot.user).permissions.has("BAN_MEMBERS")) return message.channel.send("**Não tenho permissão para banir**");
        if(!args[0]) return  message.channel.send('**Mencione o id do usuário!**');
        if(args[0].length < 16) return message.channel.send('** Este ID não é o id de um usuário!**');
        message.guild.fetchBans().then(bans => { 
            var Found = bans.find(m => m.user.id === args[0]);
            console.log(bans)
            if(!Found) return message.channel.send(`**Eu não encontrei <@${args[0]}> na ban list**`);
            
    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
    if(!member.bannable) return message.channel.send("Eu não consigo banir este usuário!")
    if(member.user.id === "seu_id") return message.channel.send("Eu não consigo banir o dono!")

    if(member.id === message.author.id) return message.channel.send("Você não pode banir a si mesmo!")

  let reason = args.slice(1).join(" ");
    if(!reason) {
      return message.channel.send("Não especificou uma razão!");
    } else {
       var res = reason
    }

            message.guild.members.unban(args[0]);
          
          let staff = new Discord.MessageEmbed()
              .setColor("#00FFFF")
              .setTitle("✅ | Unban")
              .setDescription("O usuário: <@"+args[0]+"> foi desbanido por <@"+message.author.id+">")
              .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({Size: 32}))
              .setTimestamp()
              .setFooter("ID do usuário: "+args[0])  
         //podem usar o embed acima ou mandar a mensagem direto 
    message.channel.send("O Usuário <@"+args[0]+"> foi desbanido! Ele recebeu uma segunda chance de mostrar que mudou! Espero que prove isto...")
 
          })   
}