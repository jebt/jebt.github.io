var database;
let wu;
let hu;
let grid;

function preload() {
  //tbd
}

function setup() {
	// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD42MR4SmCom0NR4GP1Ld2oZIb5XSpoZ6k",
    authDomain: "skilful-vertex-138423.firebaseapp.com",
    databaseURL: "https://skilful-vertex-138423-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "skilful-vertex-138423",
    storageBucket: "skilful-vertex-138423.appspot.com",
    messagingSenderId: "463738658464",
    appId: "1:463738658464:web:42515f3f8959de80c5b3c5"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();

  var ref = database.ref('grid');
  ref.on('value', (snapshot) => {
  	const data = snapshot.val();
  	gotData(data);
  });

  function gotData(data) {
  	console.log(data);
  	grid = data;
  }

  function errData(err) {
  	console.log('Error!');
  	console.log(err);
  }
  
  createCanvas(323, 323);
  frameRate(15);
  stroke(0);

  grid = createArray(10, 10);
  initializeGrid(grid);
}

function draw() {
	//console.log('frame!');
	background(16);
  stroke(0);
  strokeWeight(2);
 	
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			fill(getPixelColor(i, j));
			rect(3+32*i, 3+32*j, 29, 29);
		}
	}
}

function initializeGrid(grid) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      grid[i][j] = color(32);
    }
  }
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }
    return arr;
}

function getPixelColor(i, j) {
	return grid[j][i];
}
