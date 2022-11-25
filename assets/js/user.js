//Tài Khoản Admin---------------------------------------------------------------------------------------------------------------------------------------------------------------------
var adminTk = "Admin";
var adminMk = "1111";

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
({
    plugin: ['jsdom-quokka-plugin'],
    jsdom: 
    {
        file: "do_an.html"
    }
})
//bỏ cái ở trên


let slash = document.getElementsByClassName("slash");
let password_input = document.getElementsByClassName("password");
const see_hide = document.getElementsByClassName("place");
const exits = document.getElementsByClassName("exit");
let form_1 = document.getElementById("sign_up").style.zIndex, form_2 = document.getElementById("sign_in").style.zIndex; 


function moDangKy() {
    document.getElementById("sign_up").style.zIndex = 1;
}

function dongDangKy() {
    document.getElementById("sign_up").style.zIndex = -1;      
    for (let i = 0; i < password_input.length; i++) {
        if ( password_input[i].type === "text")
        {
            password_input[i].type = "password";
            slash[i].style.zIndex = 1;
        }
    }
    var formElement = document.getElementById("sign_up");
    var inputElement = formElement.querySelectorAll(".input_form");
    for (let index = 0; index < inputElement.length; index++) {
        inputElement[index].value = "";            
    }
}

function moDangNhap() {
    document.getElementById("sign_in").style.zIndex = 1;
}

function dongDangNhap() {
    document.getElementById("sign_in").style.zIndex = -1;
    var formElement = document.getElementById("sign_in");
    var inputElement = formElement.querySelectorAll(".input_form");
    for (let index = 0; index < inputElement.length; index++) {
        inputElement[index].value = "";            
    }
}


for (let i = 0; i < see_hide.length; i++)
    see_hide[i].onclick = () =>
    {
        if ( password_input[i].type === "password")
        {
            password_input[i].type = "text";
            slash[i].style.zIndex = -1;
        }
        else
        {
            password_input[i].type = "password";
            slash[i].style.zIndex = 1;
        }
        password_input[i].focus();
    }

	

    function dangKy() {
        var formElement = document.getElementById("sign_up");
        var inputElement = formElement.querySelectorAll(".input_form");
        var matkhau = document.getElementById("password_1");
        var nhaplaimk = document.getElementById("password_2");
        // kiểm tra bỏ trống thông tin
        for (let index = 0; index < inputElement.length; index++) {
            if  (inputElement[index].value === "") {
                if (inputElement[index].parentElement.className === "see_hide_pass") {
                    inputElement[index].parentElement.parentElement.querySelector(".error-message").innerText = `Vui lòng nhập ${inputElement[index].name}`;
                    inputElement[index].parentElement.parentElement.querySelector(".error-message").style.color = "red";
                    inputElement[index].focus();
                    return false;
                }
                else {
                    inputElement[index].parentElement.querySelector(".error-message").innerText = `Vui lòng nhập ${inputElement[index].name}`;
                    inputElement[index].parentElement.querySelector(".error-message").style.color = "red";
                    inputElement[index].focus();
                    return false;
                }
            }
            else if (matkhau.value !== nhaplaimk.value) {
                nhaplaimk.parentElement.parentElement.querySelector(".error-message").innerText = `Nhập đúng mật khẩu vừa đặt`;
                nhaplaimk.parentElement.parentElement.querySelector(".error-message").style.color = "red";
                matkhau.parentElement.parentElement.querySelector(".error-message").innerText = "";
                nhaplaimk.focus();
                return false;
            }
            else {
                if (inputElement[index].parentElement.className === "see_hide_pass") {
                    inputElement[index].parentElement.parentElement.querySelector(".error-message").innerText = "";
                }
                else {
                    inputElement[index].parentElement.querySelector(".error-message").innerText = "";
                }
                
            }
        }

        // xử lý đăng ký thành công ==> lưu tài khoản vào localStorage
        var hoten = document.getElementById("hoten");
        var email = document.getElementById("email");
        var sdt = document.getElementById("sdt");

        var listTaiKhoan = localStorage.getItem("listTaiKhoan") ? JSON.parse(localStorage.getItem("listTaiKhoan")) : [];
        var listGioHang = localStorage.getItem("listGioHang") ? JSON.parse(localStorage.getItem("listGioHang")) : [];
        var listDonHang = localStorage.getItem("listDonHang") ? JSON.parse(localStorage.getItem("listDonHang")) : [];
    
        // kiểm tra trùng thông tin đăng ký
        var tonTai = false;
        if(listTaiKhoan != []) {
            for (var i = 0; i < listTaiKhoan.length;i++) {
                if(listTaiKhoan[i].hoten === hoten.value ) {
                    tonTai = true;
                    hoten.parentElement.querySelector(".error-message").innerText = "Họ tên này đã tồn tại";
                    hoten.parentElement.querySelector(".error-message").style.color = "red";
                    hoten.focus();
                    return false;
    
                } else if (listTaiKhoan[i].email === email.value) {
                    tonTai = true;
                    email.parentElement.querySelector(".error-message").innerText = "Email này đã tồn tại";
                    email.parentElement.querySelector(".error-message").style.color = "red";
                    email.focus();
                    return false;
                } else if (listTaiKhoan[i].sdt === sdt.value) {
                    tonTai = true;
                    sdt.parentElement.querySelector(".error-message").innerText = "Số điện thoại này đã tồn tại";
                    sdt.parentElement.querySelector(".error-message").style.color = "red";
                    sdt.focus();
                    return false;
                } else if (listTaiKhoan[i].matkhau === matkhau.value) {
                    tonTai = true;
                    matkhau.parentElement.parentElement.querySelector(".error-message").innerText = "Mật khẩu này đã tồn tại";
                    matkhau.parentElement.parentElement.querySelector(".error-message").style.color = "red";
                    matkhau.focus();
                    return false;
                }
                else {
                    hoten.parentElement.querySelector(".error-message").innerText = "";
                    sdt.parentElement.querySelector(".error-message").innerText = "";
                    email.parentElement.querySelector(".error-message").innerText = "";
                    matkhau.parentElement.parentElement.querySelector(".error-message").innerText = "";
                    nhaplaimk.parentElement.parentElement.querySelector(".error-message").innerText = "";
                }
            }
        }
        // nếu không bị trùng thông tin đăng ký
        if (tonTai == false) {
            listTaiKhoan.push({
            hoten: hoten.value,
            sdt: sdt.value,
            email: email.value,
            matkhau: matkhau.value,
        })
        localStorage.setItem("listTaiKhoan", JSON.stringify(listTaiKhoan));
        alert("Đăng Ký thành công!");
    
        // khi tạo tài khoản ==> tạo luôn kho lưu trữ giỏ hàng cho khách
        listGioHang.push({
            name: hoten.value,
            sdt: sdt.value,
            email: email.value,
            matkhau: matkhau.value,
            giohang: [],
        })
        localStorage.setItem("listGioHang", JSON.stringify(listGioHang));
    
    
        listDonHang.push({
            name: hoten.value,
            sdt: sdt.value,
            email: email.value,
            matkhau: matkhau.value,
            donhang: [],
        })
        localStorage.setItem("listDonHang", JSON.stringify(listDonHang));
        }
        dongDangKy();
    }
    
    function dangNhap() {
        var taikhoan = document.getElementById("taiKhoan").value;
        var matkhau = document.getElementById("password_3").value;
        var listTaiKhoan = localStorage.getItem("listTaiKhoan") ? JSON.parse(localStorage.getItem("listTaiKhoan")) : [];
        var check = false;
        for (let index = 0; index < listTaiKhoan.length; index++) {
            if ((listTaiKhoan[index].sdt === taikhoan || listTaiKhoan[index].email === taikhoan) && listTaiKhoan[index].matkhau === matkhau) {
                check = true;
                break;
            }
        }

        // Kiểm tra tài khoản đã tồn tại hay chưa
    
        // tài khoản đã tồn tại
        if (check) {
            document.getElementById("password_3").parentElement.parentElement.querySelector(".error-message").innerText = "";
            alert("Đăng nhập thành công");
            dongDangNhap();
    
            var listTaiKhoan = localStorage.getItem("listTaiKhoan") ? JSON.parse(localStorage.getItem("listTaiKhoan")) : [];
            var hoten,sdt,email;
            for (const tk of listTaiKhoan) {
                if (tk.matkhau === matkhau) {
                        hoten = tk.hoten;
                        sdt = tk.sdt;
                        email = tk.email;
                }
            }
            // khi đã đăng nhập vào thì thay Đăng nhập ==> Đăng xuất
            document.getElementById("Dang_nhap").outerHTML = `
            <div id="Dang_xuat" onclick="dangXuat();">
            <i class="fas fa-sign-in-alt"></i>
            <a href="#">Đăng Xuất</a>
            </div>`;
    
            // In thông tin khách hàng
            document.getElementById("Dang_ky").style.display = 'none';
            document.getElementById("user").style.display = "block";
            document.getElementById("user").innerHTML = `
                <i class="fas fa-user"></i>
                <a href="#">${hoten}</a>
                <div id="infomation">
                    <p>Họ tên: <span id="show-hoten">${hoten}</span></p>
                    <p>Số điện thoại: <span id="show-sdt">${sdt}</span></p>
                    <p>Email: <span id="show-taikhoan">${email}</span></p>
                    <p>Mật Khẩu: <span id="show-matkhau">${matkhau}</span></p>
                </div>`;
    
            // show Đơn hàng đã đặt
            document.getElementById("order").style.display = "block";
            // cập nhật giỏ hàng cho khách hàng (lưu lại giỏ hàng của khách khi thoát)  
            var listGioHang = JSON.parse(localStorage.getItem("listGioHang"));
            var stt = 0;
            var s = "";
            var tongtien = 0;
            for (const a of listGioHang) {
                if (a.matkhau === matkhau) {
                    for (const b of a.giohang) {
                        s += `            
                        <tr class="sanPham">
                            <td class="stt">${++stt}</td>
                            <td><img class="hinh" src=${b.img}></td>
                            <td class="cotTen">${b.nameProduct}</td>
                            <td class="donGia">${b.price}đ</td>
                            <td class="soLuong">${b.quantity}</td>
                            <td class="thanhTien">${b.money}đ</td>
                            <td>
                                <button onclick="deleteProduct(this);">Delete</button>
                            </td>
                        </tr>`;
                        tongtien += parseInt(b.money);
                    }
                    document.getElementById("showShopTable").innerHTML = s;
                }
            }
            console.log(stt);
            document.getElementById("quantity").innerText = stt;
            document.getElementById("tongTien").innerText = `${tongtien}đ`;
        }
        // tài khoản chưa tồn tại
        else {
            document.getElementById("password_3").parentElement.parentElement.querySelector(".error-message").innerText = "Tài khoản không tồn tại. Vui lòng đăng ký!";
            document.getElementById("password_3").parentElement.parentElement.querySelector(".error-message").style.color = "red";
        }
    
        // tài khoản đặc biệt (admin) ==> dẫn tới trang admin
        if (taikhoan === adminTk && matkhau === adminMk) {
            window.location.href = "http://127.0.0.1:5500/admin.html";
        }
    }
    
    
    var click = false;
    function showInfo() {
        if (!click) {
            document.getElementById("infomation").style.display = "block";
            click = true;
        }
        else {
            document.getElementById("infomation").style.display = "none";
            click = false;
        }
    }

    click = false;
    function showOrder() {
    if (!click) {
        document.getElementById("main-order").style.display = "block";
        click = true;
        inDonHang();
    }
    else {
        document.getElementById("main-order").style.display = "none";
        click = false;
    }
}
    
    
    function dangXuat() {
        document.getElementById("user").innerHTML = "";
        document.getElementById("user").style.display = "none";
        document.getElementById("order").style.display = "none";
        document.getElementById("Dang_ky").style.display = 'block';
        document.getElementById("Dang_xuat").outerHTML = `
        <div id="Dang_nhap" onclick="moDangNhap()">
        <i class="fas fa-sign-in-alt"></i>
        <a href="#">Đăng nhập</a>
        </div>`
    
        // document.getElementById("quantity").innerText = 0;
        // document.getElementById("tongTien").innerHTML = `0đ`;
        // var display = document.getElementById("showShop").style.display;
        // if (display === "block") {
        //     document.getElementById("showShop").style.display = "none";
        //     console.log(document.getElementById("showShop").style.display);
        // }
        // document.getElementById("order").style.display = "none";
    
    }
    
    












    

























// 		Code slider			
const right = document.querySelector(".next");
const left = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//			Next			//
right.addEventListener("click", () => {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//			Previous			//
left.addEventListener("click", () => {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});



			//		 Hiện màu tab + Chuyển tab		//
		const $ = document.querySelector.bind(document);
		const $$ = document.querySelectorAll.bind(document);

		const tabs = $$(".tab-item");
		const contents = $$(".content");

		tabs.forEach((tab, index) => {
			const content2 = contents[index]
			
			tab.onclick = function () {
				$('.tab-item.active').classList.remove('active')
				$('.content.active').classList.remove('active')
				
				this.classList.add('active')
				content2.classList.add('active')
			}
		})

		// 			Container			//