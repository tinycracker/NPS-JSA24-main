let menu = [`rau xào`, `thịt luộc`, `gà rán`];
localStorage.setItem("menu", JSON.stringify(menu));

let input;
do{
  input = prompt("mời người dùng nhập vào yêu cầu C,R,U,D").toLowerCase().trim();
  console.log("input: ", input);
  if (input == "c") {
    createMenu();
  }
  else if (input == "r") {
    readMenu();
  }
  else if (input == "u") {
    updateMenu();
  }
  else if (input == "d") {
    deleteMenu();
  }
  else {
    alert("Chưa đúng yêu cầu nhập. Mời nhập lại!!!")
  }
}
while (input == "c" || input == "r" || input == "u" || input == "d");

function createMenu() {
    const data = {
      name: prompt("Mời người dùng nhập vào món ăn muốn thêm vào menu"),
    }
  
    let getMenu = JSON.parse(localStorage.getItem("menu")); /// Lấy dữ liệu từ LS về
    getMenu.push(data); //// Thêm mới data vào mảng 
    localStorage.setItem("menu", JSON.stringify(getMenu)); /// Cập nhật mảng mới nhất dã được thêm lên LS
  
    return data;
  }
  
  
  function readMenu() {
    let getMenu = JSON.parse(localStorage.getItem("menu")); /// Lấy dữ liệu từ LS về
    
      alert(menu.join(", "));
    
  }
  
  function updateMenu() {
    let getMenu = JSON.parse(localStorage.getItem("menu")); /// Lấy dữ liệu từ LS về
    let nameUpdate = prompt("Mời người dùng nhập vào tên món muốn update").trim();
  
    let viTriMenuCanUpdate = menu.indexOf(nameUpdate);
    getMenu[viTriMenuCanUpdate] = promt("Mời người dùng nhập vào dữ liệu update")
  
    localStorage.setItem("menu", JSON.stringify(getMenu));

  }

function deleteMenu() {
    let getMenu = JSON.parse(localStorage.getItem("menu")); /// Lấy dữ liệu từ LS về
    let nameDelete = prompt("Mời người dùng nhập vào tên món muốn Delete").trim();
    let viTriMenuCanDelete = menu.indexOf(nameDelete);
    getMenu.splice(viTriMenuCanDelete, 1);
    localStorage.setItem("menu", JSON.stringify(getMenu));
      
}
