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
  
  function signInadmin(){
		
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function() {
        alert('User signed in!');
        window.location="material issue record.html";
      }) 
      .catch(function(error) {
        
          alert('Please check your credentials!!')
          
      });
	}
  
  function getdata(){
    var user=document.getElementById("name").value;
    firebase.database().ref('User/Ratings/'+user).once('value').then(function(snapshort){
      if(snapshort.val()==null)console.log(snapshort.val());
      var useradditionalinfo=snapshort.val().additionalinfo;
      var userday=snapshort.val().day;
      var usermeal=snapshort.val().meal;
      var userrating=snapshort.val().rating;
      var userregno=snapshort.val().regno;

      document.getElementById("newadditionalinfo").innerHTML=useradditionalinfo;
      document.getElementById("newday").innerHTML=userday;
      document.getElementById("newmeal").innerHTML=usermeal;
      document.getElementById("newrating").innerHTML=userrating;
      document.getElementById("newregno").innerHTML=userregno;
    })
  }

  function getmaterialdata(){
    var user=document.getElementById("name").value;
    firebase.database().ref('User/Amir/'+user).once('value').then(function(snapshort){
      if(snapshort.val()==null)console.log(snapshort.val());
      var useradditionalinfo=snapshort.val().additionalinfo;
      var usercost=snapshort.val().cost;
      var userdate=snapshort.val().date;
      var userplace=snapshort.val().palce;
      

      document.getElementById("newadditionalinfo").innerHTML=useradditionalinfo;
      document.getElementById("newcost").innerHTML=usercost;
      document.getElementById("newdate").innerHTML=userdate;
      document.getElementById("newplace").innerHTML=userplace;
      
    })
  }

  function getdailydata(){
    var user=document.getElementById("name").value;
    firebase.database().ref('User/Dailyfoodcost/'+user).once('value').then(function(snapshort){
      if(snapshort.val()==null)console.log(snapshort.val());
      var userchefrating=snapshort.val().chefrating;
      var usercomments=snapshort.val().comments;
      var usercostofgoods=snapshort.val().costofgoods;
      var userdate=snapshort.val().date;
      var usergoods=snapshort.val().goods;
      var userweightofgoods=snapshort.val().weightofgoods;
      

      document.getElementById("newchefrating").innerHTML=userchefrating;
      document.getElementById("newcomments").innerHTML=usercomments;
      document.getElementById("newcostofgoods").innerHTML=usercostofgoods;
      document.getElementById("newdate").innerHTML=userdate;
      document.getElementById("newgoods").innerHTML=usergoods;
      document.getElementById("newweightofgoods").innerHTML=userweightofgoods;
      
    })
  }
  
  function getfeedata(){
    var user=document.getElementById("name").value;
    firebase.database().ref('User/Fees/'+user).once('value').then(function(snapshort){
      if(snapshort.val()==null)console.log(snapshort.val());
      var userbreakagefee=snapshort.val().breakagefee;
      var userdailymess=snapshort.val().dailymess;
      var userregno=snapshort.val().regno;
      var userspecialmess=snapshort.val().specialmess;
      
      

      document.getElementById("brekfee").innerHTML=userbreakagefee;
      document.getElementById("dailymess").innerHTML=userdailymess;
      document.getElementById("splmess").innerHTML=userregno;
      document.getElementById("regno").innerHTML=userspecialmess;
      
      
    })
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
      var name=document.getElementById('chef').value;
      firebase.database().ref("User/Dailyfoodcost/"+name).set({
        date:document.getElementById('da').value,
         goods:document.getElementById('goods').value,
         chefrating:document.getElementById('ra').value,
    comments:document.getElementById('co').value,
    weightofgoods:document.getElementById('ck').value,
    costofgoods:document.getElementById('pk').value,
   
        
             });
             window.alert("Database updated");
     }
     else if(a=='4'){
      var name=document.getElementById('name').value;
      firebase.database().ref('User/Fees/'+name).once('value').then(function(snapshort){
        if(snapshort.exists()){
          firebase.database().ref("User/Fees/"+name).set({
            regno:document.getElementById('regno').value,
             specialmess:parseInt(snapshort.val().specialmess)+parseInt(document.getElementById('spl').value),
             dailymess:parseInt(snapshort.val().dailymess)+parseInt(document.getElementById('cost').value),
            breakagefee:parseInt(snapshort.val().breakagefee)+parseInt(document.getElementById('brekfee').value),
          });window.alert("Newly Updated");
        }
        else{
      firebase.database().ref("User/Fees/"+name).set({
        regno:document.getElementById('regno').value,
         specialmess:document.getElementById('spl').value,
         dailymess:document.getElementById('cost').value,
    breakagefee:document.getElementById('brekfee').value,

             });
             window.alert("Database updated");}
     }
      )}
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




