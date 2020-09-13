const Discord = require('discord.js')
module.exports = async (bot, message) => { //cuida do evento de mensagens enviadas em chat 
  if(message.author.bot)//se for msg privada ou de bot -> cai fora
    return; ///  || !message.guild
    
    
    ///faz com que o bot interaja com a menssagem:

if (message.content.toLowerCase().includes("tudo bem")){
    message.channel.send("tudo e você?")
    message.react('752502170191921202')
}

///invite block
  
  
  
  
  if(message.member.roles.cache.has("723691493910511627")){
console.log("esse pode enviar o invite")
} else {
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
    const embed = new Discord.MessageEmbed()
        .setTitle('<a:sirene:732842806179004427> AVISO!')
        .setColor('#000000')
        .setDescription(`${message.author},Você não pode postar links de outros servidores aqui!`)
      await message.channel.send(embed)
  }
}
  
  
  
  
  
  /*const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
    const embed = new Discord.MessageEmbed()
        .setTitle('<a:sirene:732842806179004427> AVISO!')
        .setColor('#000000')
        .setDescription(`${message.author},Você não pode postar links de outros servidores aqui!`)
      await message.channel.send(embed);
  }*/

///faz O bot responder se for mencionado
      if(!message.content.startsWith(bot.prefixo)){//se a msg não inicia com o prefixo 
    var mencionados = message.mentions.members;
    if(mencionados.size && mencionados.has("725898582846341140")) {
      return message.channel.send("<:emoji_3:744041138486247445> | Olá, Meu prefixo neste servidor é `a.`, para ver o que eu posso fazer, use `a.ajuda`!")
    } else    
      return;//-> cai fora
      }
  
  //if(message.content.startsWith("=="))//se for comando de outro bo com o prefixo ==
  //  return;
  
  var arg_texto = message.content.slice(bot.prefixo.length); //remove o prefixo da msg
  var argumentos = arg_texto.trim().split(/ +/g); //divide a msg do comando
  var comando = argumentos.shift().toLowerCase(); //pega o comando, taca pra minúsculo
  
  var chat = message.channel;
  let remover = comando.length+1;
  arg_texto = arg_texto.slice(remover)
  
  switch(comando){
   case "help":
   case "comandos":
    comando = "ajuda"; break;
  }
  
  
  if(bot.pastas[comando] && bot.pastas[comando].includes("comandos")){
    
    /*if(!message.guild && !["ping", "litten", "eevee", "comandos", "ajuda", "raça", "r", "magia", "classes", "D&D"].includes(comando)){//se é mensagem privada, bloqueia se não for esses comandos
      return chat.send("Este comando não pode ser executado no privado!"); 
    }*/
    
    console.log(message.author.tag + '  ' + bot.prefixo + comando + ' ' + arg_texto);
    bot[comando](bot, message, argumentos, arg_texto, chat); //// client, mensagem, comando, argumentos, msg_str, chat, mlog, acesso
    
  }
  else{//Se não existe o comando, cai fora
    if(!message.guild){//se é mensagem privada
      return; //cai fora
    }
    const embed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setDescription(`${message.author} ,Esse comando não existe,Verifique sua Ortografia`)
   await message.channel.send(embed)  
  }

}