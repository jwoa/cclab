function setup() {
  // put setup code here
  var firebaseConfig = {

  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  console.log(firebase);

  let database = firebase.database();

  // Enter the name of your database in the ref('');
  let responses = database.ref('');

  // Listen for changes and update (gotData) when something happens
  responses.on('value', gotData, errData);
}

// Successful update will trigger this function
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
    var li = createElement('li', names + ': ' + response);
    li.class('responseList');
    li.parent('classResponses');
  }
}

// Error handling function
function errData(error) {
  console.log('Error!');
  console.log(error);
}

// Submission function
function submitAnswer() {
  let database = firebase.database();
  let responses = database.ref('responses');

  // Get the values from the user and store them in the response object
  // Enter code below:


  let response = {
    name: 
    value:
  }

  // Push the response to the database
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