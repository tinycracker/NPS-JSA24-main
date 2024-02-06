let diem = Number(prompt("Mời người dùng nhập vào điểm số"));
console.log(diem);

if (diem >= 8) {
  console.log("Học sinh giỏi");
}
else if (diem >= 6.5 && diem < 8.0) {
  console.log("Học sinh khá");
}
else if (diem >= 5 && diem < 6.5) {
  console.log("Học sinh trung bình");
}
else {
  console.log("Học sinh kém");
}