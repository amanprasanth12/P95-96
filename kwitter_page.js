//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyBM_Fq3xT7tHC5mlExhukMvLqCsHW9y2Rg",
    authDomain: "kwitter-fe139.firebaseapp.com",
    databaseURL: "https://kwitter-fe139-default-rtdb.firebaseio.com",
    projectId: "kwitter-fe139",
    storageBucket: "kwitter-fe139.appspot.com",
    messagingSenderId: "466116278248",
    appId: "1:466116278248:web:fd5714331078900b00d65d"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}