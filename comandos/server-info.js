const Discord = require('discord.js');

exports.run = (client, message, args) =>{
    function checkBots(guild) {
        let botCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.bot) botCount++;
        });
        return botCount;
    }
    
    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.cache.forEach(member => {
            if(!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    function checkOnlineUsers(guild) {
        let onlineCount = 0;
        guild.members.cache.forEach(member => {
            if(member.user.presence.status === "online")
                onlineCount++; 
        });
        return onlineCount;
    }

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
        .setAuthor(`<:hyperionNetwork:733096222553931776>|  ${message.guild.name}`, message.guild.iconURL)
        .setColor("#15f153")
        .addField('<a:ferramentas:733069342815551518>| Dono do servidor', message.guild.owner, true)
        .addField('<a:terra:732862498281226250>região do servidor<a:terra:732862498281226250>', message.guild.region, true)
        .setThumbnail(sicon)
        .addField("<a:sirene:732842806179004427> Nome do servidor", message.guild.name)
        .addField('<a:certin:733069389477314643> Membros do servidor', message.guild.memberCount)
        .addField('<a:carregando3:744936635048787978> humanos', checkMembers(message.guild), true)
        .addField('Bots', checkBots(message.guild), true)
        .addField('<a:certificado:732816840493105214> Online', checkOnlineUsers(message.guild))
        .setFooter('servidor criado em:')
        .setTimestamp(message.guild.createdAt);

    return message.channel.send(serverembed);
}

module.exports.info = {
  name: "serverinfo",
}
 