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
  inventory: [],

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

  //############### TIME RELATED ##############
  // Display time
  time: function() {

    // Create a new Date object and store it in a variable named "d"

    // Get hours from d object using getHours() method and
    // store it in a variable named "hours".
    // Use conditional statement to add '0' to hours less than 10

    // Get hours from d object using getMinutes() method and
    // store it in a variable named "minutes"
    // Use conditional statement to add '0' to minutes less than 10

    // Concatenate "hours" and "minutes" to create a HH:MM format and
    // store in a variable named "currentTime"

    // Display the newly formatted time inside the caption box

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
