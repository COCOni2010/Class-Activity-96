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
//YOUR FIREBASE LINKS

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      })
}

