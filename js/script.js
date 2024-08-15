var inputName=document.querySelector(".input-name");
var inputDate=document.querySelector(".input-date");
var required=document.querySelector(".required");

window.onload=function(){
    rendering();
}
var taskArray= JSON.parse(localStorage.getItem('message')) || [ ];  

function addinfo(){
    var tName=inputName.value;
    var tDate=inputDate.value;
    inputName.value='';
    inputDate.value='';
    if(tName==='' && tDate===''){
        required.innerText="Required!";
    }
    else{
        required.innerText='';
        taskArray.push({
            name:tName,
            date:tDate
        });
        updateLocal();
        rendering();
   }

}
var renderText=document.querySelector(".render-text");

function rendering(){
    var mainHTML=''
    for(let i=0;i<taskArray.length;i++){
        var myArray=taskArray[i];
        var tDispName=myArray.name;
        var tDispDate=myArray.date;
        var html=`<tr><td>${tDispName}</td><td>${tDispDate}</td><td>
    <button class="dlt-btn" onclick="deleteitem(${i});">DELETE</button></td></tr>`;
        mainHTML+=html;
    }
    renderText.innerHTML=mainHTML;
}

function updateLocal(){
    localStorage.setItem('message',JSON.stringify(taskArray));
}
function deleteitem(index){
    taskArray.splice(index,1);
    updateLocal();
    rendering();
}