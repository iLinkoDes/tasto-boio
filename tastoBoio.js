const Discord = require("discord.js");   // Libreria Discord.js
const client = new Discord.Client(); 	 // Cliente
const config = require("config.json"); // Configuracion tastoBoio


let prefix = config.prefix;

// Comprobacion de Funcionamiento
client.on("ready", () => {
   console.log(`Estoy listo!, 
            conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);


   client.user.setPresence({
       status: "online",
       game: {
           name: "tb help for help",
           type: "PLAYING"
       }
   });

});

client.on("guildMemberAdd", (member) => {

    let canal = client.channels.get('531983375758786563'); 
    canal.send(`Hola ${member.user}, bienvenido al servidor ${member.guild.name} pasala bien!.`);
   
});

client.on("guildBanAdd", (member) =>{

    let canal = client.channels.get('531983375758786563');
    canal.send(`${member.user} BIRI BIRI BAN BAN! `);
})

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));


// ====Funciones Primordiales del Bot=====

client.on("message", (message)=>{
  if (!message.content.startsWith(prefix)) return; 
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  switch (command){

    // Comando PING
    case "ping":

          let ping = Math.floor(message.client.ping);
          message.channel.send(":ping_pong: Pong!, " + ping + " ms!");

    break;

    // Comando HOLA
    case "hola":

          message.reply("Hola! Como has estado? :grinning: ");

    break;

    // Comando EMBED
    case "embed":

          const em = new Discord.RichEmbed() 
          .setTitle("Este es su título, puede contener 256 caracteres")
          .setAuthor(message.author.username, message.author.avatarURL)
          .setColor(0x00AE86)
          .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
          .setFooter("Pie de página, puede contener 1024 caracteres", client.user.avatarURL)
          .setImage(message.author.avatarURL)
          .setThumbnail(message.author.avatarURL)
          .setTimestamp()
          .setURL("https://github.com/CraterMaik")
          .addField("Este es un título de campo", "Este es un valor de campo puede contener 1024 caracteres.")
          .addField("Campo en línea", "Debajo del campo en línea",  true)
          .addBlankField(true)
          .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);
          
          message.channel.send({embed: em});

    break;

    // Comando MINI
    case "mini":
          message.channel.send({embed: {
          color: 3447003,
          author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
          },
          title: "Enlace Embed",
          url: "https://github.com/CraterMaik",
          description: "Mesaje de prueba para la descripcion del embed.",
          fields: [{
              name: "Campo1",
              value: "Pueden tener diferentes campos con pequeñas descripciones."
            },
            {
              name: "Campo2",
              value: "Puedes poner [Enlaces web](https://github.com/CraterMaik) dentro del embed."
            },
            {
              name: "Campo3",
              value: "Puedes poner todos los Markdown *cursiva* **__Marcado__** dentro de un embed."
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "github.com/CraterMaik"
                }
            }
        });
    break;


    // Comando ARG
    case "arg":

          message.channel.send("Working!");

    break;

    // Comando ARGS
    case "args":

          let texto = args.join(" ");
          if(!texto) return message.channel.send(`Escribe un argumento.`);

          message.channel.send(texto);


    break;

    // Comando KICK
    case "kick":

          let mencionado = message.mentions.users.first();
          let razon = args.slice(1).join(' ');

          if(!mencionado) return message.reply('No ha mencionando a ningún miembro.');
          if(!razon) return message.reply('Escriba una razón del uso de kick.');

          message.guild.member(mencionado).kick(razon);
          message.channel.send(`**${mencionado.username}**, fue pateado del servidor, razón: ${razon}.`);

    break;

    // Comando HELP
    case "help":

          message.reply('Revisa tus mensajes privados.');

          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .setThumbnail(message.author.avatarURL)
          .setTitle("Comandos Disponibles")
          .addField("ping", "pong!")
          .addField("hola", "Saludo del Bot.")
          .addField("embed", "Despliega un Embed con Informacion.")
          .addField("mini", "Despliega un Embed pequeño.")
          .addField("arg", "Comprobacion de que el Bot esta Funcionando.")
          .addField("args", "Comando que admite escribir texto que el bot te regresa.")
          .addField("kick", "Kickea un usuario del servidor. Ejemplo: tb kick @user#1234")
          .addField("cori", ":heart:")
          .addField("datos", "Fun: tb datos _Nombre_ _Edad_ _Color_")
          .addField("avatar", "Te muestra tu propia foto de perfil")
          .addField("servidor", "Muestra informacion del Servidor")
          .addField("purgar", "Elimina mensajes. Ej: tb purgar **5**")
          .setColor(0x66b3ff)
          message.author.send({embed});
    break;

    // Comando CORI
    case "cori":
          message.reply(" ama mucho a Cori :heart::heart::heart::heart::heart::heart::heart:");
    break;

    // Comando DATOS
    case "datos":

          let nombre = args[0];
          let edad = args[1];
          let color = args[2]; 

          message.reply(`Hola ${nombre}, tienes ${edad} años y te gusta el color ${color}`);

    break;

    // Comando AVATAR
    case "avatar":

          let miembro = message.mentions.users.first();
          if(!miembro){
            const avatarEmbed = new Discord.RichEmbed()
            .setImage(`${message.author.avatarURL}`)
            .setColor(0x66b3ff)
            .setFooter(`Avatar de ${message.author.tag}`);
          message.channel.send({embed: avatarEmbed});

          };

    break;

    // Comando SERVIDOR
    case "servidor":

          var server = message.guild;

          const serverEmbed = new Discord.RichEmbed()
            .setThumbnail(server.iconURL)
            .setAuthor(server.name, server.iconURL)
            .addField('ID', server.id, true)
            .addField('Region', server.region, true)
            .addField('Creado el', server.joinedAt.toDateString(), true)
            .addField('Dueño', server.owner.user.tag + '('+server.owner.user.id +')', true)
            .addField('Miembros', server.memberCount, true)
            .setColor(0x66b3ff)

          message.channel.send({embed: serverEmbed});

    break;

    // Comando PURGAR
    case "purgar":

          let cantidad = parseInt(args[0]);
          message.channel.bulkDelete(cantidad);

    break

    case "rol":

          let rol = args[0];

          if(!rol) return message.reply("Escribe un Rol!");



          if(rol === 'agregar'){
            

                  let miembro = message.mentions.members.first();
                  let nombrerol = args.slice(2).join(' ');


                  let role = message.guild.roles.find("name", nombrerol);
                  let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

                  if(!perms) return message.channel.send("No tienes permisos suficientes, para agregar roles.");
                  if(!miembro) return message.reply('Debe mencionar a un miembro.');
                  if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar.');
                  if(!role) return message.channel.send('Rol no encontrado en el servidor.');

                  miembro.addRole(role).catch(console.error);
                  message.channel.send(`El Rol **${role.name}** fue agregado a **${miembro.user.username}**.`);



          }else
          if(rol === 'quitar'){

                  let miembro = message.mentions.members.first();
                  let nombrerol = args.slice(2).join(' ');


                  let role = message.guild.roles.find("name", nombrerol);
                  let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

                  if(!perms) return message.channel.send("No tienes permisos suficientes, para agregar roles.");
                  if(!miembro) return message.reply('Debe mencionar a un miembro.');
                  if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar.');
                  if(!role) return message.channel.send('Rol no encontrado en el servidor.');

                  miembro.removeRole(role).catch(console.error);
                  message.channel.send(`El Rol **${role.name}** fue removido a **${miembro.user.username}**.`);
          }else{

          let busqueda = message.guild.roles.find("name", `${rol}`);
          
          if(!busqueda) {
              message.channel.send('Rol no encontrado en el servidor.');

          } else{
              if(message.member.roles.has(busqueda.id)) {
                let miembrosRol = message.guild.roles.get(busqueda.id).members;
                message.channel.send('Si tienes el rol: `'+busqueda.name+'`.');
                message.channel.send(`Curiosamente, este rol tiene **${miembrosRol.size}** miembro(s).`)

              } else {
                message.channel.send('No tienes el rol: `'+busqueda.name+'`.');

              };

          };
        };
    break;

    case "join":

          let Canalvoz = message.member.voiceChannel;

          if(!Canalvoz || Canalvoz.type !== 'voice') {
              message.reply('¡Necesitas unirte a un canal de voz primero!.');

          } else if (message.guild.voiceConnection) {
              message.reply('Ya estoy conectado en un canal de voz.');

          } else {
              message.reply('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                      m.edit('Conectado exitosamente.').catch(error => console.log(error));

                  }).catch(error => console.log(error));

              }).catch(error => console.log(error));

          };

    break;
    
  }
  
});

//Propiedades Client del Bot

client.login(config.token);


/*

Plantilla de Comandos

client.on("message", (message)=>{
	if (!message.content.startsWith(prefix)) return; 
	if (message.author.bot) return;
	if (message.content.startsWith(prefix + COMANDO)){
		message.channel.send("");
	}
});
*/