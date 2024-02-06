//// Cú pháp lưu trữ với LocalStorage

// let a = "Hello World!!";
// localStorage.setItem("a", a);

// let b = 123456;
// localStorage.setItem("b", b);



// //// Cú pháp truy vấn dữ liệu với LS
// console.log(
//   localStorage.getItem("a")
// );

// console.log(
//   localStorage.getItem("b")
// );


////////// Cú pháp chuẩn: Ép kiểu dữ liệu trước về String => lưu trữ với LS
let a = 123456;
localStorage.setItem("a", JSON.stringify(a));

///// truy vấn dữ liệu từ LS với cú pháp chuẩn
console.log(
  JSON.parse(localStorage.getItem("a"))
);


////// Lưu trữ mảng thì sao
let arr = [1, 2, 3, 4, "Hello", "hi", true, false, { name: "Hiếu", age: 26 }];
////// Lưu trữ với LS
localStorage.setItem("arr", JSON.stringify(arr));

///// lấy về với cú pháp chuẩn
console.log(
  JSON.parse(localStorage.getItem("arr"))
);


let danhBa = [
  {
    name: "Hieu",
    phone: "123456",
    email: "hieu@gmail.com"
  },

]

