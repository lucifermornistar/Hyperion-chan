module.exports = async (bot, membro) => {
  let server = bot.guilds.cache.get("723690948365647929");  
  let counter = server.memberCount;
  let memberCount = server.memberCount;

  

  
  let embed = new bot.Discord.MessageEmbed()
   .setTitle(`**Saiu...**`)
   .setImage("https://i.pinimg.com/originals/73/b1/3b/73b13bcd2590cd93ca1ca9bbc7f917be.gif")
   .setDescription(`${membro} foi em uma expedição até o reino do **Luci totoso**, será que ele ira conseguir retornar? Atualmente temos ${counter} players no server`)
   .setColor(14296838)
   .setFooter(`Nome do Membro: ${membro.displayName}`)
 
  bot.channels.cache.get("751932693641691266").send(embed)


}