document.addEventListener("DOMContentLoaded",function(){
     document.getElementById("savenote").addEventListener("click",addnote);
});
function addnote(){
    let title=document.getElementById("notetitle").value.trim();
    let content = document.getElementById("notecontent").value.trim();
    if(title===""||content===""){
        alert("please enter something")
        return;
    }
    let notediv=document.createElement("div");
    notediv.classList.add("note")
    let notetext=document.createElement("div")
    notetext.innerHTML=`<strong>${title}</strong><p>${content}</p>`;

let deletebtn=document.createElement("button");
deletebtn.textContent="delete";
deletebtn.classList.add("delete-btn");
deletebtn.onclick= function (){
    notediv.remove();
};
notediv.appendChild(notetext);
notediv.appendChild(deletebtn);

document.getElementById("notesContainer").appendChild(notediv);
document.getElementById("notetitle").value ="";
document.getElementById("notecontent").value="";
}