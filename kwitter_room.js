
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBM_Fq3xT7tHC5mlExhukMvLqCsHW9y2Rg",
      authDomain: "kwitter-fe139.firebaseapp.com",
      databaseURL: "https://kwitter-fe139-default-rtdb.firebaseio.com",
      projectId: "kwitter-fe139",
      storageBucket: "kwitter-fe139.appspot.com",
      messagingSenderId: "466116278248",
      appId: "1:466116278248:web:fd5714331078900b00d65d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + " !"; 

 function addRoom() {
      room_name = document.getElementById("room_name", room_name);

      firebase.database().ref("/").child(room_name).update({
       });

       localStorage.setItem("room_name", room_name)
       window.location = "kwitter_page.html"
 } 

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name)
window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}