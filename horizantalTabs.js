function openPage(pageName,element){
    var i,tabcontent,tablinks;
    tabcontent=document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
    }
    tablinks=document.getElementsByClassName("tablink");
    for(i=0;i<tablinks.length;i++){
        tablinks[i].style.backgroundColor="deepskyblue";
        tablinks[i].style.color="white";
        tablinks[i].style.borderStyle="solid";
        tablinks[i].style.borderColor="deepskyblue";
        tablinks[i].style.outline="none";


    }
    document.getElementById(pageName).style.display="block";
    element.style.backgroundColor= "white";
    element.style.color="deepskyblue";
    element.style.outline="none";
}


function alertFunction() {
    var name=document.getElementById('fname').value;
  alert(name+" your whatsappNo and emailAddress are sent to Manideep. Soon he will be contacting you");
  form.reset();
}


