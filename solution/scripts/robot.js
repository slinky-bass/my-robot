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
    "Hello master!",
    "How may I serve you?",
    "Have a good day"
  ],

  //MY ROBOT FUNCTIONS - WHAT YOUR ROBOT CAN DO

  //############### SPEECH RELATED ##############
  // Make robot speak
  speak: function() {

    // Prompt user for input
    var index = prompt('Please select a phrase for me to say by typing a number from 0 to 2.');

    // Gets phrase from vocabulary array at index position 'words'
    var phrase = this.vocabulary[index];

    // Prints to caption
    document.getElementById('caption').innerHTML ='<p>' + this.name + ': ' + phrase +'!</p>';

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
  timeTeller: function() {

    // Get current Date using Date object
    var d = new Date;

    // Get hours and minutes using date object
    var hours = d.getHours();
    var minutes = d.getMinutes();

    // Concatenate for correct format
    var time = hours + ':' + minutes;

    // Display time
    document.getElementById('caption').innerHTML ='<p>' + this.name + ': The time is now ' + time +'.</p>';
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
