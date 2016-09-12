var robot = {
  colour: 'blue',
  name: 'Engelbert',
  weapons: [
    'lasers',
    'blasters'
  ],
  type: '',
  speak: function(words) {

    // Make robot speak

  },
  greeting: function() {

    // Greets user
    document.getElementById('caption').innerHTML ='<p>' + this.name + ': Hi! My name is ' + this.name +'!</p>';

  },
  rename: function(newName){

    // Rename robot

  },
  listWeapons: function() {

    // Display weapons

  },
  addWeapon: function() {

    // Add a weapon to the robot's arsenal

  }
};

robot.greeting();
