const login = document.getElementById("login");// lay ra button voi id la login
// tao su kien click vao button de dang nhap
login.addEventListener("click", () => {
    let listAccount = JSON.parse(window.sessionStorage.getItem("BreguetAccounts")); // lay lai danh sach tai khoan tren session co key la BreguetAccounts
    const email = document.getElementById("email").value; // lay du lieu dia chi email nguoi dung nhap
    const password = document.getElementById("password").value;// lay du lieu mat khau password nguoi dung nhap
    console.log(listAccount);
    if (listAccount == null) {// neu danh sach tai khoan trong thi tra ve nhap sai
        alert("Incorrect email or password!");// thong bao nhap sai
    }else {
        //neu nhap dung thi thong bao roi chuyen nguoi dung den trang Home.html
        let isLogin = false;
        for (let i = 0 ; i < listAccount.length ; i++)  {
            let  account = listAccount[i];
            if (account.email === email && account.password === password)  {
                isLogin = true;
                window.sessionStorage.setItem("account",JSON.stringify(account));
            }
        }
        if (isLogin) {
            alert("Login successful!");
            window.location.href = "index.html";
        }else {
            alert("Incorrect email or password!");
        }
    }
});
