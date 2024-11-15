window.addEventListener("load",addlistener) 
var whichinput="osis", boxchecker="", firstname="", lastname="", osis="", grade="", fullname="", counselor="", room="", oclass=""; 
function addlistener() 
{
    document.getElementById("btninfo").addEventListener("click",boxcheck)
}
function boxcheck() 
{
	 boxchecker= document.getElementById("txtinfo").value 
		if(boxchecker=="")
			{alert("please fill in the box")}
		else
		{
			checkinput()
		}
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
	var osischeck= osis % 1
    osis= parseInt(osis);
    if(osislegnth!=9 || osis==0||osischeck!=0)
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
	var gradecheck=grade%1
    grade= parseInt(grade)
    if(grade<9 || grade>12||gradecheck!=0)
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
			case "ABASSI": room="112N"; oclass="D4A";changequestion();break;
			case "BHANOTHAQUE": room="112N"; oclass="B3D";changequestion();break;
			case "MANGANIELLO": room="112N"; oclass="A3A";changequestion();break;
			case "O": room="112N"; oclass="A3A";changequestion();break;
			case "GRULLON": room="112N"; oclass="A3A";changequestion();break;
			case "HUSSAINI": room="112N"; oclass="A3A";changequestion();break;
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
	var yearcheck= year%1
    year= parseInt(year)
    if(year<2000 || year>2050||yearcheck!=0)
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
	var numcheck= term%1
    term= parseInt(term)
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