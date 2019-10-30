///////////////////////////////////////////////////////////
// This script creates a database named responses and
// pushes/pulls the information to the site in real time.
// You should take the script and build upon it. 
//
// Look into the documentation and see how you can store 
// different types of information. Get creative!
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Challenge (Optional):
// Create a database that has a bunch of questions. Then 
// have the page show a random question on every reload or 
// something like that.
///////////////////////////////////////////////////////////


function setup() {
  // put setup code here
  // Place your config information from Firebase below
  var firebaseConfig = {
    
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  console.log(firebase);

  let database = firebase.database();
  let responses = database.ref('responses');
  responses.on('value', gotData, errData);

}


function gotData(data) {
  let responseList = selectAll('.responseList');
  for (var i = 0; i < responseList.length; i++) {
    responseList[i].remove();
  }

  console.log(data.val());
  let responses = data.val();
  let keys = Object.keys(responses);
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    var k = keys[i];
    var names = responses[k].name;
    var response = responses[k].value;
    // console.log(names, response);
    var li = createElement('li', names + ': ' + response);
    li.class('responseList');
    li.parent('classResponses');
  }
}

function errData(error) {
  console.log('Error!');
  console.log(error);
}

function submitAnswer() {
  let database = firebase.database();
  let responses = database.ref('responses');

  let answer = document.getElementById("response").value;
  let name = document.getElementById("name").value;

  let response = {
    name: name,
    value: answer
  }

  responses.push(response, finished);
  function finished(error) {
    if (error) {
      console.log('ooops');
    } else {
      console.log('data saved!');
    }
  }
}

function draw() {
  // put drawing code here
}
