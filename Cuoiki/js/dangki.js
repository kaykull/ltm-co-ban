//lay ra input co id la submit
const sign = document.getElementById("sign");

//tao 1 class co ten la Account va co 6 truong du lieu va 1 constructor
class Account {
    radio;
    ten;
    tendem;
    email;
    password;
    cfpass;
    constructor(radio, ten, tendem, email, password, cfpass) {
        this.radio = radio;
        this.ten = ten;
        this.tendem = tendem;
        this.email = email;
        this.password = password;
        this.cfpass = cfpass;
    }

}
let listAccount = []; // tao 1 mang Account
let count =0; // tao bien dem =0

//tao su kien click vao submit
sign.addEventListener("click", () => {
    const radio = document.getElementById("radio").value; // lay ra du lieu nguoi nhap trong o input co id la title
    const ten = document.getElementById("ten").value; // lay ra du lieu nguoi nhap trong o input co id la firstName
    const tendem = document.getElementById("tendem").value; // lay ra du lieu nguoi nhap trong o input co id la lastName
    const email = document.getElementById("email").value; // lay ra du lieu nguoi nhap trong o input co id la email
    const password = document.getElementById("password").value; // lay ra du lieu nguoi nhap trong o input co id la password
    const cfpass = document.getElementById("cfpass").value; // lay ra du lieu nguoi nhap trong o input co id la confirmPassword
    const box1 = document.getElementById("checkbox").checked; // lay ra du lieu nguoi nhap co tich vao checkbox co id la checkBox
    if (window.sessionStorage.getItem("BreguetAccounts") != null) { // kiem tra xem sessionStorage co key la BreguetAccounts co null khong neu khong thi
        listAccount= JSON.parse(window.sessionStorage.getItem("BreguetAccounts"));  // gan listAccount = du lieu ben trong sessionStorage co key la BreguetAccounts
        window.sessionStorage.removeItem("BreguetAccounts"); // xoa item trong session co key la BreguetAccounts
        count = listAccount.length; // gan count  = do dai cua listAccount
    }
    if (box1 && (email !== "") && (password !== "") && (password === cfpass)) { // kiem tra nguoi dung da nhap du thong tin chua
        listAccount[count] = new Account(radio,ten,tendem,email,password,cfpass); // them 1 tai khoan moi vao mang tai khoan
        count++; // tang bien count
        let accountJsonStr = JSON.stringify(listAccount); //chuyen mang thanh chuoi json
        window.sessionStorage.setItem("BreguetAccounts", accountJsonStr); // add chuoi json vao sessionstorage
        console.log(accountJsonStr);
        alert("Register successful!");//thong bao thanh cong
        window.location.href = "dangnhap.html"; // chuyen nguoi dung den trang dang nhap
    } else {
        alert("Register Fail! Please input correct value!"); //thong bao that bai
        let accountJsonStr = JSON.stringify(listAccount);
        window.sessionStorage.setItem("BreguetAccounts", accountJsonStr); //add chuoi json vao sessionstorage tro lai
    }
});