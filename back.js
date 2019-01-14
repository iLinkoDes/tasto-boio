// Comando PING
client.on("message", (message)=>{
  if (message.content.startsWith(prefix + " ping")) {
    message.channel.send("pong!");
  }

});

// Comando HOLA
client.on("message", (message)=>{
	if (!message.content.startsWith(prefix)) return; 
	if (message.author.bot) return;
	if (message.content.startsWith(prefix + " hola")){
		message.channel.send("Hola! Como has estado? :grinning: ");
	}
});

// Comando EMBED
client.on("message", (message)=>{
	if (!message.content.startsWith(prefix)) return; 
	if (message.author.bot) return;
	if (message.content.startsWith(prefix + " embed")){
	const embed = new Discord.RichEmbed() 
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
    
		message.channel.send({embed});
	}
});

// Comando MINI
client.on("message", (message)=>{
	if (!message.content.startsWith(prefix)) return; 
	if (message.author.bot) return;
	if (message.content.startsWith(prefix + " mini")){
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
	}
});

// Comando ATG
client.on("message", (message)=>{

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (!message.content.startsWith(prefix)) return; 
	if (message.author.bot) return;

	
});