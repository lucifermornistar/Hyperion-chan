module.exports = async (bot) => { //faz algo qdo o bot liga
  console.log('!!! estou pronto para ser usado !!!\n  To de olho em '+bot.channels.cache.size+' canais (chats + calss)');

  
  const status = [
    "dnd",
  ]
  
  const atividades = [
     ["Criado Por Lucifer", "LISTENING"],
     ["Entre No Rede Alcateia: https://discord.gg/EGhzdez", "PLAYING"],
     ["de a.ajuda para ver meus comandos.", "WATCHING"],
     ["Logo Logo teremos atualizações", "WATCHING"]//bot adicionar quantos quiser :V
    ];
  setInterval(async () => { // controlar o intervalo
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
      await bot.user.setActivity(atividades[i][0], { type: atividades [i][1] });
  }, 10000); // intervalo

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
      await bot.user.setStatus(status[b])
  }, 20000)
  
  
  var content3 = "**<a:certificado:732816840493105214>  Olá, Primeiramente Antes de Tudo, peço que leiam as regras em <#724002040115888269> , para saber se aquilo que Irá fazer será permitido.**";
  var channel3 = bot.guilds.cache
    .get("723690948365647929") // Id do Servidor
    .channels.cache.get("723690948365647932"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel3.send(content3); 
  }, 1000 * 1200 * 1200 * 1); 
  channel3.send(content3);
  console.log("É para se inscrever mesmo! Saco pela.");

   var content2 = " **Bom, Qualquer Dúvidas Chamem um dos staffs do servidor pois iremos respoder o mais Rápido Possível, Ou abram um ticket em <#723721488561209446> **";
  var channel2 = bot.guilds.cache
    .get("723690948365647929") // Id do Servidor
    .channels.cache.get("723690948365647932"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel2.send(content2); 
  }, 1000 * 1200 * 1200 * 1); 
  channel2.send(content2);
  console.log("É para se inscrever mesmo! Saco pela.");

 /* var content1 = "👑 Hyperion Network 👑\n\n <a:loading:745654632675803207> NOSSO IP E PORTA <a:loading:745654632675803207>\n<a:load:745654698257940650> IP: Hyperion.blazebr.xyz\n <a:load:745654698257940650> PORTA: 25604 \n\n <a:certin:733069389477314643> MINI-GAMES <a:certin:733069389477314643> \n<a:pin:732816943538503762> Rankup: Lançado! <:1Sim:735451207145095269>\n<a:pin:732816943538503762> Factions: Não Lançado! <:1Nao:735451133895508048> \n<a:pin:732816943538503762> SkyBlock: Não Lançado! <:1Nao:735451133895508048> \n\n\<:dc:745761852071346256> NOSSO DISCORD <:dc:745761852071346256>\n\n {||  https://discord.gg/5KsKp2P ||}\n\n<:zap:745761887412813854> NOSSO WHATSSAP <:zap:745761887412813854> \n\n{||  https://chat.whatsapp.com/KzLSyva6lz24Y99PdxZE8g  ||}";
  var channel1 = bot.guilds.cache
   .get("731945393700601947") // Id do Servidor
    .channels.cache.get("732446185318776892"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel1.send(content1); 
  }, 1000 * 1200 * 1200 * 1); 
  channel1.send(content1);
  console.log("É para se inscrever mesmo! Saco pela.");

  var content = "<a:terra:732862498281226250> TABELA DE PREÇOS DOS VIPS! <a:terra:732862498281226250> \n\n <a:pin:732816943538503762> [——————> 𝑅𝑎𝑛𝑘𝑈𝑝 <——————] <a:pin:732816943538503762> \n\n <a:sirene:732842806179004427> VIPS MENSAIS <a:sirene:732842806179004427> \n\n「⭐」「VIP-ALCATÉIA」 = R$ 7,00\n 「🌟」「VIP-ÔMEGA+」= R$ 18,00\n 「🌙」「VIP-ALFA」= R$ 29,00 \n\n<a:sirene:732842806179004427> VIPS TRIMENSAIS <a:sirene:732842806179004427> \n\n 「⭐」「VIP-ALCATÉIA」= R$ 20,00 \n  「🌟」「VIP-ÔMEGA」= R$ 40,00\n 「🌙」「VIP-ALFA」= R$ 60,00  \n\nESSES SÃO OS PREÇOS DE TODOS OS NOSSOS VIPS, CASO QUEIRA COMPRAR UM DOS VIPS ACIMA, ENTRE EM CONTATO COM O<@443241176057905152>";
  var channel = bot.guilds.cache
   .get("731945393700601947") // Id do Servidor
    .channels.cache.get("732446185318776892"); //Id do canal onde a mensagem será enviada
setInterval(function() {
    channel.send(content); 
  }, 200 * 240 * 240 * 1); 
  channel.send(content);
  console.log(" ");

/*var content3 = "SERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\N @everyone";
  var channel3 = bot.guilds.cache
    .get("731945393700601947") // Id do Servidor
    .channels.cache.get("732446185318776892"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel3.send(content3); 
  }, 1 * 1 * 1 * 1); 
  channel3.send(content3);
  console.log("É para se inscrever mesmo! Saco pela.");
  
  var content5 = "SERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\N @everyone";
  var channel3 = bot.guilds.cache
    .get("731945393700601947") // Id do Servidor
    .channels.cache.get("732446185318776892"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel3.send(content3); 
  }, 1 * 1 * 1 * 1); 
  channel3.send(content5);
  console.log("É para se inscrever mesmo! Saco pela.");
  
  var content4 = "SERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\N @everyone";
  var channel3 = bot.guilds.cache
    .get("731945393700601947") // Id do Servidor
    .channels.cache.get("732446185318776892"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel3.send(content4); 
  }, 1 * 1 * 1 * 1); 
  channel3.send(content3);
  console.log("É para se inscrever mesmo! Saco pela.");
  
  
  var content8 = "SERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\NSERVIDOR FALIDO\N @everyone";
  var channel3 = bot.guilds.cache
    .get("731945393700601947") // Id do Servidor
    .channels.cache.get("732446185318776892"); //Id do canal onde a mensagem será enviada
  setInterval(function() {
    channel3.send(content8); 
  }, 1 * 1 * 1 * 1); 
  channel3.send(content3);
  console.log("É para se inscrever mesmo! Saco pela.");
  
  */
  
}