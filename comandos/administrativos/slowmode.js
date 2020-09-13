const Discord = require("discord.js")
exports.run = (client, message, args) => {
    try{
        if(!args[0] || args[0] > 21600) return message.channel.send("Insira Um Tempo Em Segundos, Máximo: 21600 Segundos")
        message.channel.setRateLimitPerUser(args[0])
        var embed = new Discord.MessageEmbed()
        .setColor("#b6eb30")
        .setAuthor(`Modo Lento`, message.author.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setDescription(`**Modo Lento Alterado Para **: ${args.join(' ')} Segundos`)
        message.channel.send({embed});
    }catch(err){
        message.channel.send("Erro Ao Colocar "+args[0]+" No Modo Lento.")
    }
}