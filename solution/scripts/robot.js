var robot = {

  //MY ROBOT PROPERTIES - WHAT YOUR ROBOT HAS
  colour: 'blue',
  name: 'Engelbert',
  weapons: [
    'lasers',
    'blasters'
  ],
  type: '',
  vocabulary: [
  ],

  //MY ROBOT FUNCTIONS - WHAT YOUR ROBOT CAN DO
  
  //############### SPEECH RELATED ##############
  // Make robot speak
  speak: function(words) {

    

  },

  // Greets user
  greeting: function() {
 
    document.getElementById('caption').innerHTML ='<p>' + this.name + ': Hi! My name is ' + this.name +'!</p>';

  },

  // Rename your robot
  rename: function(newName){


  },

  //############### INVENTORY RELATED ##############
  // Display inventory
  listItems: function() {


  },
  
  // Add an item to your robot's inventory
  addItem: function() {

    
  },

  // Remove an item to your robot's inventory
  removeItem: function() {

    
  },

  // Search for an item to your robot's inventory
  findItem: function() {

    
  },

  //############### WEAPONRY RELATED ############
  // Display weapons
  listWeapons: function() {


  },
  
  // Add a weapon to the robot's arsenal
  addWeapon: function() {

    
  }
};