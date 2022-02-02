var firebaseConfig = {
      apiKey: "AIzaSyAkruF3iCEZyxT-whZwrZH7a41Wmo6AceQ",
      authDomain: "kwitter-a40e4.firebaseapp.com",
      databaseURL: "https://kwitter-a40e4-default-rtdb.firebaseio.com",
      projectId: "kwitter-a40e4",
      storageBucket: "kwitter-a40e4.appspot.com",
      messagingSenderId: "618410352298",
      appId: "1:618410352298:web:4ecc2f7b3d05d0393a7ad3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Roomname - " + Room_names);
row = "<div class= 'room_name' id= '" + Room_names + "' onclick= 'redirectToRoomName(this.id)' >#" + Room_names + " </div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding user"
      });

      localStorage.setItem("room_name", room_name);

      window.location= "kwitter_page.html";
}

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");;
      localStorage.removeItem("room_name");
      window.location = "index.html";
}