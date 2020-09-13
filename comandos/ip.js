const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://i.pinimg.com/originals/b0/37/a0/b037a0d27fc2fce28cd279561ec89825.gif','https://i.pinimg.com/originals/a7/4a/bf/a74abfc0fa25c35353066b37443e74ae.gif',
  'https://78.media.tumblr.com/258150e0ec251466cc845a258bce892f/tumblr_p6gnlhHm021v6bs4yo4_500.gif'
];


/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('IP')
        .setColor('#FF002C')
        .setDescription(`👑 Alcateia | Todos os direitos reservados 👑
 
  <a:loading:745654632675803207> NOSSO IP E PORTA <a:loading:745654632675803207>
 <a:load:745654698257940650> IP: 
  <a:load:745654698257940650> PORTA:  
 
  <a:certin:733069389477314643> MINI-GAMES <a:certin:733069389477314643> 
 <a:pin:732816943538503762> Rankup: Lançado! <:1Sim:735451207145095269>
 <a:pin:732816943538503762> Factions: Não Lançado! <:1Nao:735451133895508048> 
 <a:pin:732816943538503762> SkyBlock: Não Lançado! <:1Nao:735451133895508048>`)
        .setTimestamp()
        .setFooter('Bot está em beta')
  await message.channel.send(embed);
}
/*<a:certificado:732816840493105214>><—————Factions—————>< <a:certificado:732816840493105214>

<a:pin:732816943538503762> IP: HyperionNetwork.blazebr.xyz

<a:pin:732816943538503762> Porta:25636

 Status Factions: Lançado <:1Sim:735451207145095269>

<a:certificado:732816840493105214> ><—————<a:terra:732862498281226250>Rankup<a:terra:732862498281226250>—————>< <a:certificado:732816840493105214>

<a:pin:732816943538503762> IP:

<a:pin:732816943538503762> Porta: 

 Status Rankup: não lançado <:negativo:73244891987050507 */