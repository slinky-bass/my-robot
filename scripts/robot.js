var robot = {

  //MY ROBOT PROPERTIES - WHAT YOUR ROBOT HAS
  colour: 'blue',
  name: 'Engelbert',
  type: '',
  vocabulary: [
  ],
  inventory: [],

  //MY ROBOT FUNCTIONS - WHAT YOUR ROBOT CAN DO

  //############### SPEECH RELATED ##############
  // Make robot speak
  speak: function(words) {

    // Prompt user for input save results in a variable named "words"

    // Gets phrase from vocabulary array at index position 'words'

    // Prints to #caption
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
    // BONUS: Use conditional statement to add '0' to hours less than 10

    // Get hours from d object using getMinutes() method and
    // store it in a variable named "minutes"
    // BONUS: Use conditional statement to add '0' to minutes less than 10

    // Concatenate "hours" and "minutes" to create a HH:MM format and
    // store in a variable named "currentTime"

    // Display the newly formatted time inside the caption box

  },

  //############### INVENTORY RELATED ##############
  // Display inventory
  listItems: function() {

    // Use a for loop to log each value in the inventory array to the console

    // Create a variable "inventoryList" and add each item in the array to inventoryList to create a long string

    // Display the results inside the caption

    // Now concatenate html tags into the string so that it appears as an unordered list in the browser

  },

  // Add an item to your robot's inventory
  addItem: function() {

    // Get value of #addItemInput and store in variable "newItem"

    // convert string to lowercase

    // Add item to inventory array using push method

    // Notify user that the item has been added to the inventory by
    // displaying it in the caption

    // Clear input field by emptying the value property

  },

  // Remove an item to your robot's inventory
  removeItem: function() {

    // Get value of #userItemInput and store in variable
    // named "searchQuery"

    // Convert "searchQuery" to lowercase

    // Use indexOf to find the index position of the searchQuery
    // in the inventory array

    // Use a conditional statement to check the searchQuery was found

    // Use the splice method to remove the item from the inventory
    // array using the index position of the item if it was found

    // Display message to let user know that the item was removed

    // Else if the searchQuery was not found then display message to let user know that the item could not be found
  },

  // Search for an item to your robot's inventory
  findItem: function() {

    // Prompt user for search query and save it to a variable
    // named "searchQuery"

    // Convert "searchQuery" to lowercase

    // Use indexOf to find the index position of the searchQuery
    // in the inventory array

    // Use a conditional statement to display a message in the
    // caption based on the index position of the searchQuery

  }
};
