Lý thuyết buổi 1

git clone: sao chép folder trên github về máy tính (".git")
.git: Tất cả folder hoặc file ở cạnh => được gửi lên trên foldẻ github

KDL:

1. Number: 0->9
2. String: Chuỗi "", '', ``
3. Null: Rỗng
4. Boolean: true/false
5. Object: {}
6. Undefined: khi khai báo biến không gán giá trị

câu điều kiện
if(<điều kiện>){
....
}
else if(<điều kiện>){
....
}
else{
.....
}

Đề bài: Nhập vào biến điểm: 0 -> 10. Xây dựng điều kiện kiểm tra học lực học sinh như sau:

1. 8.0 -> 10: Học sinh giỏi
2. 6.5 -> 8.0: Học sinh khá
3. 5 -> 6.5: Học sinh trung bình
4. 0 -> 5: Học sinh kém

let diem = Number(prompt("Mời người dùng nhập vào điểm số"));
console.log(diem);

if(diem >=8){
console.log(...);
}
else if(diem >=6.5 && diem <8.0){

}
