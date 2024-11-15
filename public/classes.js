window.addEventListener("load",addlistener)
var period="1", classname="", classroom="", teacher="", msg="", class1="", class2="", class3="", class4="", class5="", class6="", class7="", class8="";
function addlistener()
{
	document.getElementById("lblclass").textContent= "period " + period + ":"
  document.getElementById("btnclass").addEventListener("click",checkinput)
}
function checkinput()
{
  classname= document.getElementById("txtclass").value
  classroom= document.getElementById("txtroom").value
  teacher= document.getElementById("txtteacher").value
  if(classname==""||classroom==""||teacher=="")
  {
    whichblank()
  }
  else
  	{
    msg= classname + "|"+"room:" +classroom + "|"+teacher
    document.getElementById("txtclass").value=""
    document.getElementById("txtroom").value=""
    document.getElementById("txtteacher").value=""
    switchdigit()
	}
}
function whichblank() 
{
  if(classname=="")
  {
    alert("please input a class name")
    document.getElementById("txtclass").focus()
  }
  else if(classroom=="")
  {
    alert("please input a room")
    document.getElementById("txtroom").focus()
  }
  else
  {
    alert("please input a teacher")
    document.getElementById("txtteacher").focus()
  }
}



function switchdigit()
{
  switch(period)
    {
      case "1":
		msg= msg+ "|8:05-8:49";  
		class1= msg;
		period="2"; 
		break;
      case "2":
		msg= msg+ "|8:53-9:37";  
		class2= msg;
		period="3"; 
		break;
      case "3":
		msg= msg+ "|9:41-10:23";  
		class3= msg;
		period="4";
		break;
      case "4":
		msg= msg+ "|10:26-11:10";  
		class4= msg;
		period="5";
		break;
      case "5":
		msg= msg+ "|11:13-11:57";  
		class5= msg;
		period="6";
		break;
      case "6":
		msg= msg+ "|12:00-12:44";  
		class6= msg;
		period="7";
		break;
      case "7":
		msg= msg+ "|12:47-1:31";  
		class7= msg;
		period="8";
		break;
      case "8":
		msg= msg+ "|1:34-2:18"; 
		class8= msg;
		saveinfo();
		break;
      default:
		alert("error");
		break;
    }
	document.getElementById("lblclass").textContent= "period " + period + ":"
}
function saveinfo()
{
  localStorage.setItem("class1", class1)
  localStorage.setItem("class2", class2)
  localStorage.setItem("class3", class3),
  localStorage.setItem("class4", class4)
  localStorage.setItem("class5", class5)
  localStorage.setItem("class6", class6)
  localStorage.setItem("class7", class7)
  localStorage.setItem("class8", class8)
  window.location.href="schedule.html"
}