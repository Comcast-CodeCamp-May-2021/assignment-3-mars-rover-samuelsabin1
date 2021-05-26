
class Rover {
  constructor(position, mode)
  {
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  if(!position){
       throw Error("Position and default values for mode and generatorWatts are required.");
     }
    
  }
  
  receiveMessage(message){
    // loop
      // 3 if statements
      // building an outputObject
   return message;
    // let message = message.name;
  //   let results=[];
  //     for (let i < 0 ; i < message.name.length; i++){

  //     }
  if(!message){
    throw Error('Missing message');
  }

  }
  
  
   // Write code here!
}




module.exports = Rover;