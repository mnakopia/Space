var jsonInfo;
async function fetchText() {
  let response = await fetch('data.json');
  let data = await response.json();
jsonInfo=data;
}

fetchText()


  var showHamburgerMenu =true;
  var destinationName;

  function destinationChanger(destinationId) {

    var element = document.getElementById(destinationName);

    const items = document.querySelectorAll('.dest-link');
    document.getElementById('moon').classList.remove("active");


    items.forEach(item => {
      item.addEventListener("click", function() {   
       items .forEach(a=>{
          a.classList.remove("active");
        });
         item.classList.add("active");
        
      });  
    });
    
    switch (destinationId) {
      case 0:
        destinationName = "moon";
        break;
      case 1:
        destinationName = "mars";
        break;
      case 2:
        destinationName = "europa";
        break;
      case 3:
        destinationName = "titan";
        break;
      
    }
    var element = document.getElementById(destinationName);
    element.classList.add("active");

    document.getElementById('destinationName').innerHTML = jsonInfo.destinations[destinationId].name;
    document.getElementById('destinationInfo').innerHTML = jsonInfo.destinations[destinationId].description;
    document.getElementById('travelTime').innerHTML = jsonInfo.destinations[destinationId].travel;
    document.getElementById('avgDistance').innerHTML = jsonInfo.destinations[destinationId].distance;
    document.getElementById('destinationImg').src = jsonInfo.destinations[destinationId].images.webp;


 }




 function crewChanger(crewMemberId) {

  var element = document.getElementById(crewMemberId);

  const items = document.querySelectorAll('.crew-link');
  document.getElementById('AnoushehAnsari').classList.remove("active");


  items.forEach(item => {
    item.addEventListener("click", function() {   
     items .forEach(a=>{
        a.classList.remove("active");
      });
       item.classList.add("active");
      
    });  
  });
  
  switch (crewMemberId) {
    case 0:
      crewMemberName = "DouglasHurley";
      break;
    case 1:
      crewMemberName = "MarkShuttleworth";
      break;
    case 2:
      crewMemberName = "VictorGlover";
      break;
    case 3:
      crewMemberName = "AnoushehAnsari";
      break;
    
  }
  var element = document.getElementById(crewMemberName);
  element.classList.add("active");

  document.getElementById('crew-member').innerHTML = jsonInfo.crew[crewMemberId].name;
  document.getElementById('position').innerHTML = jsonInfo.crew[crewMemberId].role;
  document.getElementById('crewMemberInfo').innerHTML = jsonInfo.crew[crewMemberId].bio;
  document.getElementById('crewMemberImg').src = jsonInfo.crew[crewMemberId].images.webp;


}


function technologyChanger(technologyId) {

  var element = document.getElementById(technologyId);

  const items = document.querySelectorAll('.square');
  document.getElementById('launchVehicle').classList.remove("active");


  items.forEach(item => {
    item.addEventListener("click", function() {   
     items .forEach(a=>{
        a.classList.remove("active");
      });
       item.classList.add("active");
      
    });  
  });
  
  switch (technologyId) {
    case 0:
      crewMemberName = "launchVehicle";
      break;
    case 1:
      crewMemberName = "capsule";
      break;
    case 2:
      crewMemberName = "spaceport";
      break;
  
    
  }
  var element = document.getElementById(crewMemberName);
  element.classList.add("active");

  document.getElementById('technology-name').innerHTML = jsonInfo.technology[technologyId].name;
  document.getElementById('aboutTechnology').innerHTML = jsonInfo.technology[technologyId].description;
  document.getElementById('technologyImg').src = jsonInfo.technology[technologyId].images.portrait;


}


function showMenu(){
  var navmenu = document.querySelector(".nav-menu-m");
  var hamburgerMenu = document.querySelector(".hamburger-menu");

  if(showHamburgerMenu == true){
    hamburgerMenu.src="./assets/shared/icon-close.svg"
    navmenu.classList.remove("d-none")
    showHamburgerMenu=false;
  }
  else if(showHamburgerMenu == false){
    hamburgerMenu.src="./assets/shared/icon-hamburger.svg"
    navmenu.classList.add("d-none")
    showHamburgerMenu= true;
  }


}












