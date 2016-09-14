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
  inventory: [],

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
  time: function() {

    // Create a new Date object and store it in a variable named "d"
    var d = new Date;

    // Get hours from d object using getHours() method and
    // store it in a variable named "hours"
    // Use conditional statement to add '0' to hours less than 10

    // Get hours from d object using getMinutes() method and
    // store it in a variable named "minutes"
    // Use conditional statement to add '0' to minutes less than 10
    var hours = d.getHours();

    if( hours < 10 ) {
      hours = '0' + hours;
    }

    var minutes = d.getMinutes();

    if( minutes < 10 ) {
      minutes = '0' + minutes;
    }

    // Concatenate "hours" and "minutes" to create a HH:MM format and
    // store in a variable named "time"
    var currentTime = hours + ':' + minutes;

    // Display the newly formatted time inside the caption box
    document.getElementById('caption').innerHTML = '<p>' + this.name + ': The time is now ' + currentTime +'.</p>';
  },

  //############### INVENTORY RELATED ##############
  // Display inventory
  listItems: function() {



  },

  // Add an item to your robot's inventory
  addItem: function() {

    // Get value of #addItemInput and store in variable "newItem"
    var newItem = document.getElementById('addItemInput').value;

    // Add item to inventory array using push method
    this.inventory.push(newItem);

    // Notify user that the item has been added to the inventory by
    // displaying it in the caption
    document.getElementById('caption').innerHTML = '<p>' + this.name + ': "' + newItem +'" has been added to your inventory.</p>';

    // Clear input field by emptying the value property
    document.getElementById('addItemInput').value = '';

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
