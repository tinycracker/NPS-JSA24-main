/// Chữa bài:
// let height = 5;

// //// Vẽ tam giác bằng cách in ra số
// for (let i = 1; i <= height; i++) {
//   let line = ""

//   // In ra khoảng trắng bên trái
//   for (let j = 1; j <= height - i; j++) {
//     line = line + " ";
//   }

//   // In ra số 1
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     line = line + "1"
//   }

//   console.log(line);
// }

//// Câu 2: 
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
// for (let key of arr) {
//   if (key % 2 === 0) { //// Kiểm tra số chẵn.
//     console.log(key);
//   }
// }


////// Chữa bài danh bạ:
let danhBa = [
  {
    name: "Quân",
    phoneNumber: 1234567890,
    email: "quan@gmail.com"
  },
  {
    name: "Lê Anh",
    phoneNumber: 6868686868,
    email: "leanh@gmail.com"
  },
];

// Lưu trữ trong local Storage
localStorage.setItem("danhBa", JSON.stringify(danhBa));

let input;
do {
  input = prompt("mời người dùng nhập vào yêu cầu C,R,U,D. Nhập Q để thoát chương trình");
  console.log("input: ", input);

  if (input.toLowerCase().trim() == "c") {
    createContact();
  }
  else if (input.toLowerCase().trim() == "r") {
    readContact();
  }
  else if (input.toLowerCase().trim() == "u") {
    updateContact();
  }
  else if (input.toLowerCase().trim() == "d") {
    deleteContact();
  }
  else {
    alert("Chưa đúng yêu cầu nhập. Mời nhập lại!!!")
  }

}
while (input == "c" || input == "r" || input == "u" || input == "d" && input != "q");


function createContact() {
  const data = {
    name: prompt("Mời người dùng nhập vào tên muốn thêm"),
    phoneNumber: prompt("Mời người dùng nhập vào số điện thoại muốn thêm"),
    email: prompt("Mời người dùng nhập vào email muốn thêm"),
  }

  let getDanhBa = JSON.parse(localStorage.getItem("danhBa")); /// Lấy dữ liệu từ LS về
  getDanhBa.push(data); //// Thêm mới data vào mảng 
  localStorage.setItem("danhBa", JSON.stringify(getDanhBa)); /// Cập nhật mảng mới nhất dã được thêm lên LS

  return data;
}


function readContact() {
  let getDanhBa = JSON.parse(localStorage.getItem("danhBa")); /// Lấy dữ liệu từ LS về
  for (let key of getDanhBa) {
    console.log(`${key.name}: ${key.phoneNumber}`);
  }
}

function updateContact() {
  let getDanhBa = JSON.parse(localStorage.getItem("danhBa")); /// Lấy dữ liệu từ LS về
  let nameUpdate = prompt("Mời người dùng nhập vào tên danh bạ muốn update").trim();

  let viTriDanhBaCanUpdate;

  for (let key in getDanhBa) {
    if (getDanhBa[key].name == nameUpdate) {
      viTriDanhBaCanUpdate = key
    }
  }

  getDanhBa[viTriDanhBaCanUpdate] = createContact();

  localStorage.setItem("danhBa", JSON.stringify(getDanhBa));
}