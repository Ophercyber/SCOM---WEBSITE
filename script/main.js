const sidebar = document.getElementById("sidebar");
const menubtn =document.getElementById("menubtn");
const content =document.getElementById("content");


menubtn.onclick = function(){
   if( sidebar.style.width==="300px"){
    sidebar.style.width="0";
   }
else{
    sidebar.style.width="300px";
    content.style.opacity="";

}
}