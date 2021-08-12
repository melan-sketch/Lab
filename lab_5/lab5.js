//Change Name
let changeName;
let id = 0;
if (JSON.parse(localStorage.getItem("changeName")) !== null) {
  changeName = localStorage.getItem("changeName");
  changeName = JSON.parse(changeName); 
} else {
  changeName = [];
}

$("#Add").click(function () {
  let name = $("#name").val();
  changeName.push(name);
  localStorage.setItem("changeName", JSON.stringify(changeName));

  $("#name").val("");
  readName();
});

function updateTask(id) {
    let index = findIndexTask(id);
    $("#idUpdate").val(changeName[index].id); 
    $("#name").val(changeName[index].name); 

}

function editName(){
    let name = $("#name").val();
    let idUpdate = $("#idUpdate").val(); 

    let index = findIndexTask(idUpdate);
    changeName[index].name = name;

    localStorage.removeItem("changeName");
    localStorage.setItem("changeName", JSON.stringify(changeName));

    readName();
}

function readName() {
  let nameHTML = "";

  for (let i = 0; i < changeName.length; i++) {
    nameHTML += `
    <div class="content">
        <div class="content-detail">
        <span><p class="detail-text">${changeName[i]}</p></span>
        <i class="fas fa-trash fa-1x" onclick="removeName(${i})"></i>
        <i class="fas fa-edit fa-1x" onclick="editName(${i})"></i>
        </div>
    </div>
    `;
  }
  document.getElementsByClassName("content")[0].innerHTML = nameHTML;
}

function findIndexTask(numberId) {
    let index;
    for (let i = 0; i < changeName.length; i++) {
      if (changeName[i].id == numberId) {
        index = i;
      }
    }
    return index;
  }

function removeName(index) {
  console.log(index);
  changeName.splice(index, 1);
  localStorage.setItem("changeName", JSON.stringify(changeName));
  readName();
}

function Clear(index) {
    changeName.splice(index);
    localStorage.setItem("changeName", JSON.stringify(changeName));
    readName();
}
readName();



