function openPage(pageName,element){
    var i,tabcontent,tablinks;
    tabcontent=document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }
    tablinks=document.getElementsByClassName("tablink");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].style.backgroundColor="";
    }
    document.getElementById(pageName).style.display="block";
    element.style.backgroundColor= "deepskyblue";
}


function alertFunction() {
    var name=document.getElementById('fname').value;
  alert(name+" your whatsappNo and emailAddress are sent to Manideep. Soon he will be contacting you");
  form.reset();
}


