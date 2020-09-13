
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva a enquete após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça uma enquete de no máximo 1000 caracteres.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "732455236307779594");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#03070C")
    .addField("Autor:", message.author)
    .addField("Votacão", content)
    .setFooter("REAJA COM OS EMOJIS PARA DAR VEREDITO")
    .setTimestamp()
  );
  await message.channel.send(`${message.author} a mensagem foi enviada com sucesso!`);

  const emojis = ["732816840493105214", "732448919870505070" ];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}
/*const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não pode usar esse comando.")
        message.delete().catch()
    
    if(!args.length) {
      return message.channel.send(" Ops,Você esqueceu de colocar a sugestão. tente colocar `h!votacao (texto)`")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "〘📊〙ᴇɴǫᴜᴇᴛᴇs" || x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send(" Não tem canal de votações com esse nome.")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("                                                                                       👥 Autor: " + message.author.tag,message.author.avatarURL())
    .setThumbnail(message.author.avatarURL()) 
    .setColor("#ff2050")
    .setDescription(args.join("  "))
    .setTimestamp()
    .setFooter(' reaja com os emojis para dar seu veredito.')
    .setTitle("                           <a:pin:732816943538503762> votação: ")
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send(" Sugestão Enviada com sucesso! " + channel)
    
  }
}
*/ 