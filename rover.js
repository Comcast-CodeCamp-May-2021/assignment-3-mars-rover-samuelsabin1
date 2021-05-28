
class Rover {
  constructor(position, mode)
    {
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
    // if(!position){
    //      throw Error("Position and default values for mode and generatorWatts are required.");
     
  }
  
 receiveMessage(message){

    let response={
      message:message.name,
      results:[] 
      // you've created the array, but we need to put some of our command data into this array
    }
    // let returnObject ={};
    // let resultsArray =[];
    // let commandObjectArray = messageObject.commands; 
  
      let roverPosition = this.position;
      let roverMode = this.mode;
      let generatorWatts= this.generatorWatts;


    let roverStatus= {position: roverPosition, mode: roverMode, generatorWatts};
    for (let commandObject of message.commands){
      console.log(commandObject);
      let commandType = commandObject.commandType;
      let commandValue = commandObject.value;
      let completed;
     
      // console.log(`this command has a commandType of: ${commandType}`);
      // console.log(`this command has a value of: ${commandValue}`);
      // console.log(commandValue);
      

      if(commandType === "MODE_CHANGE") {

        
        this.mode = commandValue;
        
        console.log(this.mode);
        completed= true;
        response.results.push({completed});
        
      }

      if(commandType ==='STATUS_CHECK'){
       completed = true;
      //  roverStatus= roverMode, generatorWatts, roverPosition;
      let tempObj = {
        position: this.position,
        mode: this.mode,
        generatorWatts: this.generatorWatts
      }
       response.results.push({completed, roverStatus: tempObj});
       //response.results.push({roverStatus});
      
      }

      if(commandType === 'MOVE'){
        // this.mode -> NORMAL; LOW_POWER
        if(this.mode === "LOW_POWER") { // STATUS_CHECK; MOVE; LOW_POWER
         completed = false;
         response.results.push({completed});
         
        }
        else{
          completed = true;
          response.results.push({completed});
          this.position = commandValue;

        }
        
        // roverPosition = commandValue;
        // console.log(roverPosition);
        // roverStatus.position = roverPosition;
        // console.log(this.position);
        // response.results.push({completed});
       // response.results.push({roverStatus});
      }
       
        
      // if(commandType === "MOVE") {

      //   console.log("THIS IS A MOVE COMMAND!");
      //   console.log("WE NEED TO UPDATE THIS ROVER'S POSITION WITH THE VALUE OF THE COMMAND");
      // }
      // else if(commandType === "STATUS_CHECK") {
      //   // we need to do something different
      // }
    
    }
     
  
    
  
   
 // you need a loop instead of this
    
    return response;
 }

} 
  //
  //   return response;
    // loop
      // 3 if statements
      // building an outputObject
   
  
  
  
   // Write code here!





module.exports = Rover;
// for (let classes in message.commands){
     
    //     /*
    //     if statements
    //      */
    //   let penguin = {completed : true, roverstatus: {mode: this.mode, position: this.position}}

    //   response.results.push(penguin);  
    // // console.log(response.results[0].completed);
    // // console.log(penguin)
    // }
    // for (let classes in message.commands){
      