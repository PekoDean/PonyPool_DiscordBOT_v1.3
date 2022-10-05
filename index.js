// const { log } = require('console');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = "OTEwNDQ3NzQyMjM5Nzg1MDEw.YZS-iQ.TBtEKXRYkXvTzKRg7Z9ffzTovIk";
const fs = require("fs");

// ALTERNATE
// const Discord = require("discord.js");
// const Client = new Discord.Client({
//     intents: [
//         Discord.Intents.FLAGS.GUILDS,
//         Discord.Intents.FLAGS.GUILD_MESSAGES
//     ]
// })

client.once('ready', () => {
    console.log("We're in Motherf***er !");

    let statuses = [ "Drinking Your Brain Juice", "Eating Chimichangas", "Kicking asses !", "Be awesome", "F*** Marvel", "I'm way better than Wolverine !", "I'm so sexy motherf***er", "I'm Batman... wait, what?!", "There are too many bots around here !","", "@#!?#" ]; //Status d'atctivité
 
     setInterval(function() {
         let status = statuses[Math.floor(Math.random() * statuses.length)]; //On fait tirer un nombre random pour choisir random l'activité du bot
         client.user.setActivity(status, {type: "STREAMING"})    //Sert à changer ce que regarde le bot toutes les 5 secondes
     }, 10000)
});

// COMMANDES PONYPOOL BOT

const loginPhrases = ["We're back online **Pinkie Pie** !!", "**Deadpool**, it looks like we're in!", "See **Pinkie**, I told you we'd make it!", "Hey **Wade**!... We're back!", "Hey there! It's your friendly neighborhood **PonyPool**"];

const punchlines = ["le monde se divise en deux catégories: ceux qui ont un pistolet chargé, et ceux qui creusent; toi, tu creuses", "... That's not a joke. That's a fact", "Maelle, why the loooooong face ?", "I'll be back ... when js is over", "Si y a une chose que tu dois pas remettre en question: t es plus intelligent qu'avant, mais t'es toujours très con", "Tu peux faire des pompes, tu peux apprendre à t'battre, mais même musclé, ça fait toujours mal de prendre une droite", "Ton cerveau et ton ego fonctionnent à l'envers; plus tu cherches à prouver quelque chose, plus ça fait l'contraire", "Pour être un fils de pute, pas besoin d'avoir une daronne sur un trottoir", "T’as été conçu pour un être branleur : youporn to be alive", "A force d’écrire comme un aveugle eh bien tes textes tu les brailles", "Qui entend parmi vous qu’au loin une voix douce m’appelle ? La folie a une bouche, bah j’lui roule des pèles ", "J’te monte en l’air sans t’toucher : Wingardium Leviosa", "J’ai viré millésime là où t’as tourné au vinaigre", "sexy motherf*****er", "Je suis venu ici pour mâcher du chewing-gum et botter des culs. Et j'ai plus de chewing-gum", "T'énerves pas p'tit gars prends ta pelle et ton seau et va jouer !", "Tu veux dire que ta présence ici est aussi utile qu'un trou du cul à cet endroit là?", "You talkin’ to me?", "Quand je cueillais le café, on s'en faisait du frais sorti de l'arbre. Celui ci c'est de la merde mais bon...", "Écoutez mon ptit, là j’viens d’tuer un croco’. Alors si vous voulez qu’on travaille d’égal à égal, faudrait vous y mettre."];

const images = [{ files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/016c758321a23cc0627e1212a97a3adb.jpg' }] },{ files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/016c758321a23cc0627e1212a97a3adb.jpg' }] }, { files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/unnamed.jpg' }] }, { files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/37c030a32d77d4801b3ed75b4d8bcd38.jpg' }] }, { files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/6972527e837bd0e6d09f5acd592050be.jpg' }] }, { files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/c5fe9a1c40176f6a59c20ae67e468248.jpg' }] }, { files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/deadpoolunicorn1_1.jpg' }] }, { files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/e7ab06c8-f17b-4bf5-baa4-784ec7537ffe.jpg' }] }, { files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/erwan-peron-deadpool167.jpg' }] }, { files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/index.jpg' }] }, { files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/medium.jpeg' }] }, { files: [{ attachment: '/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/images/thumb_deadpool-mlp-meme-www-imagessure-com-54177228.png' }] } ];

const songs = [

    {chanteur: "$Goldman", 
    extrait :["Quand la musique est bonne ! Quand la musique sonne, sonne, sonne, quand elle ne triche pas !", "Je prie les choses, et les choses m'ont pris"]},


    {chanteur: "$Orelsan", 
    extrait: ["Si la mort frappe à ma porte, me dit t'es dans mes p'tits papiers' , dis- lui de revenir après, dis-lui d'jarter, dis-lui d'venir backer, ou laisse-moi lui dire 'ferme ta gueule j'ai pas fini d'rapper', J'partirai jamais en laissant l'histoire inachevée", "J'pensais me lever un matin, être un homme, Sûr que la vie que j'ai choisie est la bonne, Fiable, avoir construit quelque chose de stable, J'suis qu'un sale gosse sur un château de sable", "Un jour on est venu au monde, depuis on attend que le monde vienne à nous"]},

    {chanteur: "$Architects", 
    extrait: ["Take refuge in each other and the triumph that it brings", "Look at this life as a grain of sand, The blink of an eye, a world in your hands, Look at this life as a grain of sand, The blink of an eye, a world in your hands"]},

    {chanteur: "$BlindGuardian",
    extrait : ["Even though the storm calmed down, the bitter end is just a matter of time", "Pain inside is rising I am the fallen one"]},

    {chanteur: "$RiseAgainst",
    extrait : ["Do you spend your days counting the hours you're awake? And when night covers the sky you find yourself doing the same", "How we survive, is what makes us who we are"]},

    {chanteur: "$Scylla",
    extrait : ["J'ai fouillé toute mon histoire, jusqu'au moindre de mes souvenirs, j'ai bien du au moins tout retourner au moins mille fois. J'y ai trouvé cris d'armes, doutes, vide, larmes, sourires, Soupirs, mais tout m'inspire à crier victoire", "Cousin, à chaque seconde tes genoux claquent de peur. On peut te suivre à la trace tellement tu laisses trainer de flaques de sueur "]},
    
    {chanteur: "$Furax",
    extrait : ["Pour leur mémoire un jour l'indécence s'éteindra, mais t'es bienvenue sous l'étoile noire, là ou la naissance est un drame"]},

];



client.on("message", message => {
    if(message.content === "$test") {
        message.channel.send("**1**")
        message.channel.send("||2||")
        message.channel.send("__3__")
        
    } else if(message.content === "$welcome") {
        message.channel.send("Welcome to __**PonyPool**__ testing grounds! Up here, anything goes. So relax, **eat rainbows** ... and hold on to your asses, it's gonna be a wild ride!")
    

    } else if(message.content === "$cmd") {
            message.channel.send("__Les commandes disponibles sont :__")
            message.channel.send("**$welcome** : Greetings from your new favorite bot")
            message.channel.send("**$deadpool** : Deadpool watches over you !")
            message.channel.send("**$guns** : I love guns and chimichangas !")
            message.channel.send("**$punchline** : In your face !! !")
            message.channel.send("**$crossover** : Me and my biatch !")
            message.channel.send("**$song** : CHOOSE YOUR FIGHTER and listen to art")
            message.channel.send("**$onfire** : LET'S GO !!!")
            message.channel.send("**$pony** : Because this world can be too violent sometimes")
            message.channel.send("**$swag** : You're awesome and you know it")
            message.channel.send("**$facepalm** : OH COME ON!!")

    
    }else if(message.content === "$deadpool") {
        message.channel.send("I'm the merc with a mouth !")
        
    } else if(message.content === "$guns") {
        message.channel.send("I'll shoot you up and eat your brain like a red hot chimichanga !")

    } else if(message.content === "$punchline") {
        let punchline = punchlines[Math.floor(Math.random() * punchlines.length)];
        message.channel.send(punchline);

    } else if(message.content === "$crossover") {
        let crossover = images[Math.floor(Math.random() * images.length)];
        message.channel.send(crossover);

    } else if(message.content === "$song") {
        message.channel.send("Balance le son: $Goldman, $Architects, $Orelsan, $BlindGuardian, $RiseAgainst")

    } else if(message.content === "$back") {
        let loginPhrase = loginPhrases[Math.floor(Math.random() * loginPhrases.length)];
        message.channel.send(loginPhrase)
        
    } else if(message.content === '$onfire') {
        message.channel.send({files: [{attachment:"/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/gifs/my-little-pony-my-little-pony-pony-life.gif"}]});
    } else if(message.content === '$pony') {
        message.channel.send({files: [{attachment:"/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/gifs/mlp-apple-jack.gif"}]});
    } else if(message.content === '$swag') {
        message.channel.send({files: [{attachment:"/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/gifs/mlp-swag.gif"}]});
    } else if(message.content === '$facepalm') {
        message.channel.send({files: [{attachment:"/Formation/Git/JavaScript/PonyPool PROJECT/PonyPool v1.3/gifs/facepalm-ugh.gif"}]});
    }
});

client.on("message", message => {
    for(i=0; i<songs.length; i++) {
        let thExtrait = songs[i].extrait[Math.floor(Math.random() * songs[i].extrait.length)];
        if(message.content === songs[i].chanteur) {
            message.channel.send(thExtrait);
        }
    }
});

client.on("message", async message => {
    // if (message.author.bot) return;
    if (message.content.includes('**Wade**')) {
        message.reply("We sure are my little pink friend!"); 
}
});

client.login(token);

// client.on("messageCreate", message => {   //Réponse du bot s'il détecte un message autre qu'oun message de bot
//     if (message.author.bot) return;

//     message.reply("Got it!") // Répond au User
//      message.channel.send("Got it") // Répond au channel
// })

// client.on("messageCreate", message => {
//     if (message.author.bot) return;

//     if (message.content === "$help"){
//         const embed = new Client.MessageEmbed()
//             .setColor("#0099ff")  //Couleur de l'etiquette
//             .setTitle("Liste des commandes") // Titre etiquette
//             .setUrl("https://discord.js.org/")
//             .setAuthor("DeadBot")
//             .setDescription("")
//             .setThumbnail("") 
//             .addField("$help", "Affiche la liste des commandes") // ajoute un champ de caractère
//             .setImage("") // Image en gros dans l'etiquette
//             .setTimestamp() // Affiche la date
//             .setFooter()

//         message.channel.send({ embeds : [embed]});
//     }
// })

// A INTEGRER
// Phrase : "What's the one kind of boat that can never, ever sink? ... A friend-ship!"












