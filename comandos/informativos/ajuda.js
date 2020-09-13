const Discord = require("discord.js")
const fs = require("fs")

exports.run = async (bot, message, args) => {
  
  var blacklist = [
   "723690948365647932",
   "723913799928643676",
   "723703672714035270",
    "723980400615227487"
  ]
   
{

if(blacklist.includes(message.channel.id)) return message.channel.send("`"+message.author.tag+"`Você Não pode utilizar os meus comandos no <#"+message.channel.id+">"+",porfavor use o canal: <#723913758237392926>")
if(message.member.roles.cache.has("753249537027473461")){
console.log("esse pode usar o comando")} 
  
  
}


  let prefixo = bot.prefixo;
  

    let comandos = new Discord.MessageEmbed() //embed
          .setColor("BLUE")
            .setTitle(`CENTRAL DE COMANDOS!`)         
              .setDescription("Reagir de acordo com o  que procura!\n\n<:info:753857554374721588> - Informações\n\n<:configuracoes:753860058776862811> - Administrativos\n\n<a:giveway:753861501709713448> - Diversão\n\n<a:ferramentas:733069342815551518> - Utilidade")
            .setTimestamp()
          .setFooter(`Comando solicitado por ${message.member.displayName}`, `${message.author.displayAvatarURL({size: 32})}`)
          message.channel.send(comandos).then(msg => { 
           msg.react('753857554374721588').then(r => { // info
             msg.react('753860058776862811').then(r => { // adm
               msg.react('753861501709713448').then(r => { // fun
             msg.react('733069342815551518').then(r => { // Util
        })  
      })
    })
  })
  
                                              
            //filtros
    const infosFilter = (reaction, user) => reaction.emoji.id === '753857554374721588' && user.id === message.author.id;
      const admFilter = (reaction, user) => reaction.emoji.id === '753860058776862811' && user.id === message.author.id;
        const funFilter = (reaction, user) => reaction.emoji.id === '753861501709713448' && user.id === message.author.id;
      const utilFilter = (reaction, user) => reaction.emoji.id === '733069342815551518' && user.id === message.author.id;
    const voltarFilter = (reaction, user) => reaction.emoji.id === '753855313542643823' && user.id === message.author.id;

    
    const infos = msg.createReactionCollector(infosFilter);
      const adm = msg.createReactionCollector(admFilter);
        const fun = msg.createReactionCollector(funFilter);
      const util = msg.createReactionCollector(utilFilter);
    const voltar = msg.createReactionCollector(voltarFilter);
     
         adm.on('collect', r2 => { 
            msg.reactions.removeAll()

                comandos.setColor("RED")
                  comandos.setTitle("Comandos de administração")
                comandos.setDescription("``"+prefixo+"ban`` - Bana um membro!\n"
              +"``"+prefixo+"ttban`` - Veja a lista dos usuários banidos!\n"
              +"``"+prefixo+"unban`` - Desbana um membro!\n"
              +"``"+prefixo+"anuncio`` - faça um anúncio em algum canal!"
              +"``"+prefixo+"addemoji`` - Adiciona um emoji no servidor\n"
              +"``"+prefixo+"addrole`` - Adiciona uma rolê no usuário mencionado\n")
                 msg.edit(comandos).then(msg => { 
                   msg.react("753855313542643823").then(r => {//prox
                })
              })
            })
 
 
         infos.on('collect', r2 => {
           msg.reactions.removeAll()

            comandos.setColor("GREEN")
              comandos.setTitle("Comandos de informação")
            comandos.setDescription("``"+prefixo+"Ajuda`` - Mostra os comandos do bot!\n"
                +"``"+prefixo+"ip`` - Mostra o ip do servidor\n")

           msg.edit(comandos).then(msg => {

            msg.react("753855313542643823").then(r => {

            })
          })
        })

        util.on('collect', r2 => {
             msg.reactions.removeAll()

                comandos.setColor("BLUE")
                  comandos.setTitle("Comandos úteis")
                comandos.setDescription("``"+prefixo+"sugestao`` - Envie uma sugestão no canal de sugestões!\n"+"``"+prefixo+"user-info`` - Veja informações do usuário mencionado.\n"+"``"+prefixo+"server-info`` - Veja as Informações do servidor.")
          
                 msg.edit(comandos).then(msg => { 
                   msg.react("753855313542643823").then(r => {  
              }) 
            })
          })
   
       fun.on('collect', r2 => {
         msg.reactions.removeAll()

            comandos.setColor("BLUE")
              comandos.setTitle("Comandos de diversão")
            comandos.setDescription("``"+prefixo+"say`` - Me faça falar algo!\n"
            +"``"+prefixo+"kiss`` - Beije o usuário mencionado!\n"
            +"``"+prefixo+"avatar`` - Vejá o avatar do usuário mencionado\n"
            +"``"+prefixo+"ship`` - Mostra a chances dos dois se amarem\n"
            +"``"+prefixo+"abraço`` - Abraça o usuário mencionado\n"+"``"+prefixo+"calculadora`` - Calcule uma conta.\n"
            +"``"+prefixo+"meme`` - Mostra um meme aleatório\n")
         
             msg.edit(comandos).then(msg => { 

             msg.react("753855313542643823").then(r => {  
           }) 
         })
       })
     
       voltar.on('collect', r2 => {
         msg.reactions.removeAll()

            comandos.setColor("BLUE")
              comandos.setTitle("Central de comandos!")
            comandos.setDescription("Reagir de acordo com o  que procura!\n\n<:info:753857554374721588> - Informações\n\n<:configuracoes:753860058776862811> - Administrativos\n\n<a:giveway:753861501709713448> - Diversão\n\n<a:ferramentas:733069342815551518> - Utilidade")
             msg.edit(comandos).then(msg => { 
               msg.react('753857554374721588').then(r => { // adm  
                 msg.react('753860058776862811').then(r => { // infos
              msg.react('753861501709713448').then(r => { // fun
             msg.react('733069342815551518').then(r=> {
              })  
            })
          })
        })
      })
    })
            
 })
  
}