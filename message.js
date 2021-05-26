class Message {
   constructor(name, commands) {
     this.name = name;
   if (!name) {
       throw Error("Message name required.");
     }
     this.commands = commands;
   }
}


console.log(Message);
module.exports = Message;