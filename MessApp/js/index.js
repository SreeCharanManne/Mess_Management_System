

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA9_2chtFFlaevTN8ej8oOT1P__UkT5M0s",
    authDomain: "swmess.firebaseapp.com",
    databaseURL: "https://swmess.firebaseio.com",
    projectId: "swmess",
    storageBucket: "swmess.appspot.com",
    messagingSenderId: "514556680821",
    appId: "1:514556680821:web:970bd62c758491dbd5b63c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  firebase.auth.Auth.Persistence.LOCAL;


$("#btn-login").click(function()
{
  var email=$("#email").val();
  var password= $("#password").val();

  if(email!="" && password!="")
  {
    var result=firebase.auth().signInWithEmailAndPassword(email,password);
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
      
          window.alert("Please enter your credentials properly!!");
        }
        
    });
  
  

    $("#btn-signup").click(function()
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
            
        });


        
        $("#btn-resetpassword").click(function()
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

          });



    $("#btn-logout").click(function()
{
  var email=$("#email").val();
  var password= $("#password").val();

  if(email!="" && password!="")
  {
    firebase.auth().signOut();
        
    }
  });





