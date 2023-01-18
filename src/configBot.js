// module.exports = {

//     bot: (bot)=>{
        
        

//         const prefix = !
//         bot.on("message", function (msg) {
//             if (!msg.content.startsWith(prefix)) return;
//             if (msg.author.bot) return;
          
//             const args = msg.content.split(" ").slice(1);
//             console.log(args);
          
//             const command = msg.content.split(" ").slice(0,1).shift().replace(prefix, "")
          
//             console.log(command)
//             const date = new Date()
//             console.log(date.toLocaleDateString())
//             try {
//               bot.commands.get(command).execute(bot, msg, args);
//             } catch (err) {
//               console.error(err);
//               return msg.reply("Ops! Ainda não conheço esse comando");
//             }
//           })
//     }
//     }