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
  firebase.auth.Auth.Persistence.LOCAL;
  database=firebase.database();
  var ref=database.ref('User/Amir/');
  function getallmaterialdata(){
    ref.on('value',gotdata);
  }
  
  function gotdata(data){
  var scores=data.val();
  var keys=Object.keys(scores);
  //console.log(keys);
  document.getElementById("scorelist").innerHTML=" <span class='month'><h1>Material Records</h1></span> <br>"
  for(var i=0;i<keys.length;i++){
    var k=keys[i];
    var cost=scores[k].cost;
    var date=scores[k].date;
    var day=scores[k].day;
    var materialid=scores[k].materialid;
    var time_of_material_use=scores[k].time_of_material_use;
    //console.log(cost,date,day,materialid,time_of_material_use);
    var li=["Material Name : "+k[0].toUpperCase() +  
    k.slice(1)+" ",
    "<br>"+"Cost :"+cost+" ",
    "<br>"+"Date :"+date+" ",
    "<br>"+"Day :"+day+" ",
    "<br>"+"Material ID :"+materialid+" ",
    "<br>"+"Time of Usage :"+time_of_material_use+"<br> "];
    document.getElementById("scorelist").innerHTML+=li+"<br>";
    
  }
  }
var reff=database.ref('User/Fees/');
  function getallfeedata(){
    reff.on('value',gotfee);
  }

  function gotfee(data){
    var scores=data.val();
  var keys=Object.keys(scores);
  //console.log(keys);
  document.getElementById("feedata").innerHTML="<span class='month'><h1>Student Fee Records</h1></span>"
  for(var i=0;i<keys.length;i++){
    var k=keys[i];
    var breakfee=scores[k].breakagefee;
    var dailymess=scores[k].dailymess;
    var regno=scores[k].regno;
    var specialmess=scores[k].specialmess;
    var li=["Student Name : "+k[0].toUpperCase() +  
    k.slice(1)+" ",
    "<br>"+"Breakage Fee :"+breakfee+" ",
    "<br>"+"Daily mess :"+dailymess ,
    "<br>"+"Registration Number :"+regno+" ",
    "<br>"+"Special Mess:"+specialmess+"<br> "];
    document.getElementById("feedata").innerHTML+=li+"<br>";
    
  }
  }
function collapse(){
  document.getElementById("feedata").innerHTML="";
}
function collapserat(){
  document.getElementById("rating").innerHTML="";
}
function collapsemat(){
  document.getElementById("scorelist").innerHTML="";
}
function collapsefcd(){
  document.getElementById("dailydata").innerHTML="";
}
  var refff=database.ref('User/Dailyfoodcost/');
  function getdailyfoodcostdata(){
    refff.on('value',gotdailyfood);
  }

  function gotdailyfood(data){
    var scores=data.val();
  var keys=Object.keys(scores);
  //console.log(keys);
  document.getElementById("dailydata").innerHTML="<span class='month'><h1>Daily Food Cost Records</h1></span>"
  for(var i=0;i<keys.length;i++){
    var k=keys[i];
    var chefrating=scores[k].chefrating;
    var comments=scores[k].comments;
    var costofgoods=scores[k].costofgoods;
    var date=scores[k].date;
    var goods=scores[k].goods;
    var weight=scores[k].weightofgoods;
    var li=["Chef Name : "+k[0].toUpperCase() +  
    k.slice(1)+" ",
    "<br>"+"Chef Rating:"+chefrating+" ",
    "<br>"+"Comments :"+comments,
    "<br>"+"Cost of Goods :"+costofgoods+" ",
    "<br>"+"Date:"+date+" ",
    "<br>"+"Goods:"+goods+" ",
    "<br>"+"Weight:"+weight+"<br> "];
    document.getElementById("dailydata").innerHTML+=li+"<br>";
    
  }
  }
  var reff=database.ref('User/Ratings/');
  function getrating(){
    reff.on('value',gotrating);
  }
  function gotrating(data){
    var scores=data.val();
  var keys=Object.keys(scores);
  //console.log(keys);
  document.getElementById("rating").innerHTML="<span class='month'><h1>Student Ratings</h1></span>"
  for(var i=0;i<keys.length;i++){
    var k=keys[i];
    var additionalinfo=scores[k].additionalinfo;
    var day=scores[k].day;
    var meal=scores[k].meal;
    var rating=scores[k].rating;
    var regno=scores[k].regno;
    var li=["Student Name : "+k[0].toUpperCase() +  
    k.slice(1)+" ",
    "<br>"+"AdditionalInfo:"+additionalinfo+" ",
    "<br>"+"Day :"+day,
    "<br>"+"Meal :"+meal+" ",
    "<br>"+"Rating:"+rating+" ",
    "<br>"+"Regno :"+regno+"<br> "];
    document.getElementById("rating").innerHTML+=li+"<br>";
  }}
 
  
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
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(function() {
    //     alert('User signed in!');
    //     window.location="material issue record.html";
    //   }) 
    //   .catch(function(error) {
        
    //       alert('Please check your credentials!!')
          
    //   });
    if(email=="messadmin@sastra.ac.in" &&  password=="sastra123"){
      window.location="material issue record.html";
    }
    else{
      alert('Please check your credentials!!');
    }
	}
  
  function getdata(){
    var user=document.getElementById("name").value;
    firebase.database().ref('User/Ratings/'+user).once('value').then(function(snapshort){
      if(snapshort.val()==null)window.alert("Wrong Entry!!");
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
      if(snapshort.val()==null)window.alert("Wrong Entry!!");
      var usercost=snapshort.val().cost;
      var userdate=snapshort.val().date;
      var userday=snapshort.val().day;
      var usermaterialid=snapshort.val().materialid;
      var usertime=snapshort.val().time_of_material_use;
      

      document.getElementById("newcost").innerHTML=usercost;
      document.getElementById("newdate").innerHTML=userdate;
      document.getElementById("newday").innerHTML=userday;
      document.getElementById("newmaterialid").innerHTML=usermaterialid;
      document.getElementById("newtime").innerHTML=usertime;
      
    })
  }

  function getdailydata(){
    var user=document.getElementById("name").value;
    firebase.database().ref('User/Dailyfoodcost/'+user).once('value').then(function(snapshort){
      if(snapshort.val()==null)window.alert("Wrong Entry!!");
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
      if(snapshort.val()==null)window.alert("Wrong Entry!!");
      var userbreakagefee=snapshort.val().breakagefee;
      var userdailymess=snapshort.val().dailymess;
      var userregno=snapshort.val().regno;
      var userspecialmess=snapshort.val().specialmess;
      
      

      document.getElementById("brekfee").innerHTML=userbreakagefee;
      document.getElementById("dailymess").innerHTML=userdailymess;
      document.getElementById("splmess").innerHTML=userspecialmess;
      document.getElementById("regno").innerHTML=userregno;
      
      
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




