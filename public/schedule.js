window.addEventListener("load",bringinfo)
var  osis="", grade="", fullname="", counselor="", room="", term="", year="", msg="",class1="", class2="", class3="", class4="", class5="", class6="", class7="", class8="", oclass=""; 
bringinfo()
function bringinfo() 
{
    document.getElementById("btnresult").style.visibility="hidden"
    document.getElementById("info").style.visibility="visible"
    document.getElementById("schedule").style.visibility="visible"
    osis= localStorage.getItem("osis")
    fullname=localStorage.getItem("fullname")
    grade= localStorage.getItem("grade")
    counselor= localStorage.getItem("counselor")
    room= localStorage.getItem("room")
    term= localStorage.getItem("term")
    year= localStorage.getItem("yeartype")
    oclass= localStorage.getItem("oclass")
    class1= localStorage.getItem("class1")
    class2= localStorage.getItem("class2")
    class3= localStorage.getItem("class3")
    class4= localStorage.getItem("class4")
    class5= localStorage.getItem("class5")
    class6= localStorage.getItem("class6")
    class7= localStorage.getItem("class7")
    class8= localStorage.getItem("class8")
    inputtable()
}
function inputtable() 
{
    document.getElementById("studentname").textContent= fullname
    document.getElementById("studentosis").textContent= osis
    document.getElementById("studentgrade").textContent= grade
    document.getElementById("studentcounselor").textContent= counselor
    document.getElementById("studentroom").textContent= room
    document.getElementById("studentterm").textContent= term
    document.getElementById("current").textContent= year
    document.getElementById("oclass").textContent= oclass
	for(var i = 1; i<=40; i++) {
		if(i>0 && i<=5){
			document.getElementById("class"+i).textContent=class1
		}
		else if(i>5 && i<=10){
			document.getElementById("class"+i).textContent=class2
		}else if(i>10 && i<=15){
			document.getElementById("class"+i).textContent=class3
		}else if(i>15 && i<=20){
			document.getElementById("class"+i).textContent=class4
		}else if(i>20 && i<=25){
			document.getElementById("class"+i).textContent=class5
		}else if(i>25 && i<=30){
			document.getElementById("class"+i).textContent=class6
		}else if(i>30 && i<=35){
			document.getElementById("class"+i).textContent=class7
		}else if(i>35 && i<=40){
			document.getElementById("class"+i).textContent=class8
		}
	}


}