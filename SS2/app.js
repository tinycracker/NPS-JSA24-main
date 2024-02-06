// while (1 < 2) {
//   console.log("Vòng lặp chạy");
// }

///////// Đề bài: in ra các số từ 1 => 10 trong màn hình console
// let i = 1;
// while (i <= 10) {
//   console.log(i); /// 1, 2...,9,10,
//   i = i + 1;
// }


////// Code do while: Dùng khi cần chạy trước khối lệnh lặp
// let i = 1;
// do {
//   console.log(i);/// 1
//   i = i + 1; // i++; 
// }
// while (i <= 10);


////// VD với vòng lặp for

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


///////// Array: Mảng

////////// Khai báo mảng
//// C1:
// let arr = [1, "hello", 'hi'];

//// C2:
// let arr1 = new Array();


///// Kiểm tra kiểu dữ liệu mảng
// console.log(
//   Array.isArray(arr)
// );

//// In ra phần tử mảng
// console.log(arr[1]);

////// Số lượng phần tử trong mảng
// console.log(
//   arr.length
// );


////// Thêm phần tử vào cuối danh sách;
// arr.push("Phần tử được thêm 1", "Phần tử thêm 2");
// console.log("arr: ", arr);


//// Xóa phần tử cuối cùng danh sách
// arr.pop();


//// Thêm phần tử vào đầu danh sách
// arr.unshift("Phần tử thêm vào đầu danh sách");

////// Xóa phần tử đầu tiên trong danh sách
// arr.shift();

/////// Method splice
/*
arr.splice(box1, box2, box3);
box1: Vị trí phần tử
box2: Xóa ? phần tử kể từ vị trí box1
box3: Thêm phần tử kể từ vị trí box1
*/

// console.log("arr", arr);

// ///// Xóa phần tử ở vị trí thứ 3
// arr.splice(3, 1);
// console.log(arr);



/////// Ví dụ minh họa duyệt mảng => Sử dụng vòng lặp để duyệt mảng
// let arr = [1, 2, 3, 4, 5, 6, 7];

//// in ra các phần tử mảng lên màn hình console
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }




////// Object
//// khai báo:
let obj = {
  name: "Hiếu",
  age: 26,
  job: "Web Developer",

  dev() {
    return "HTML CSS JS"
  }
}

///// Thêm thuộc tính vào đối tượng
obj.hobbies = ["dev", "reading book", "Cooking"];

//// Thêm phương thức vào đối tượng
obj.fixbug = function () {
  return "Execute Code"
}

//// Duyệt đối tượng
for (let key in obj) {
  console.log(key); /// In ra các khóa của đối tượng
}


//// Update thuộc tính/ phương thức
obj.age = 27;


/// Delete thuộc tính/phương thức;
delete obj.name;