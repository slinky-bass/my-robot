var robot = {

  //MY ROBOT PROPERTIES - WHAT YOUR ROBOT HAS
  colour: 'blue',
  name: 'Engelbert',
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

    // BONUS
    if( hours < 10 ) {
      hours = '0' + hours;
    }

    var minutes = d.getMinutes();

    // BONUS
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

    // Use a for loop to log each value in the inventory array to the console

    // Create a variable "inventoryList" and add each item in the array to inventoryList to create a long string

    // Display the results inside the caption

    // Now concatenate html tags into the string so that it appears as an unordered list in the browser
    var inventoryList = '<ul>';

    for(var i = 0; i < this.inventory.length; i++) {
      inventoryList += '<li>' + this.inventory[i] + '</li>';
    }

    inventoryList += '</ul>';

    document.getElementById('caption').innerHTML = '<p>' + this.name + ': Let\'s see what I have in my pockets...</p>' + inventoryList;

  },

  // Add an item to your robot's inventory
  addItem: function() {

    // Get value of #addItemInput and store in variable "newItem"
    var newItem = document.getElementById('addItemInput').value;

    // convert string to lowercase
    newItem = newItem.toLowerCase();

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

    // Prompt user for search query and save it to a variable
    // named "searchQuery"
    var searchQuery = prompt('Which item would you like to remove?');

    // Convert "searchQuery" to lowercase
    searchQuery = searchQuery.toLowerCase();

    // Use indexOf to find the index position of the searchQuery
    // in the inventory array
    var index = this.inventory.indexOf(searchQuery);
    alert(index);

    // Use a conditional statement to check the searchQuery was found
    if(index > -1) {

      // Use the splice method to remove the item from the inventory array using the index position of the item
      this.inventory.splice(index, 1);

      // Display message to let user know that the item was removed
      document.getElementById('caption').innerHTML = '<p>' + this.name + ': "' + searchQuery + '" was removed from the inventory.</p>';

    } else {

      // Display message to let user know that the item could not be found
      document.getElementById('caption').innerHTML = '<p>' + this.name + ': I am sorry. I think I lost the "' + searchQuery + '".</p>';
    }

  },

  // Search for an item to your robot's inventory
  findItem: function() {

    // Prompt user for search query and save it to a variable
    // named "searchQuery"
    var searchQuery = prompt('What would you like to find?');

    // Convert "searchQuery" to lowercase
    searchQuery = searchQuery.toLowerCase();

    // Use indexOf to find the index position of the searchQuery
    // in the inventory array
    var index = this.inventory.indexOf(searchQuery);
  
    // Use a conditional statement to display a message in the
    // caption based on the index position of the searchQuery
    if(index > -1) {
      document.getElementById('caption').innerHTML = '<p>' + this.name + ': Found it!</p>';
    } else {
      document.getElementById('caption').innerHTML = '<p>' + this.name + ': I am sorry. I think I lost the "' + searchQuery + '".</p>';
    }

  }
};
