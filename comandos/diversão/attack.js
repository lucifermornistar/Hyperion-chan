const Discord = require('discord.js');


 
exports.run = async (bot, message, args) => {

var list = [
  'https://i.pinimg.com/originals/87/b0/0f/87b00fa2692bad0d3c8266fd598eb36b.gif',//Black clover
  'https://thumbs.gfycat.com/ArcticVeneratedGull-size_restricted.gif',//kirito asuna
'https://i.gifer.com/ZBid.gif',
'https://media1.tenor.com/images/9332d55bf8182c24e106b6182f15b0bb/tenor.gif?itemid=9720724',//van melodias
'https://media1.tenor.com/images/4858451b1c8a15708ddad61afb3c63cd/tenor.gif?itemid=14020028',//guila meliodas
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para ATACAR !');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} acaba de ATACAR ${user}`)
        .setImage(rand)
  await message.channel.send(embed);
  
}