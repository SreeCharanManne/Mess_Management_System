  var firebaseConfig = {
    apiKey: "AIzaSyA9_2chtFFlaevTN8ej8oOT1P__UkT5M0s",
    authDomain: "swmess.firebaseapp.com",
    databaseURL: "https://swmess.firebaseio.com",
    projectId: "swmess",
    storageBucket: "swmess.appspot.com",
    messagingSenderId: "514556680821",
    appId: "1:514556680821:web:970bd62c758491dbd5b63c"
  };
  
  firebase.initializeApp(firebaseConfig);


	function signIn(){
		
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function() {
        alert('User signed in!');
        window.location="menu.html";
      }) 
      .catch(function(error) {
        
          alert('Please check your credentials!!')
          
      });
	}
	
	
	function signOut() {
    firebase.auth().signOut().then(function() {
      window.location="main page.html";
      alert('User signed out!');
    });
  }

  function signUp()
    {
      var email=$("#email").val();
      var password= $("#password").val();
      var cpassword= $("#cpassword").val();
    
      if(email!="" && password!="" && cpassword!="")
      {
        if(password==cpassword)
        {
          var result=firebase.auth().createUserWithEmailAndPassword(email,password);
          window.alert("Sign up success!!");
        result.catch(function(error){
    
            var errorCode=error.code;
            var errorMessage=error.message;
            console.log(errorCode);
            console.log(errorMessage);
            window.alert("Message :"+ errorMessage);
        });
        }
        else
        {
          window.alert("Password does not match with confirm password!!");
        }
    }
            else
            {
          
              window.alert("Please enter your credentials properly!!");
            }
            
        }

  function writeinto(a)
  {
    if(a=='1'){
    var name=document.getElementById('name').value;
    firebase.database().ref("User/Amir/"+name).set({
    
     materialid:document.getElementById('da').value,
     date:document.getElementById('dat').value,
     time_of_material_use:document.getElementById('pl').value,
     day:document.getElementById('co').value,
     cost:document.getElementById('imp').value,
     
          });
         
          window.alert("Database updated");
        }
     else if(a=='2') {
      var name=document.getElementById('name').value;
      firebase.database().ref("User/Ratings/" +name).set({
       regno:document.getElementById('regno').value,
        meal:document.getElementById('meal').value,
   day:document.getElementById('day').value,
   rating:document.getElementById('rating').value,
   additionalinfo:document.getElementById('adin').value,
       
            });
           
            window.alert("Database updated");
     }    
     else if(a=='3'){
      firebase.database().ref("User/Dailyfoodcost/").set({
        date:document.getElementById('da').value,
        chef:document.getElementById('chef').value,
         goods:document.getElementById('goods').value,
         chefrating:document.getElementById('ra').value,
    cost:document.getElementById('co').value,
    weightofgoods:document.getElementById('ck').value,
    costofgoods:document.getElementById('pk').value,
   
        
             });
             window.alert("Database updated");
     }
  }
      
 
       
 function resetpassword()
{
   var auth=firebase.auth();
  var email=$("#email").val();
    if(email !="")
    {
      auth.sendPasswordResetEmail(email).then(function()
      {
        window.alert("Mail sent to this mailid");
      })
      .catch(function(error)
      { 
        var errorCode=error.code;
        var errorMessage=error.message;
        console.log(errorCode);
        console.log(errorMessage);
        window.alert("Message :"+ errorMessage);
      });
 }
         else{
           window.alert("please write your mailid!!");
         }

          }




