window.addEventListener("load",addlistener)
var  osis="", grade="", fullname="", counselor="", room="", term="", year="", msg="",class1="", class2="", class3="", class4="", class5="", class6="", class7="", class8="", oclass=""; 
function addlistener() 
    {
        document.getElementById("info").style.visibility= "hidden"
        document.getElementById("schedule").style.visibility= "hidden"
        document.getElementById("btnresult").addEventListener("click",bringinfo)
        
    }
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
    document.getElementById("class1").textContent= class1
    document.getElementById("class2").textContent= class1
    document.getElementById("class3").textContent= class1
    document.getElementById("class4").textContent= class1
    document.getElementById("class5").textContent= class1
    document.getElementById("class6").textContent= class2
    document.getElementById("class7").textContent= class2
    document.getElementById("class8").textContent= class2
    document.getElementById("class9").textContent= class2
    document.getElementById("class10").textContent= class2
    document.getElementById("class11").textContent= class3
    document.getElementById("class12").textContent= class3
    document.getElementById("class13").textContent= class3
    document.getElementById("class14").textContent= class3
    document.getElementById("class15").textContent= class3
    document.getElementById("class16").textContent= class4
    document.getElementById("class17").textContent= class4
    document.getElementById("class18").textContent= class4
    document.getElementById("class19").textContent= class4
    document.getElementById("class20").textContent= class4
    document.getElementById("class21").textContent= class5
    document.getElementById("class22").textContent= class5
    document.getElementById("class23").textContent= class5
    document.getElementById("class24").textContent= class5
    document.getElementById("class25").textContent= class5
    document.getElementById("class26").textContent= class6
    document.getElementById("class27").textContent= class6
    document.getElementById("class28").textContent= class6
    document.getElementById("class29").textContent= class6
    document.getElementById("class30").textContent= class6
    document.getElementById("class31").textContent= class7
    document.getElementById("class32").textContent= class7
    document.getElementById("class33").textContent= class7
    document.getElementById("class34").textContent= class7
    document.getElementById("class35").textContent= class7
    document.getElementById("class36").textContent= class8
    document.getElementById("class37").textContent= class8
    document.getElementById("class38").textContent= class8
    document.getElementById("class39").textContent= class8
    document.getElementById("class40").textContent= class8
}
