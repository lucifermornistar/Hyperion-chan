const Discord = require('discord.js');

exports.run = async (client, message, args) => {


  const embed = new Discord.MessageEmbed()
        .setTitle('<a:ferramentas:733069342815551518> Regras | REDE ALCATEIA')
        .setColor('#000000')
        .setDescription(`

<a:seta:734625042305908857> 1ª Regra - Ser respeitoso com todos aqui nesse grupo isso também inclui os Membros da Staff e os Donos,e administradores etc.

<a:seta:734625042305908857> 2ª Regra - Sem racismo, homofobia, gordofobia, machismo, etc (caso isso acontecer fale com os Staffs.

<a:seta:734625042305908857> 3ª Regra - Proibido fazer perguntas pessoais para as pessoas que se sentem incomodadas com isso. 

<a:seta:734625042305908857> 4ª Regra - Sem mendigar pedindo vip ou tags Administrativas ou não.

<a:seta:734625042305908857> 5ª Regra - só é permitido Usar comandos de bot na sala <#723913758237392926> (pode usar comandos de musica na <#724625713495277659> .

<a:seta:734625042305908857> 6ª Regra - Proibido muito caps lock nos chats, (alguns cargos podem).

<a:seta:734625042305908857> 7ª Regra - Não inserir links nas salas!

<a:seta:734625042305908857> 8ª Regras - Não mencionar staffs ou everyone atoa, nos sorteios apenas here apenas pra sorteios, e vocês moderadores helpers e staffs , não deem mute atoa nos membros!

<a:seta:734625042305908857> 9ª Regra - Sem flood ou excesso de emojis nos chats de bate papo e entretenimento, (limite de palavras/letras: 7/7).

<a:seta:734625042305908857> 10ª Respeitar todos tipos de Pensamentos independente de qual seja, Gênero, Cor e Religião etc.

<a:seta:734625042305908857> 11ª Regra - Proibido assédio ou qualquer coisa do tipo com qualquer membro do servidor.

<a:seta:734625042305908857> 12ª proibido spam de emoji selecione só 1.

<a:emoji_bot:753668478879137793> SISTEMA DE Advertências! <a:emoji_bot:753668478879137793>
<a:ferramentas:733069342815551518> 1 ADV= 1 AVISO
<a:ferramentas:733069342815551518> 2 ADV= MUTE DE 2H
<a:ferramentas:733069342815551518> 3 ADV= MUTE DE 9H
<a:ferramentas:733069342815551518> 4 ADV = MUTE DE 24H
<a:ferramentas:733069342815551518> 5 ADV =BAN DE 7 DIAS
<a:ferramentas:733069342815551518> 6 ADV = BAN PERMANENTE`)
       .setImage("https://cdn.discordapp.com/attachments/747817990309019648/753670293863661588/Screenshot_20200910-133630_Discord.jpg")
        .setThumbnail("https://cdn.discordapp.com/attachments/732982950441779240/753669331266699304/desconhecido.gif")
        .setTimestamp()
            .setFooter(`Feito por Lucifer`)
  await message.channel.send(embed);
}