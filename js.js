//

  // Initialize Firebase
   var config = {
    apiKey: "AIzaSyAbBM9CPzmVqbPMXodEkZwulxRXMu0NRWs",
    authDomain: "g3employeedata.firebaseapp.com",
    databaseURL: "https://g3employeedata.firebaseio.com",
    projectId: "g3employeedata",
    storageBucket: "g3employeedata.appspot.com",
    messagingSenderId: "759517614190"
  };

  firebase.initializeApp(config);

 var database = firebase.database();

 var name = "";
 var role = "";
 var date = "";
 var rate = "";

 $("#send-button").on("click", function(){
 	console.log("Something");
 	event.preventDefault();
 	var name = $("#name-input").val().trim();
 	var role = $("#role-input").val().trim();
 	var date = $("#date-input").val().trim();
 	var rate = $("#rate-input").val().trim();
 	

database.ref().push({
	name: name,
	role: role,
	rate: rate,
	date: date,
	dataAdded: firebase.database.ServerValue.TIMESTAMP

});

});

database.ref().on("child_added", function(childSnapshot){
	 name = childSnapshot.val().name;
	 role = childSnapshot.val().role;
	 date = childSnapshot.val().date;
	 rate = childSnapshot.val().rate;

	$(".table").append('<tr><td>' + name + "</td><td>" + role + "</td><td>" + rate + "</td><td>" +  date + "</td></tr>");
})


//calculate months worked
//calculate total billed