var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
  

    var user = msg.mentions.users.first();
    if(!user) return msg.reply(' Você não mencionou alguém!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply(' Está pessoa não está no Servidor.');

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply(' Você precisa dar uma razão.');

    var channel = msg.guild.channels.cache.find(c => c.name === '〘📵〙ʀᴇᴘᴏʀᴛs');

    var log = new Discord.MessageEmbed()
    .setTitle(' ⚠️ ADVERTÊNCIA ⚠️ ')
    .addField('📋| Usuário reportado:                                                                           <a:setinha:734625042305908857> Tag:', user, true)
    .addField('📋| Reportado por:                                                                                <a:setinha:734625042305908857> Tag:' , msg.author, true)
    
    .addField('Motivo a baixo:')
    .addField(reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle(' Você Tomou uma denúncia')
    .addField('Motivo está a cima.')
    .setDescription(reason);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    msg.channel.send(`**${user}** Tomou um warn de **${msg.author}**!`);
}