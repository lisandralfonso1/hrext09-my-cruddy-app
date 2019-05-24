
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
//does the key exist?
var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}
//show Local Storage text
var displayLS = function(obj) {
    $('.results').html('');
    for (let key in obj) {
      if (typeof obj[key] !== 'function' && key !== 'length') {
        $(".results").append(`<div class="interests"> Interest: ${key} Activities: <span class="activities"> ${obj[key]}</span></div>`)
      }
    }
  };

  $(document).ready(function() {
  //add new key and value set
  $('#createButton').click(function(event) {
    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      alert('You already have an interest with this name. Try replacing its activities instead!')
    } else {
      createItem(currentKey, currentValue);
      displayLS(localStorage);
    }
  });
  //update value to the key
  $('#updateButton').click(function(event) {
    event.preventDefault();
    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      updateItem(currentKey, currentValue);
      displayLS(localStorage);
    } else {
      alert('You have not added this interest yet. Try creating a new interest first!')
    }
  });
  //delete key and value set
  $('#deleteButton').click(function(event) {
    event.preventDefault();
    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      deleteItem(currentKey, currentValue);
      displayLS(localStorage);
    }
  });
  //clear all keys and values in Local Storage
  $('#clearButton').click(function(event) {
    clearEverything();
    $('.results').text('');
  });
  //displaying activities to the interests
  $("#cars").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in cars, something you can do is attend car events/meetings, or you can take your car for a nice car wash. You would also enjoy washing your car yourself, helping a friend or family member wash their car, and reading a book about how cars work, as well as watching YouTube videos about how cars are made and watching videos of cars racing.");
  });
  $("#yoga").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in yoga, something you can do is go practice yoga by the beach, or you can learn a new type of yoga. You would also enjoy letting the people you care about know of the important benefits that practicing yoga offers , teaching someone yoga, and even taking classes to be a yoga instructor, as well as practicing breathing activities and learning or implementing new poses.");
  });
  $("#sing").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in singing, something you can do is take singing lessons, or you can offer singing lessons to someone. You would also enjoy becoming a singing instructor , writing a new song, and/or recording a new song, as well as applying for singing jobs near your area or simply singing in public!.");
  });
  $("#dance").click(function(){
    console.log('words');
    $(".display").text(  "If you are bored and you are interested in dancing, something you can do is attend a dancing class, or you can learn a new type of dance. You would also enjoy applying for dancing jobs near your area , teaching others how to dance, and attending parties where you can dance the night out, as well as planning choreographies by yourself or with your friends!"
    );
  });
  $("#readWrite").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in reading and/or writing, something you can do is start writing your own book, or you can write a new book, if you have already written previous ones. You would also enjoy going shopping to your favorite bookstore for new arrivals , going to a library and reading for free, and reading to kids who are relatives, as well as exchanging books with friends and starting your own blog that talks about your favorite book or books.");
  });
  $("#sports").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in REPLACE, something you can do is REPLACE, or you can REPLACE. You would also enjoy REPLACE , REPLACE, and REPLACE, as well as REPLACE and REPLACE.");
  });
  $("#watchtv").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in REPLACE, something you can do is REPLACE, or you can REPLACE. You would also enjoy REPLACE , REPLACE, and REPLACE, as well as REPLACE and REPLACE.");
  });
  $("#playVideoGames").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in REPLACE, something you can do is REPLACE, or you can REPLACE. You would also enjoy REPLACE , REPLACE, and REPLACE, as well as REPLACE and REPLACE.");
  });
  $("#spendTimeWithFamily").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in REPLACE, something you can do is REPLACE, or you can REPLACE. You would also enjoy REPLACE , REPLACE, and REPLACE, as well as REPLACE and REPLACE.");
  });
  $("#art").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in art, something you can do is visit a museum, or you could look for museum coupons online. You would also enjoy starting a new piece of art , reading about the history of art, and analyzing pieces of art online, as writing a blog about your favorite art works and sharing ideas about art with friends and family.");
  });
  $("#travel").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in REPLACE, something you can do is REPLACE, or you can REPLACE. You would also enjoy REPLACE , REPLACE, and REPLACE, as well as REPLACE and REPLACE.");
  });
  $("#outdoorActivities").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in outdoor activities, something you can do is going swimming, or you can go play a sport. You would also enjoy playing volleyball at the beach or park , going camping with friends or family, and having a picnic, as well as walking or biking, exploring your home town or going fishing.");
  });
  $("#volunteerWork").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in REPLACE, something you can do is REPLACE, or you can REPLACE. You would also enjoy REPLACE , REPLACE, and REPLACE, as well as REPLACE and REPLACE.");
  });
  $("#puzzles").click(function(){
    console.log('words');
    $(".display").text("If you are bored and you are interested in REPLACE, something you can do is REPLACE, or you can REPLACE. You would also enjoy REPLACE , REPLACE, and REPLACE, as well as REPLACE and REPLACE.");
  });

});

