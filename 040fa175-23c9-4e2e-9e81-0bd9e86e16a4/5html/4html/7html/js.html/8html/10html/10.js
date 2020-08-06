  function odaklan(x)
  {
if (x=="ad" || x=="soyad" || x=="istad" || x=="parol" ||  x=="mail")
{
    document.getElementById(x).value="";
 document.getElementById(x).style.background="#a652c7 ";
 document.getElementById(x).style.color="white";
 document.getElementById(x).style.borderColor="#a652c7";
}

}

function cikis(x,y)
{
    if(y=="")
    {
        if(x=="ad")
        {document.getElementById(x).value="Adinizi yazin!";}
        if(x=="soyad")
        {document.getElementById(x).value="Soyadinizi yazin!";}
        if(x=="istad")
        {document.getElementById(x).value="Istifadeci adinizi yazin!";}
        if(x=="parol")
        {document.getElementById(x).value="Parol yazin!";}
        if(x=="mail")
        {document.getElementById(x).value="E-maili yazin!";}
        
       document.getElementById(x).style.background="white";
       document.getElementById(x).style.color="#ababab";
         document.getElementById(x).style.borderColor="grey";

    }
}


function islem()
{


    document.getElementById("aduyari").innerHTML="";
    document.getElementById("soyaduyari").innerHTML="";
    document.getElementById("kadiuyari").innerHTML="";
    document.getElementById("mailuyari").innerHTML="";


    var kural,yazi;
    yazi=document.getElementById("mail").value;
    kural=/.+@.+\.+./;
  



 if(document.getElementById("ad").value=="Adinizi yazin!")
{
    document.getElementById("aduyari").innerHTML="Adinizi yazmalisiniz!";
}
if(document.getElementById("soyad").value=="Soyadinizi yazin!")
{
    document.getElementById("soyaduyari").innerHTML="Soyadinizi yazmalisiniz!";
}
if(document.getElementById("istad").value=="Istifadeci adinizi yazin!")
{
    document.getElementById("kadiuyari").innerHTML="istifadeci adininizi yazmalisiniz!";
}
if(document.getElementById("mail").value=="E-maili yazin!")
{
    document.getElementById("mailuyari").innerHTML="Import";
}
else if(!kural.test(yazi))
{
    document.getElementById("mailuyari").innerHTML="Duzgun E-mail deyil!"
}
 
}
  

 
 
