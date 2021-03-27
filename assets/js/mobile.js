const sidebarCloseButtonId = "hide-sidebar";
const sidebarOpenButtonId = "show-sidebar";
const sidebarId = "mobile-sidebar";






/** SHOW AND HIDE BUTTONS FOR SIDEBAR */

const hideSidebarBtn = document.getElementById(sidebarCloseButtonId);
const showSidebarBtn = document.getElementById(sidebarOpenButtonId);
const sidebar = document.getElementById(sidebarId);

hideSidebarBtn.addEventListener("click", function(){
    setTimeout( () => {sidebar.style = "display: none;"}, 200);
    sidebar.style = "left: -100%; opacity: 0%";
});

showSidebarBtn.addEventListener("click", function(){
    setTimeout( () => {sidebar.style = ""}, 1);
    sidebar.style = "left: -100%; opacity: 0%";
    
});