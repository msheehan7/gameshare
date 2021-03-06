//Game Page for MineCraft
var firebaseConfig = {
    apiKey: "AIzaSyCzouSoNoVCIFO2QdzXyvpUlrAxP7ABJZk",
    authDomain: "gameshare-1b851.firebaseapp.com",
    databaseURL: "https://gameshare-1b851.firebaseio.com",
    projectId: "gameshare-1b851",
    storageBucket: "gameshare-1b851.appspot.com",
    messagingSenderId: "804343057431",
    appId: "1:804343057431:web:10ba27aee0a934dc"
  };


//$('.carousel').carousel()

firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const auth = firebase.auth();

function saveToDatabase(gameName,consoleName){
    var user = firebase.auth().currentUser
    if (user) {
        // User is signed in.
        uid = user.uid
        console.log(user)

        db.collection('users').doc(uid).collection('games').add({
        name: gameName,
        console: consoleName,
        // price: price,
    }).then(function(docRef){
        docRef.get().then(function(doc){
            addGame(doc);
            //gameOnPage(doc);
            })
        })
    }
}



// function toProposal(){
    
//         var mineTrades = db.collection("minetrades")
//         mineTrades.add({
        
//         // price: price,
//     })
//         mineTrades.get().then(function(mineTrades){
//             addGame(mineTrades);
//             //gameOnPage(doc);
        
//             })
//         }
    

















function addGame(doc) {
    // assigning variables to all elements
        var container2 = document.getElementById("gamePageInventory");
    // creating div elements
        var gameSection = document.createElement("div");
        var gameFormInfo = document.createElement("div");
    // creating p elements
        var nameP = document.createElement("p");
        var consoleP = document.createElement("p");
        // var priceP = document.createElement("p");
    // adding class
        gameSection.classList.add("gameSection");
        gameFormInfo.classList.add("gameFormInfo");
    // changing inner.HTMLs
        nameP.innerHTML = doc.data().name;
        consoleP.innerHTML = doc.data().console;
        // priceP.innerHTML = doc.data().price;
    // appending the p elements to the gameFormInfo
        gameFormInfo.appendChild(nameP);
        gameFormInfo.appendChild(consoleP);
        // gameFormInfo.appendChild(priceP);
    // appending gameFormInfo to gameSection
        gameSection.appendChild(gameFormInfo);
    // appending gameSection to container2
        container2.appendChild(gameSection);
// depending on the game name user inserts, picture shows up beside it 
    // the last of us
        if (doc.data().name === "the last of us" || doc.data().name === "The Last of Us"){
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "https://www.playerattack.com/imagery/2012/08/TheLastOfUs-Cover.jpg";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
    // halo 3: odst
         } else if (doc.data().name === "halo 3: odst" || doc.data().name === "Halo 3: ODST"){  // halo 3: odst
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "https://tinyurl.com/y65gn66r";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
            console.log("this worked 1!")
    // super smash bros. ultimate
        } else if (doc.data().name === "super smash bros ultimate" || doc.data().name === "super smash bros. ultimate" || doc.data().name === "Super Smash Bros. Ultimate"){     // super smash bros ultimate
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
            console.log("this worked 2!")
    // call of duty: black ops 2
        } else if (doc.data().name === "call of duty black ops 2" || doc.data().name === "call of duty: black ops 2" || doc.data().name === "Call of Duty: Black Ops 2"){     // call of duty black ops 2
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "http://3.bp.blogspot.com/-V6wxRk6Y-T0/UKG6ae9HZRI/AAAAAAAABt0/xKe4hUHXqG0/s1600/Call+of+Duty+Black+Ops+2+Cover.jpg";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
            console.log("this worked 3!")
    // minecraft
        } else if (doc.data().name === "minecraft" || doc.data().name === "Minecraft"){     // minecraft
            var gamePicture = document.createElement("div");
            var pic = document.createElement("img");
            pic.src = "https://www.mobygames.com/images/covers/l/489736-minecraft-windows-apps-front-cover.jpg";
            pic.classList.add("gamePicture");
            gamePicture.appendChild(pic);
            gameSection.appendChild(gamePicture);
            console.log("this worked 4!")
        } 
        else{
            console.log(gameName);
    }
    
    
                firebase.auth().onAuthStateChanged(function(user) {
                    var user = firebase.auth().currentUser  
                if (user) {
                    uid = user.uid
                //creating id for inputs
                var gameSection_id = doc.id
                gameSection.id = gameSection_id

                        //This is to make x click remove
                        gameSection.addEventListener("click", function(){
                        document.getElementById(gameSection.id)
                        //make Sure to change the name of the game at the end of the below string
                        
                        //document.getElementById(gameSection.id).remove()
                                //  db.collection('users').doc(uid).collection('games').doc(doc.id).delete();
                                var question = confirm("Are you sure you want to trade " + doc.data().name + " for MineCraft. There will be a $5 processing and handling fee for this transaction")
                        console.log(user.uid)
                        
                            if(question){
                            

                                //Other possibilty for tade 

                                //add new collection where the proposed games from this page will be stored
                                // db.collection('users').doc(uid).collection('games').doc(doc.id).get().then(function(querySnapshot) {
                                //     querySnapshot.forEach(function(doc){
                                //         var mineTrades = db.collection("minetrades").doc(doc.data().name, doc.data().console).set(doc.data());
                                //     });
                                // });
                                console.log(doc.data().name)
                                console.log(doc.data().console)

                                var mineTrades = db.collection("minetrades")
                                mineTrades.add({
                                    
                                    name: doc.data().name,
                                    console: doc.data().console,
                                }) 
                                document.getElementById(gameSection.id).remove()
                                //Use a sleep method to call after a certain amount of time
                                db.collection('users').doc(uid).collection('games').doc(doc.id).delete();
                                setTimeout(function(){ window.location.href = "../../confirmationPage/confirmationPage.html"}, 300)
                                 
                                
                                            }//else{
                                            // alert('An error has occured. Please re-save your game to inventory')
                                        //}
                });
            }
        })
}
 


 function loadInventoryGames(){
    var user = firebase.auth().currentUser  
    
    firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        uid = user.uid
        console.log(user.uid)
   db.collection("users").doc(uid).collection('games').get().then(function(querySnapshot){
         querySnapshot.forEach(function(doc){
        
             addGame(doc);
        
            });
        });
   
     }
  })
}
 $(document).ready(function(){
     loadInventoryGames()
   });

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log('signed in')
      // This is to make the profile specific to the customer 
      var user = firebase.auth().currentUser; //sets the current user to variable
      } else { 
        // No user is signed in.
       
        console.log('signed out')
    
  
  }
})
 
