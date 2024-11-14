window.addEventListener("load",addlistener) 

window.testvar = "helpme";
var whichinput="osis", firstname="", lastname="", osis="", grade="", fullname="", counselor="", room="", oclass=""; 
function addlistener() 
{
    document.getElementById("btninfo").addEventListener("click",checkinput)
}
function checkinput() 
{
	
    switch(whichinput)
    {
        case "osis":
            inputosis();
            break;
        case "firstname": 
            inputfullname(); 
            break;
        case "grade":
            inputgrade();
            break;
        case "counselor":
            inputcounselor()
            break;
        case "year":
            inputyear();
            break;
        case "term":
            inputterm();
            break;
    }
}
function inputosis() 
{
    osis= document.getElementById("txtinfo").value
    var osislegnth= osis.length;
    osis= parseInt(osis);
    if(osislegnth!=9 || osis==0)
    {alert("please input a valid osis")}
    else
    {
        whichinput="firstname"
        document.getElementById("lblinfo").textContent="first name:"
        document.getElementById("txtinfo").value=""
    }
}
function inputfullname() 
{
    if(firstname=="")
    {
        firstname= document.getElementById("txtinfo").value
        document.getElementById("lblinfo").textContent="last name:"
        document.getElementById("txtinfo").value=""
    }
    else
    {
        lastname= document.getElementById("txtinfo").value
        fullname= lastname + "," + firstname
        whichinput="grade"
        document.getElementById("lblinfo").textContent="current grade:"
        document.getElementById("txtinfo").value=""
    }
}
function inputgrade()
{
    grade= document.getElementById("txtinfo").value
    grade= parseInt(grade)
    if(grade<9 || grade>12)
    {
        alert("please input a valid grade")
    }
    else
    {
        whichinput="counselor"
        document.getElementById("lblinfo").textContent="counselor:"
        document.getElementById("txtinfo").value=""
    }
}
function inputcounselor() 
{
    room=""
    counselor= document.getElementById("txtinfo").value
    counselor= counselor.toUpperCase()
    switch(counselor)
        { 
            case "ERTEL": room= "112K"; oclass="C2D"; changequestion(); break;
            case "VEGA": room="112L"; oclass="C2B"; changequestion();break;
            case "VALERIO": room="112M";oclass="B2A";changequestion(); break;
            case "NIETO": room="112N"; oclass="A3A";changequestion();break;
            default: alert("please input a valid counselor");break;
        }
}
function changequestion()
{
    whichinput= "year"
    document.getElementById("lblinfo").textContent="current year:"
    document.getElementById("txtinfo").value=""
}
function inputyear() 
{
    year= document.getElementById("txtinfo").value
    year= parseInt(year)
    if(year<2000 || year>2050)
    {
        alert("please input a valid year")
    }
    else
    {
        whichinput="term"
        document.getElementById("lblinfo").textContent="term:"
        document.getElementById("txtinfo").value=""
    }
}
function inputterm()
{
    term= document.getElementById("txtinfo").value
    term= parseInt(term)
    var numcheck= term%1
    if(term<1 || term>2||numcheck!=0)
    {
        alert("please input a valid term")
    }
    else
    {
        document.getElementById("studentinfo").style.visibility= "hidden"
        saveinfo()
    }
}
function saveinfo() 
{
    localStorage.setItem("osis", osis)
    localStorage.setItem("fullname", fullname)
    localStorage.setItem("grade", grade)
    localStorage.setItem("counselor", counselor)
    localStorage.setItem("room", room)
    localStorage.setItem("term", term)
    localStorage.setItem("yeartype", year)
    localStorage.setItem("oclass",oclass)
    window.location.href="classes.html"
}