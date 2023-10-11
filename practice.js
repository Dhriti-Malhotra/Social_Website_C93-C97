//ADD YOUR FIREBASE LINKS

const firebaseConfig = 
{
    apiKey: "AIzaSyDx9nX29Zum8KtF7B-_k_muUxFI6QzfOTw",
    authDomain: "kwitterdatabase-b6707.firebaseapp.com",
    databaseURL: "https://kwitterdatabase-b6707-default-rtdb.firebaseio.com",
    projectId: "kwitterdatabase-b6707",
    storageBucket: "kwitterdatabase-b6707.appspot.com",
    messagingSenderId: "228021920758",
    appId: "1:228021920758:web:6e711632cb84b8f7b95dd7"
  };

  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
    })
  }