const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});



function changeMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}



setInterval(function(){
    const clock = document.querySelector(".display");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = 'AM';
    if(hr > 12){
      day = 'PM';
      hr = hr - 12;
    }
    if(hr == 0){
      hr = 12;
    }
    if(sec < 10){
      sec = '0' + sec;
    }
    if(min < 10){
      min = '0' + min;
    }
    if(hr < 10){
      hr = '0' + hr;
    }
    clock.textContent = hr + ':' + min + ':' + sec + " " + day;
  });
  
  
const trigger = document.querySelector("menu > .trigger");
trigger.addEventListener('click', (e) => {
  e.currentTarget.parentElement.classList.toggle("open");
});

  

/* to hide inspect view source */

          


document.addEventListener("keydown", (e) => {
  // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
  // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
  // THIS WILL ONLY DISABLE CONTROL AND F12
  if (e.ctrlKey || e.keyCode==123) {
    e.stopPropagation();
    e.preventDefault();
  }
});



  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  }, false);
  
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDDmz-fa7GOnak5FYNNHUPzevZh6yDU6VE",
    authDomain: "web-chat-app-9cf92.firebaseapp.com",
    projectId: "web-chat-app-9cf92",
    storageBucket: "web-chat-app-9cf92.appspot.com",
    messagingSenderId: "738635393094",
    appId: "1:738635393094:web:4263a027cefae00e45c247",
    measurementId: "G-3SQ43R5RQD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // initialize database
  const db = firebase.database();
  
  // get user's data

  
  let username = ("User");




  
  // submit form
  // listen for submit event on the form and call the postChat function
  document.getElementById("message-form").addEventListener("submit", sendMessage);
  
  // send message to db
  function sendMessage(e) {
    e.preventDefault();
  
    // get values to be submitted
    const timestamp = Date.now();
    const messageInput = document.getElementById("message-input");
    const message = messageInput.value;
  
    // clear the input box
    messageInput.value = "";
  
    //auto scroll to bottom
    document
      .getElementById("messages-bscrim")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  
    // create db collection and send in the data
    db.ref("messages-bscrim/" + timestamp).set({
      username,
      message,
    });
  }
  
  // display the messages
  // reference the collection created earlier
  const fetchChat = db.ref("messages-bscrim/");
  
  // check for new messages using the onChildAdded event listener
  fetchChat.on("child_added", function (snapshot) {
    const messages = snapshot.val();
    const message = `<li class=${
      username === messages.username ? "sent" : "receive"
    }><span>${messages.username}: </span>${messages.message}</li>`;
    // append the message on the page
    document.getElementById("messages-bscrim").innerHTML += message;
  });










  