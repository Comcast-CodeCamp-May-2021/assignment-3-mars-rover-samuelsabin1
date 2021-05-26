const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');



// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function() {
  it("constructor sets position and default values for mode and generatorWatts", function() {
    expect(function() { new Rover();}).toThrow(new Error('Position and default values for mode and generatorWatts are required.'));
  });

   it("response returned by receiveMessage contains name of message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);

    console.log(response);
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

  


  });
  



  // 7 tests here!

});
