const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');



// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function() {
  //test 7
  it("constructor sets position and default values for mode and generatorWatts", function() { 
    let errors = new Rover(123);
    expect(errors.position).toEqual(123);
    expect(errors.mode).toEqual("NORMAL");
    expect(errors.generatorWatts).toEqual(110);
    // expect(function() { new Rover();}).toThrow(new Error('Position and default values for mode and generatorWatts are required.'));
  });
  // //test 8
  it("response returned by receiveMessage contains name of message", function() {

    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];  
    let message = new Message('Test message with two commands', commands);

    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
     
    //  console.log(response);
    expect(response.message).toEqual('Test message with two commands', commands)

  });
  // //test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let testCommand1= new Command("MOVE", 20);
    let testCommand2= new Command("MODE_CHANGE", "LOW POWER");
    let testCommand3= new Command("STATUS_CHECK");
    let commands = [testCommand2, testCommand1];
    let rover = new Rover(98382);
    let message = new Message("Test message with two commands", commands);

    let response = rover.receiveMessage(message);
    //message response
    
    expect(response.results.length).toEqual(2);
  })
  // //test 10

  it("responds correctly to status check command", function(){
    
    
    let testCommand3= new Command("STATUS_CHECK");
    //rover position 
    let rover = new Rover(98382);
    //results array
    let commands = [testCommand3];
     
    let message = new Message("Test message with two commands", commands);
    

    let response = rover.receiveMessage(message);
    // console.log(response);

    expect(response.results[0].roverStatus.mode).toEqual("NORMAL")
    expect(response.results[0].roverStatus.position).toEqual(98382)
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110)
    
    console.log(response.results[0].roverStatus);

    
  })
  // test 11
  it("responds correctly to mode change command", function(){
    // let testCommand2= new Command("MODE_CHANGE", "LOW POWER");
    let testCommandmode= new Command("MODE_CHANGE", "LOW_POWER");
    //rover position 
    let rover = new Rover(321);
    //results array
    let commands = [testCommandmode];
     
    let message = new Message("Test message with two commands", commands);
    
    let response = rover.receiveMessage(message);

    // console.log(response);

    //the expected outcome should have something to do with completed
    expect(response.results[0].completed).toEqual(true);
  })
  //test 12
  
  it("responds with false completed value when attempting to move in LOW_POWER mode", function(){
    let rover = new Rover(98382);
    let testCommand2= new Command("MODE_CHANGE", "LOW_POWER");
    let testCommand3 = new Command("MOVE", 555);
    let commands = [testCommand2, testCommand3];
     
    let message = new Message("Test message with two commands", commands);
    let response = rover.receiveMessage(message); 

    console.log(response.results);
    expect(response.results[1].completed).toEqual(false);
  })

  //test 13
  it("responds with position for move command", function(){
    let rover = new Rover(123);
    let testCommand1= new Command("MOVE", 20);
    let commands = [testCommand1];
    let message = new Message("Test message with two commands", commands);
    let response = rover.receiveMessage(message);


    console.log(response.results)
    expect(response.results[0].completed).toEqual(true);
    expect(rover.mode).toEqual("NORMAL");
    expect(rover.position).toEqual(20);
    expect(rover.generatorWatts).toEqual(110)

  })
});

  //  
  //   let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  //   let message = new Message('Test message with two commands', commands);
  //   let rover = new Rover(98382);    // Passes 98382 as the rover's position.
  //   let response = rover.receiveMessage(message);

   
  
     /*
      // we need an array of command objects (at least 1)
      let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
      
      // we need a message object
      let message = new Message('Test message with two commands', commands);
      
      // we need a rover object (create a new rover)
      let rover = new Rover(98382);    // Passes 98382 as the rover's position.
      
      // we need to eventually inovke the receiveMessage(message) method
      let response = rover.receiveMessage(message);
      {
   message: 'Test message with two commands',
   results: [
      {
         completed: true
      },
      {
         completed: true,
         roverStatus: { mode: 'LOW_POWER', generatorWatts: 110, position: 98382 }
      }
   ]
  }
      expect(response.message).toEqual('Test message with two commands')
     */

  


 
  



  // 7 tests here!

