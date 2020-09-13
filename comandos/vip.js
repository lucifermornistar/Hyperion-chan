const Discord = require('discord.js');

exports.run = async (client, message, args) => {


  const embed = new Discord.MessageEmbed()
        .setTitle('Alcateia Vips!')
        .setColor('#000000')
        .setDescription(`<a:terra:732862498281226250> TABELA DE PREÇOS DOS VIPS! <a:terra:732862498281226250>
        
<a:pin:732816943538503762> [——————> 𝑅𝑎𝑛𝑘𝑈𝑝 <——————] <a:pin:732816943538503762>
         
<a:sirene:732842806179004427> VIPS MENSAIS <a:sirene:732842806179004427>
        
    <a:seta:734625042305908857>「⭐」「VIP-ALCATÉIA」 = R$ 7,00
    <a:seta:734625042305908857>「🌟」「VIP-ÔMEGA+」= R$ 18,00
    <a:seta:734625042305908857> 「🌙」「VIP-ALFA」= R$ 29,00 
        
<a:sirene:732842806179004427> VIPS TRIMENSAIS <a:sirene:732842806179004427> 
        
    <a:seta:734625042305908857> 「⭐」「VIP-ALCATÉIA」= R$ 20,00 
    <a:seta:734625042305908857>「🌟」「VIP-ÔMEGA」= R$ 40,00
    <a:seta:734625042305908857>「🌙」「VIP-ALFA」= R$ 60,00
        
  ESSES SÃO OS PREÇOS DE TODOS OS NOSSOS VIPS, CASO QUEIRA COMPRAR UM DOS VIPS ACIMA, ENTRE EM CONTATO COM O <@443241176057905152>`)
        .setTimestamp()
            .setFooter(`• Comando Solicitado por: ${message.author.tag}`)
  await message.channel.send(embed);
}