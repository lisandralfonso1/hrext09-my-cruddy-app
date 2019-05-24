
/*
 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)
*/

//localStorage interaction function
//get item
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}


///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
$(document).ready(function() {
  $('#createButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      //current key exists, do something error-handle-y
    } else {
      createItem(currentKey, currentValue);
    }
  });

  $('#updateButton').click(function(event) {
    event.preventDefault();
    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      updateItem(currentKey, currentValue);
    } else {
      //current key doesnt exist, do stuff
    }
  });

  $("#cars").click(function(){
    console.log('words');
    $(".display").text("if you enjoy cars you can always or");
  });

  $("#yoga").click(function(){
    console.log('words');
    $(".display").text("hi yoga");
  });

  $("#sing").click(function(){
    console.log('words');
    $(".display").text("hi sing");
  });

  $("#dance").click(function(){
    console.log('words');
    $(".display").text("hi dance");
  });

  $("#readWrite").click(function(){
    console.log('words');
    $(".display").text("hi read/write");
  });

  $("#sports").click(function(){
    console.log('words');
    $(".display").text("hi sports");
  });
 
  $("#watchtv").click(function(){
    console.log('words');
    $(".display").text("hi watchtv");
  });

  $("#sports").click(function(){
    console.log('words');
    $(".display").text("hi sports");
  });

  $("#playVideoGames").click(function(){
    console.log('words');
    $(".display").text("hi playVideoGames");
  });

  $("#spendTimeWithFamily").click(function(){
    console.log('words');
    $(".display").text("hi spendTimeWithFamily");
  });

  $("#goDancing").click(function(){
    console.log('words');
    $(".display").text("hi goDancing");
  });

  $("#art").click(function(){
    console.log('words');
    $(".display").text("hi art");
  });

  $("#jobRelatedActivities").click(function(){
    console.log('words');
    $(".display").text("hi jobRelatedActivities");
  });

  $("#travel").click(function(){
    console.log('words');
    $(".display").text("hi travel");
  });

  $("#outdoorActivities").click(function(){
    console.log('words');
    $(".display").text("hi outdoorActivities");
  });

  $("#volunteerWork").click(function(){
    console.log('words');
    $(".display").text("hi volunteerWork");
  });

  $("#puzzles").click(function(){
    console.log('words');
    $(".display").text("hi puzzles");
  });

});




// Interest 
//  name => string
//  listOfActivities => ['activity 1', ...]
 
// {
//   name:'',
//   listOfActivities: []
// }
       
// /*
// form to insert a new Interest, and to add/remove from listOfActivities
// */

// function addInterest(name, arrayOfActivities) {
//   // add the Interest with a name
//   // loop over arrayOfActivities
// } 

// function addActivity(name, interest){
//   // adds activity to interest object
//   // at key listOfActivities
//   // i.e. interest.listOfActivities.push(name)
// }

// function removeInterest(name) {
//   // removes the Interest with a name
// }

// function removeActivity(name, interest){
//   // removes activity to interest object
//   // at key listOfActivities
//   // i.e. interest.listOfActivities.push(name)
// }