//Tài Khoản Admin---------------------------------------------------------------------------------------------------------------------------------------------------------------------
var adminTk = "admin";
var adminMk = "1111";

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
({
    plugin: ["jsdom-quokka-plugin"],
    jsdom: {
        file: "do_an.html",
    },
});
//bỏ cái ở trên

let slash = document.getElementsByClassName("slash");
let password_input = document.getElementsByClassName("password");
const see_hide = document.getElementsByClassName("place");
const exits = document.getElementsByClassName("exit");
let form_1 = document.getElementById("sign_up").style.zIndex,
    form_2 = document.getElementById("sign_in").style.zIndex;

function moDangKy() {
    document.getElementById("sign_up").style.display = "block";
}

function dongDangKy() {
    document.getElementById("sign_up").style.display = "none";
    for (let i = 0; i < password_input.length; i++) {
        if (password_input[i].type === "text") {
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
    document.getElementById("sign_in").style.display = "block";
}

function dongDangNhap() {
    document.getElementById("sign_in").style.display = "none";
    var formElement = document.getElementById("sign_in");
    var inputElement = formElement.querySelectorAll(".input_form");
    for (let index = 0; index < inputElement.length; index++) {
        inputElement[index].value = "";
    }
}

for (let i = 0; i < see_hide.length; i++)
    see_hide[i].onclick = () => {
        if (password_input[i].type === "password") {
            password_input[i].type = "text";
            slash[i].style.zIndex = -1;
        } else {
            password_input[i].type = "password";
            slash[i].style.zIndex = 1;
        }
        password_input[i].focus();
    };

function dangKy() {
    var formElement = document.getElementById("sign_up");
    var inputElement = formElement.querySelectorAll(".input_form");
    var matkhau = document.getElementById("password_1");
    var nhaplaimk = document.getElementById("password_2");
    // kiểm tra bỏ trống thông tin
    for (let index = 0; index < inputElement.length; index++) {
        if (inputElement[index].value === "") {
            if (inputElement[index].parentElement.className === "see_hide_pass") {
                inputElement[index].parentElement.parentElement.querySelector(
                    ".error-message"
                ).innerText = `Vui lòng nhập ${inputElement[index].name}`;
                inputElement[index].parentElement.parentElement.querySelector(
                    ".error-message"
                ).style.color = "red";
                inputElement[index].focus();
                return false;
            } else {
                inputElement[index].parentElement.querySelector(
                    ".error-message"
                ).innerText = `Vui lòng nhập ${inputElement[index].name}`;
                inputElement[index].parentElement.querySelector(
                    ".error-message"
                ).style.color = "red";
                inputElement[index].focus();
                return false;
            }
        } else if (matkhau.value !== nhaplaimk.value) {
            nhaplaimk.parentElement.parentElement.querySelector(
                ".error-message"
            ).innerText = `Nhập đúng mật khẩu vừa đặt`;
            nhaplaimk.parentElement.parentElement.querySelector(
                ".error-message"
            ).style.color = "red";
            matkhau.parentElement.parentElement.querySelector(
                ".error-message"
            ).innerText = "";
            nhaplaimk.focus();
            return false;
        } else {
            if (inputElement[index].parentElement.className === "see_hide_pass") {
                inputElement[index].parentElement.parentElement.querySelector(
                    ".error-message"
                ).innerText = "";
            } else {
                inputElement[index].parentElement.querySelector(
                    ".error-message"
                ).innerText = "";
            }
        }
    }

    // xử lý đăng ký thành công ==> lưu tài khoản vào localStorage
    var hoten = document.getElementById("hoten");
    var email = document.getElementById("email");
    var sdt = document.getElementById("sdt");

    var listTaiKhoan = localStorage.getItem("listTaiKhoan") ?
        JSON.parse(localStorage.getItem("listTaiKhoan")) : [];
    var listGioHang = localStorage.getItem("listGioHang") ?
        JSON.parse(localStorage.getItem("listGioHang")) : [];
    var listDonHang = localStorage.getItem("listDonHang") ?
        JSON.parse(localStorage.getItem("listDonHang")) : [];

    // kiểm tra trùng thông tin đăng ký
    var tonTai = false;
    if (listTaiKhoan != []) {
        for (var i = 0; i < listTaiKhoan.length; i++) {
            if (listTaiKhoan[i].hoten === hoten.value) {
                tonTai = true;
                hoten.parentElement.querySelector(".error-message").innerText =
                    "Họ tên này đã tồn tại";
                hoten.parentElement.querySelector(".error-message").style.color = "red";
                hoten.focus();
                return false;
            } else if (listTaiKhoan[i].email === email.value) {
                tonTai = true;
                email.parentElement.querySelector(".error-message").innerText =
                    "Email này đã tồn tại";
                email.parentElement.querySelector(".error-message").style.color = "red";
                email.focus();
                return false;
            } else if (listTaiKhoan[i].sdt === sdt.value) {
                tonTai = true;
                sdt.parentElement.querySelector(".error-message").innerText =
                    "Số điện thoại này đã tồn tại";
                sdt.parentElement.querySelector(".error-message").style.color = "red";
                sdt.focus();
                return false;
            } else if (listTaiKhoan[i].matkhau === matkhau.value) {
                tonTai = true;
                matkhau.parentElement.parentElement.querySelector(
                    ".error-message"
                ).innerText = "Mật khẩu này đã tồn tại";
                matkhau.parentElement.parentElement.querySelector(
                    ".error-message"
                ).style.color = "red";
                matkhau.focus();
                return false;
            } else {
                hoten.parentElement.querySelector(".error-message").innerText = "";
                sdt.parentElement.querySelector(".error-message").innerText = "";
                email.parentElement.querySelector(".error-message").innerText = "";
                matkhau.parentElement.parentElement.querySelector(
                    ".error-message"
                ).innerText = "";
                nhaplaimk.parentElement.parentElement.querySelector(
                    ".error-message"
                ).innerText = "";
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
        });
        localStorage.setItem("listTaiKhoan", JSON.stringify(listTaiKhoan));
        alert("Đăng Ký thành công!");

        // khi tạo tài khoản ==> tạo luôn kho lưu trữ giỏ hàng cho khách
        listGioHang.push({
            name: hoten.value,
            sdt: sdt.value,
            email: email.value,
            matkhau: matkhau.value,
            giohang: [],
        });
        localStorage.setItem("listGioHang", JSON.stringify(listGioHang));

        listDonHang.push({
            name: hoten.value,
            sdt: sdt.value,
            email: email.value,
            matkhau: matkhau.value,
            donhang: [],
        });
        localStorage.setItem("listDonHang", JSON.stringify(listDonHang));
    }
    dongDangKy();
}

function dangNhap() {
    var taikhoan = document.getElementById("taiKhoan").value;
    var matkhau = document.getElementById("password_3").value;
    var listTaiKhoan = localStorage.getItem("listTaiKhoan") ?
        JSON.parse(localStorage.getItem("listTaiKhoan")) : [];
    var check = false;
    for (let index = 0; index < listTaiKhoan.length; index++) {
        if (
            (listTaiKhoan[index].sdt === taikhoan ||
                listTaiKhoan[index].email === taikhoan) &&
            listTaiKhoan[index].matkhau === matkhau
        ) {
            check = true;
            break;
        }
    }

    // Kiểm tra tài khoản đã tồn tại hay chưa

    // tài khoản đã tồn tại
    if (check) {
        document
            .getElementById("password_3")
            .parentElement.parentElement.querySelector(".error-message").innerText =
            "";
        alert("Đăng nhập thành công");
        dongDangNhap();

        var listTaiKhoan = localStorage.getItem("listTaiKhoan") ?
            JSON.parse(localStorage.getItem("listTaiKhoan")) : [];
        var hoten, sdt, email;
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
        document.getElementById("Dang_ky").style.display = "none";
        document.getElementById("user").style.display = "block";
        document.getElementById("user").innerHTML = `
                <i class="fas fa-user"></i>
                <a href="#">${hoten}</a>
                <div id="infomation">
                    <p>Họ tên: <span id="show-hoten">${hoten}</span></p>
                    <p>Số điện thoại: <span class="show-sdt show-taikhoan">${sdt}</span></p>
                    <p>Email: <span class="show-taikhoan show-email">${email}</span></p>
                    <p style="display:none">Mật Khẩu: <span id="show-matkhau">${matkhau}</span></p>
                </div>`;

        // show Đơn hàng đã đặt
        document.getElementById("order").style.display = "block";
        // cập nhật giỏ hàng cho khách hàng (lưu lại giỏ hàng của khách khi thoát)
        var listGioHang = JSON.parse(localStorage.getItem("listGioHang"));
        var stt = 0;
        var s = "";
        var priceVND;
        var thanhTienVND;
        var tongtien = 0;
        for (const a of listGioHang) {
            if (a.matkhau === matkhau) {
                for (const b of a.giohang) {
                    priceVND = new Intl.NumberFormat("VietNam-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(b.price);
                    thanhTienVND = new Intl.NumberFormat("VietNam-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(b.money);
                    s += `
                        <tr class="sanPham">
                            <td class="stt">${++stt}</td>
                            <td><img class="hinh" src=${b.img}></td>
                            <td class="cotTen">${b.nameProduct}</td>
                            <td class="soLuong">${b.quantity}</td>
                            <td class="mauSac">${b.color}</td>
                            <td class="Size">${b.size}</td>
                            <td class="donGiaVND">${priceVND}</td>
                            <td class="donGia" style="display:none">${b.price}</td>
                            <td class="thanhTienVND">${thanhTienVND}</td>
                            <td class="thanhTien" style="display:none">${b.money}</td>
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
        document.getElementById("tongTien").innerText = tongtien;
        document.getElementById("tongTienVND").innerText =
            new Intl.NumberFormat("VietNam-VN", {
                style: "currency",
                currency: "VND",
            }).format(tongtien); // Format VNĐ;
    }
    // tài khoản đặc biệt (admin) ==> dẫn tới trang admin
    else if (taikhoan === adminTk && matkhau === adminMk) {
        alert("Đăng nhập thành công");
        dongDangNhap();
        window.location.href = "http://127.0.0.1:5500/admin.html";
    }
    // tài khoản chưa tồn tại
    else {
        document
            .getElementById("password_3")
            .parentElement.parentElement.querySelector(".error-message").innerText =
            "Tài khoản không tồn tại. Vui lòng đăng ký!";
        document
            .getElementById("password_3")
            .parentElement.parentElement.querySelector(".error-message").style.color =
            "red";
    }

}

var click = false;

function showInfo() {
    if (!click) {
        document.getElementById("infomation").style.display = "block";
        click = true;
    } else {
        document.getElementById("infomation").style.display = "none";
        click = false;
    }
}



function dangXuat() {
    document.getElementById("user").innerHTML = "";
    document.getElementById("user").style.display = "none";
    document.getElementById("order").style.display = "none";
    document.getElementById("Dang_ky").style.display = "block";
    document.getElementById("Dang_xuat").outerHTML = `
        <div id="Dang_nhap" onclick="moDangNhap()">
        <i class="fas fa-sign-in-alt"></i>
        <a href="#">Đăng nhập</a>
        </div>`;

    document.getElementById("quantity").innerText = 0;
    document.getElementById("tongTien").innerHTML = `0đ`;
    var display = document.getElementById("showShop").style.display;
    if (display === "block") {
        document.getElementById("showShop").style.display = "none";
        console.log(document.getElementById("showShop").style.display);
    }
    document.getElementById("order").style.display = "none";
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

    if (slideNumber > numberOfSlides - 1) {
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

//					 Hiện hiệu ứng màu chuyển tab, Chuyển tab: ham hienThi
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");

// const contents = $$(".content");

tabs.forEach((tab, index) => {
    // const content2 = contents[index]

    tab.onclick = function() {
        $(".tab-item.active").classList.remove("active");
        // $('.content.active').classList.remove('active')

        this.classList.add("active");
        // content2.classList.add('active')
    };
});


var mang = [];

function hienThi(obJ) {
    var a = obJ;
    switch (a.id) {
        case "Trangchu":
            {
                s = `
                    <div class="all-content">
                    <div class="content">
					<div class="slider">
						<!--	 Banner		 -->
						<div class="slide active">
							<img src="/assets/img/Slider/Nike.png" alt="">
						</div>
						<div class="slide">
							<img src="/assets/img/Slider/Adidas.png" alt="">
						</div>
						<!--	 End---Banner---End		 -->
						<!--	 Phím trái phải		 -->
						<div class="left-right">
							<i class="fa-solid fa-chevron-left prev"></i>
							<i class="fa-solid fa-chevron-right next"></i>
						</div>
						<!--	 End---Phím trái phải---End		 -->
						<!--	 Vị trí trang banner		 -->
						<div class="slide-mark">
							<div class="slide-icon active"></div>
							<div class="slide-icon"></div>
						</div>
						<!--	End--- Vị trí trang banner---End		 -->
					</div>
					<div class="information">
						<li>
							<div class="info">
								<i class="fa-solid fa-money-bill"></i>
								<h1>Thanh toán</h1>
								<p>Linh hoạt với nhiều cách thức giao dịch khác nhau.
								</p>
							</div>
						</li>
						<li>
							<div class="info">
								<i class="fa-solid fa-truck-fast"></i>
								<h1>Giao hàng</h1>
								<p>Đóng gói kĩ càng, bảo quản tốt, giao hàng tận nơi với thời gian nhanh nhất có thể.
								</p>
							</div>
						</li>
						<li>
							<div class="info">
								<i class="fa-solid fa-hand-holding-hand"></i>
								<h1>Bảo hành</h1>
								<p>Đổi hàng, trả hàng khi nhận được hàng không mong muốn.
								</p>
							</div>
						</li>
					</div>
                    <div class="information-main">
                        <div class="information">
                            <h2 class="gioiThieu">BÁN GIÀY THỂ THAO SNEAKER CHÍNH HÃNG TẠI TPHCM - SneakerShop GIỚI THIỆU
                            </h2>
                            <p class="gioiThieu"> Nỗi sợ vì mua phải giày kém chất lượng, giày fake, từ nay không còn lo
                                lắng nữa vì đã có #SneakerShop.VN: hàng chính hãng nhập trực tiếp từ US, fullbox, nguyên
                                tem.</p>
                            </p>
                            <p>✓ 15 Ngày Đổi Hàng ✓ Giao Hàng Miễn Phí ✓ Thanh Toán Khi Nhận Hàng ✓ Bảo Hành Hàng Chính Hãng
                            </p>
                            <span class="gioiThieu">Đến với "SneakerShop.VN” quý khách hàng sẽ có những sản phẩm ưng ý nhất,
                                chất lượng phục vụ tốt và giá thành tốt nhất, cùng những “ Chương Trình Khuyến Mãi Đặc
                                Biệt”.</p>
                            <p class="gioiThieu">Tìm được cửa hàng giày khiến mình an tâm rất khó luôn đó mọi người ơi. Hổng
                                nói nổi vui như nào khi gặp được SneakerShop luôn á,
                                Sản phẩm chất lượng mà các dịch vụ đi kèm hấp dẫn nữa. Dân mê giày làm sao cưỡng lại
                                KINGSHOES đây!</p>
                            <img class="gioiThieu" src="/assets/img/GioiThieu/1.jpg" alt="">
                            <p class="gioiThieu">Cửa Hàng Bán Giày Sneaker Chính Hãng Tại HCM - SneakerShop Giới thiệu</p>
                            <img class="gioiThieu" src="/assets/img/GioiThieu/2.Jpg" alt="">
                            <h2 class="gioiThieu"> SneakerShop CHUẨN GIÀY REAL - DEAL SIÊU KHỦNG</h2>
                            <p class="gioiThieu"> Cửa Hàng KING SHOES là một trong những nơi sưu tầm có khối lượng giày hiếm
                                siêu khủng. Có những mẫu giày cực kì hype được giới sưu tầm săn lùng
                                , thậm chí bạn sẽ bắt gặp nhiều mẫu lạ mới mà hiếm shop nào có. Có những mẫu chỉ có độc nhất
                                1 đôi.
                                Ngoài ra những mẫu đang rất HOT trên thị trường sneaker về liên tục nên các bạn cứ yên tâm
                                không sợ hết hàng.</p>
                            <img class="gioiThieu" src="/assets/img/GioiThieu/3.Jpg" alt="">
                            <p class="gioiThieu">Cửa Hàng Bán Giày Sneaker Chính Hãng Tại HCM - SneakerShop Giới thiệu</p>
                            <img class="gioiThieu" src="/assets/img/GioiThieu/4.Jpg" alt="">
                            <p class="gioiThieu"> Cửa Hàng Bán Giày Sneaker Adidas, Jordan Chính Hãng tại tp.HCM 100%
                                Authentic nhập trực tiếp từ US, UK, JAPAN @ SneakerShop.VN nhiệm vụ mang hàng chính hãng đến
                                tay người tiêu dùng Việt Nam !!! 192/2 Nguyễn Thái Bình, Phường 12, Quận Tân Bình, Thành phố
                                Hồ Chí Minh. </p>
                        </div>
                    </div>
                    </div>

				</div>`;
                document.querySelector(".container").innerHTML = s;
                break;
            }
        case "Adidas":
            {
                var s = `<div class="all-content" >
                        <div class="content">
					        <div class="product">
                            
                            </div>
                            <ul id="sotrang"></ul>
                        </div>
                    </div>`;
                document.querySelector(".container").innerHTML = s;
                hienThiSanPhamPhanTrang(a.id, mang);
                break;
            }
        case "Nike":
            {
                var s = `<div class="all-content" >
                        <div class="content">
					        <div class="product">
                            
                            </div>
                            <ul id="sotrang"></ul>
                        </div>
                    </div>`;
                document.querySelector(".container").innerHTML = s;
                hienThiSanPhamPhanTrang(a.id, mang);
                break;
            }
        case "Puma":
            {
                var s = `<div class="all-content" >
                        <div class="content">
					        <div class="product">
                            
                            </div>
                            <ul id="sotrang"></ul>
                        </div>
                    </div>`;
                document.querySelector(".container").innerHTML = s;
                hienThiSanPhamPhanTrang(a.id, mang);
                break;
            }
        case "Converse":
            {
                var s = `<div class="all-content" >
                        <div class="content">
					        <div class="product">
                            
                            </div>
                            <ul id="sotrang"></ul>
                        </div>
                    </div>`;
                document.querySelector(".container").innerHTML = s;
                hienThiSanPhamPhanTrang(a.id, mang);
                break;
            }
        case "Vans":
            {
                var s = `<div class="all-content" >
                        <div class="content">
					        <div class="product">
                            
                            </div>
                            <ul id="sotrang"></ul>
                        </div>
                    </div>`;
                document.querySelector(".container").innerHTML = s;
                hienThiSanPhamPhanTrang(a.id, mang);
                break;
            }
        case "Lienhe":
            {
                s = `<div class="all-content">
                     <div class="content">
                        <img src="/assets/img/bando.png" alt="">
                        <div id="main">
                        <div id="leftmain">
                        <h2>SNEAKERSHOP TRANG THÔNG TIN CHÍNH THỨC</h2>
                        <p>Thông tin liên hệ</p>
                        <hr>
                        <h4>SNEAKERSHOP.VN Trang Thông Tin Chính Thức</h4>
                        <p><i class="fas fa-home"></i>Địa chỉ: 192/2 Nguyễn Thái Bình, Phường 12, Quận Tân Bình, Thành phố Hồ Chí Minh</p>
                        <p>Email : cskh.sneakershop.vn@gmail.com</p>
                        <a href="https://kingshoes.vn/">https://SneakerShop.vn/</a>
                        <a href="https://twitter.com/KingShoes_vn">https://twitter.com/SneakerShop</a>
                        <a href="https://instagram.com/KingShoes.vn">https://instagram.com/SneakerShop.vn</a>
                        <a href="https://facebook.com/pg/www.KingShoes.vn">https://facebook.com/pg/www.SneakerShop.vn</a>
                        <a href="https://www.youtube.com/www.KingShoes.vn">https://www.youtube.com/www.SneakerShop.vn</a>
                        <a href="https://www.tiktok.com/@sneaker_radio">https://www.tiktok.com/@sneaker_radio</a>
                        <p><i class="fas fa-phone-volume"></i>Hotline Bán Hàng: 0909.300.746 - 0909.45.0001</p>
                        <p><i class="fas fa-phone-volume"></i>Hotline CSKH: 0902.368.001</p>
                        </div>
                        <div id="rightmain">
                        <h2>VỚI CHÚNG TÔI</h2>
                        <textarea name="" id="" cols="10" rows="5" placeholder="Nội Dung"></textarea>
                        <input type="text" placeholder="Tên bạn*">
                        <div id="box">
                        <input type="email" placeholder="Email*" style="margin-right: 30px;">
                        <input type="number" placeholder="Điện thoại*">
                        </div>
                        <div id="button">
                        <button style="margin-right: 30px; background-color: rgba(231, 76, 60,1.0);">Gửi ngay</button>
                        <button style="background-color: rgba(46, 204, 113,1.0);">Nhập lại</button>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>`;
                document.querySelector(".container").innerHTML = s;
                break;
            }
        default:
            {
                document.querySelector(".container").innerHTML = "";
            }
    }
}

// 			Container			//

var currentPage = 1;
var perPage = 6;
var mangTam = [];
var totalPage = 0;
var arr = [];

function hienThiSanPhamPhanTrang(brand, mang) {
    if (brand === "Adidas") {
        mang = JSON.parse(localStorage.getItem("Adidas"));
        currentPage = 1;
    } else if (brand === "Nike") {
        mang = JSON.parse(localStorage.getItem("Nike"));
        currentPage = 1;
    } else if (brand === "Puma") {
        mang = JSON.parse(localStorage.getItem("Puma"));
        currentPage = 1;
    } else if (brand === "Converse") {
        mang = JSON.parse(localStorage.getItem("Converse"));
        currentPage = 1;
    } else if (brand === "search") {} else {
        mang = JSON.parse(localStorage.getItem("Vans"));
        currentPage = 1;
    }
    mangTam = mang.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
    );
    renderPageNumber(mang);
    renderProduct(mangTam, 1);
}

function handlePageNumber(num, mang) {
    currentPage = num;
    arr = mang;
    var ul = document.getElementById("sotrang").childNodes;
    for (var i = 0; i < ul.length; i++) {
        if (ul.item(i).innerText == currentPage) {
            ul.item(i).style.backgroundColor = "red";
        } else {
            ul.item(i).style.backgroundColor = "white";
        }
    }
    mangTam = arr.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
    );
    renderProduct(mangTam, currentPage);
}

function surfPage(num) {
    if (num === 1) {
        if (currentPage > 1) {
            currentPage--;
        } else {
            currentPage = totalPage;
        }
    } else {
        if (currentPage < totalPage) {
            currentPage++;
        } else {
            currentPage = 1;
        }
    }
    var ul = document.getElementById("sotrang").childNodes;
    for (var i = 0; i < ul.length; i++) {
        if (ul.item(i).innerText == currentPage) {
            ul.item(i).style.backgroundColor = "red";
        } else {
            ul.item(i).style.backgroundColor = "white";
        }
    }
    mangTam = arr.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
    );
    renderProduct(mangTam, num);
}

function renderPageNumber(mang) {
    arr = mang;
    document.getElementById(
        "sotrang"
    ).innerHTML = `<li onclick="surfPage(1);"><i class="fas fa-angle-left"></i></li>`;
    totalPage = Math.ceil(arr.length / perPage);
    for (var i = 1; i <= totalPage; i++) {
        if (i == 1)
            document.getElementById(
                "sotrang"
            ).innerHTML += `<li style="background-color: red;" onclick="handlePageNumber(${i},arr)">${i}</li>`;
        else
            document.getElementById(
                "sotrang"
            ).innerHTML += `<li onclick="handlePageNumber(${i},arr)">${i}</li>`;
    }
    document.getElementById(
        "sotrang"
    ).innerHTML += `<li onclick="surfPage(2);"><i class="fas fa-angle-right"></i></li>`;
}
var array = [];

function renderProduct(mang, num) {
    array = [];
    for (let index = 0; index < totalPage; index++) {
        if (index === num - 1)
            array.push(mang);
        else
            array.push(0);
    }
    var s = "";
    for (var i = 0; i < array[num - 1].length; i++) {
        var price = new Intl.NumberFormat("VietNam-VN", {
            style: "currency",
            currency: "VND",
        }).format((array[num - 1][i]).price); // Format VNĐ
        s += `<li onclick = "chiTietSP(array[${num-1}][${i}])">
                        <div class="product-item">
                            <img src="${array[num-1][i].img}" alt=""
                                class="product-img">
                            <div class="product-info" align="center">
                                <a href="" class="product-name">${array[num-1][i].name}</a>
                                <br>
                                <div class="product-price">${price}</div>
                            </div>
                        </div>
                    </li>`;
    }
    document.querySelector(".product").innerHTML = s;
}

function chiTietSP(arr) {
    var detail = arr.detail;
    var slSP = arr.quantity;
    var anhSP = arr.img;
    var tenSP = arr.name;
    var giaSP = new Intl.NumberFormat("VietNam-VN", {
        style: "currency",
        currency: "VND",
    }).format((arr.price));
    var mau = arr.color;
    var kichco = arr.size;
    document.getElementById("chiTietSP").style.display = "block";
    document.getElementById("chiTietSP").querySelector(".anhSP").src = anhSP;
    document.getElementById("chiTietSP").querySelector(".tenSP").innerText = tenSP;
    document.getElementById("chiTietSP").querySelector(".giaSP").innerText = giaSP;
    document.getElementById("chiTietSP").querySelector(".price").innerText = arr.price;
    document.getElementById("chiTietSP").querySelector(".slSP").innerText = slSP;
    document.querySelector(".slSP").parentElement.parentElement.querySelector("input").max = slSP;
    document.getElementById("chiTietSP").querySelector(".moTa").innerText = detail;
    var s = "";
    for (let index = 0; index < kichco.length; index++) {
        s += `<option value="${kichco[index]}">${kichco[index]}</option>`

    }
    document.getElementById("bot").querySelector(".select").innerHTML = s;
    s = "";
    for (let index = 0; index < mau.length; index++) {
        if (mau[index] === "Trắng") {
            s += `<li class="color-item" id="trang" onclick="chonMau(this)"><span style="display:none">Trắng</span></li>`;
        } else if (mau[index] === "Đen") {
            s += `<li class="color-item" id="den" onclick="chonMau(this)"><span style="display:none">Đen</span></li>`;
        } else if (mau[index] === "Xanh Dương") {
            s += `<li class="color-item" id="xanhDuong" onclick="chonMau(this)"><span style="display:none">Xanh Dương</span></li>`;
        } else if (mau[index] === "Đỏ") {
            s += `<li class="color-item" id="do" onclick="chonMau(this)"><span style="display:none">Đỏ</span></li>`;
        } else if (mau[index] === "Xám") {
            s += `<li class="color-item" id="xam" onclick="chonMau(this)"><span style="display:none">Xám</span></li>`;
        } else if (mau[index] === "Xanh Lá") {
            s += `<li class="color-item" id="xanhLa" onclick="chonMau(this)"><span style="display:none">Xanh Lá</span></li>`;
        } else if (mau[index] === "Xanh Lam") {
            s += `<li class="color-item" id="xanhLam" onclick="chonMau(this)"><span style="display:none">Xanh Lam</span></li>`;
        } else if (mau[index] === "Cam") {
            s += `<li class="color-item" id="cam" onclick="chonMau(this)"><span style="display:none">Cam</span></li>`;
        } else if (mau[index] === "Hồng") {
            s += `<li class="color-item" id="hong" onclick="chonMau(this)"><span style="display:none">Hồng</span></li>`;
        } else if (mau[index] === "Vàng") {
            s += `<li class="color-item" id="vang" onclick="chonMau(this)"><span style="display:none">Vàng</span></li>`;
        }
    }
    document.getElementById("right").querySelector("ul").innerHTML = s;
    var arr = document.getElementById("right").querySelector("ul").childNodes;
    arr[0].classList.add("active");
}

function chonMau(li) {
    var arr = document.getElementById("right").querySelector("ul").childNodes;
    for (const a of arr) {
        if (a.id === li.id) {
            a.classList.add("active");
        } else {
            a.classList.remove("active");
        }
    }
}

function ktSoLuong() {
    var check = parseInt(document.querySelector(".slSP").parentElement.parentElement.querySelector("input").value);
    var max = parseInt(document.querySelector(".slSP").innerText);
    console.log(check, max);
    if (check >= 1 && check <= max) {
        return check;
    }
    return false;
}



function dongChiTietSP() {
    document.getElementById("chiTietSP").style.display = "none";
}

var modalContainer = document.getElementById("main-chiTiet");
modalContainer.addEventListener("click", function(event) {
    event.stopPropagation();
});


function search() {
    var url = window.location.href;
    var id = url.split('#')[1];
    if (id === "Nike") {
        arr = JSON.parse(localStorage.getItem("Nike"));
    } else if (id === "Adidas") {
        arr = JSON.parse(localStorage.getItem("Adidas"));
    } else if (id === "Puma") {
        arr = JSON.parse(localStorage.getItem("Puma"));
    } else if (id === "Converse") {
        arr = JSON.parse(localStorage.getItem("Converse"));
    } else {
        arr = JSON.parse(localStorage.getItem("Vans"));
    }
    var valueSearchInput = document.getElementById("search").value;
    var search = arr.filter(function(value, index) {
        return value.name.toUpperCase().includes(valueSearchInput.toUpperCase());
    });
    // Xử lý phân trang tìm kiếm  
    hienThiSanPhamPhanTrang("search", search);
}





























// Xử lý giỏ hàng
var click = false;


function showShop() {
    // kiểm tra đã đăng nhập chưa (muốn xem/thểm giỏ hàng thì cần phải đăng nhập)
    // Nếu đã đăng nhập
    if (document.getElementById("user").childElementCount !== 0) {
        if (click === false) {
            document.getElementById("showShop").style.display = "block";
            click = true;
        } else {
            document.getElementById("showShop").style.display = "none";
            click = false;
        }

        var ngannoibot = document.getElementById("showShop");
        ngannoibot.addEventListener('click', function(event) {
            event.stopPropagation();
        })

    }
    // Chưa thì bắt đăng nhập
    else {
        alert("Cần đăng nhập trước khi xem giỏ hàng");
        moDangNhap();
    }
}

// hàm ThemGioHang là thêm sản phẩm vào giỏ hàng trên localStorage
function ThemGioHang(gioHang, check) {
    // đồng bộ hóa giỏ hàng vật lý với giỏ hàng trên localStorage của từng khách hàng
    var listGioHang = JSON.parse(localStorage.getItem("listGioHang"));
    var num;
    for (var i = 0; i < listGioHang.length; i++) {
        if (listGioHang[i].email === document.querySelector(".show-email").innerText) {
            if (check) { // sản phẩm đã tồn tại trong giỏ ==> xử lý tăng số lượng, thành tiền
                num = i;
                break;
            } else { // sản phẩm chưa tồn tại trong giỏ 
                listGioHang[i].giohang.push(gioHang);
            }

        }
    }
    if (check) {
        for (var i = 0; i < listGioHang[num].giohang.length; i++) {
            if (listGioHang[num].giohang[i].img === gioHang.img) { // so sánh đường dẫn hình (duy nhất) để không xảy ra lỗi ngoài ý muốn
                listGioHang[num].giohang[i].quantity += ktSoLuong();
                listGioHang[num].giohang[i].money = listGioHang[num].giohang[i].quantity * listGioHang[num].giohang[i].price;
            }

        }
    }

    localStorage.setItem("listGioHang", JSON.stringify(listGioHang));
}
// hàm addProduct là thêm sản phẩm vào giỏ hàng vật lý
function addProduct(button) {
    // kiểm tra đã đăng nhập chưa (thêm sản phẩm vào giỏ hàng cần phải đăngn nhập)

    // đã đăng nhập
    if (document.getElementById("user").childElementCount !== 0) {

        if (!ktSoLuong()) {
            document.getElementById("bot").querySelector(".error-message").innerText = "Số lượng không hợp lệ!";
            document.getElementById("bot").querySelector(".error-message").style.color = "red";
            return;
        } else {
            document.getElementById("bot").querySelector(".error-message").innerText = "";
            document.getElementById("bot").querySelector(".error-message").style.color = "white";
        }


        if (document.getElementById("showShopTable").childElementCount === 0) {
            var stt = 0;
        } else {
            console.log("không rỗng");
            var stt = parseInt(document.getElementById("showShopTable").lastElementChild.querySelector(".stt").innerText);
        }
        console.log("stt", stt);
        var img = document.getElementById("center").querySelector(".anhSP").src;
        var name = document.querySelector(".tenSP").innerText;
        console.log(name);
        var quantity = ktSoLuong();
        var price = parseInt(document.querySelector(".price").innerText);
        var priceVND = document.getElementById("chiTietSP").querySelector(".giaSP").innerText;
        var mau = document.getElementById("right").querySelector("ul").querySelectorAll("li");
        var mauSac;
        for (const a of mau) {
            if (a.className === "color-item active") {
                mauSac = a.querySelector("span").innerText;
            }
        }
        var size = document.querySelector(".select").value;
        var thanhTien;

        // Kiểm tra sản phẩm đã có trong giỏ hàng chưa 
        var check = false;
        var list = document.getElementById("showShopTable").querySelectorAll(".sanPham");
        var sanPham = JSON.parse(localStorage.getItem("sanPham"));
        var soLuongSanPham;
        for (const hang of sanPham) {
            for (const sanpham of hang) {
                if (sanpham.name === name) {
                    soLuongSanPham = sanpham.quantity;
                }
            }
        }
        var tongSL = 0;
        for (var a of list) {
            if (a.querySelector(".cotTen").innerText === name) { // nếu đã có ==> tăng số lượng, tăng thành tiền 
                tongSL += parseInt(a.querySelector(".soLuong").innerText);
            }
        }
        if (quantity + tongSL > soLuongSanPham) {
            alert("Shop không có đủ số lượng bạn yêu cầu! Vui lòng kiểm tra lại");
            return;
        }
        for (var a of list) {
            if (a.querySelector(".cotTen").innerText === name && a.querySelector(".mauSac").innerText === mauSac &&
                a.querySelector(".Size").innerText == size) { // nếu đã có ==> tăng số lượng, tăng thành tiền 
                console.log("hahah");
                check = true;
                var b = parseInt(a.querySelector(".soLuong").innerText);
                a.querySelector(".soLuong").innerText = b + quantity;
                thanhTien = (b + quantity) * price;
                a.querySelector(".thanhTien").innerText = thanhTien;
                a.querySelector(".thanhTienVND").innerText = new Intl.NumberFormat("VietNam-VN", {
                    style: "currency",
                    currency: "VND",
                }).format(thanhTien);
            }
        }


        // nếu chưa ==> thêm vào giỏ hàng
        if (!check) {
            thanhTien = quantity * price;
            var thanhTienVND = new Intl.NumberFormat("VietNam-VN", {
                style: "currency",
                currency: "VND",
            }).format(thanhTien);



            console.log("thành tiền", thanhTien);
            document.getElementById("quantity").innerText = stt + 1;
            document.getElementById("showShopTable").innerHTML += `
            <tr class="sanPham">
                <td class="stt">${stt+1}</td>
                <td><img class="hinh" src=${img}></td>
                <td class="cotTen">${name}</td>
                <td class="soLuong">${quantity}</td>
                <td class="mauSac">${mauSac}</td>
                <td class="Size">${size}</td>
                <td class="donGiaVND">${priceVND}</td>
                <td class="donGia" style="display:none">${price}</td>
                <td class="thanhTienVND">${thanhTienVND}</td>
                <td class="thanhTien" style="display:none">${thanhTien}</td>
                <td>
                    <button onclick="deleteProduct(this);">Delete</button>
                </td>
            </tr>`;
        }


        // cập nhật lại tổng tiền các sản phẩm trong giỏ hàng
        var arr = document.getElementById("showShopTable").querySelectorAll(".thanhTien");
        var tongTien = 0;
        for (var tien of arr) {
            tongTien += parseInt(tien.innerText);
        }
        document.getElementById("tongTien").innerText = `${tongTien}đ`;
        var tongTienVND = new Intl.NumberFormat("VietNam-VN", {
            style: "currency",
            currency: "VND",
        }).format(tongTien);
        document.getElementById("tongTienVND").innerText = tongTienVND;
        // cập nhật lại giỏ hàng của khách trong localStorage
        var gioHang = {
            img: img,
            nameProduct: name,
            color: mauSac,
            size: size,
            quantity: quantity,
            price: price,
            money: thanhTien,
        }
        ThemGioHang(gioHang, check);



        alert("Thêm vào giỏ hàng thành công!");
        dongChiTietSP();
    }
    // chưa đăng nhập ==> bắt đăng nhập
    else {
        alert("Cần đăng nhập trước khi thêm giỏ hàng");
        dongChiTietSP();
        moDangNhap();
    }
}


function XoaGioHang(ten, mau, size) {
    console.log(ten, size, mau);
    console.log(document.querySelector(".show-email").innerText);
    var listGioHang = JSON.parse(localStorage.getItem("listGioHang"));
    for (var i = 0; i < listGioHang.length; i++) {
        if (listGioHang[i].email === document.querySelector(".show-email").innerText) {
            console.log("34");
            for (var j = 0; j < listGioHang[i].giohang.length; j++) {
                if (listGioHang[i].giohang[j].nameProduct === ten && listGioHang[i].giohang[j].color === mau && listGioHang[i].giohang[j].size == size) {
                    console.log("hhaa");
                    if (listGioHang[i].giohang[j].quantity == 1) {
                        listGioHang[i].giohang.splice(j, 1);
                    } else {
                        listGioHang[i].giohang[j].quantity -= 1;
                        listGioHang[i].giohang[j].money = listGioHang[i].giohang[j].quantity * listGioHang[i].giohang[j].price;
                    }
                }
            }
        }
    }
    localStorage.setItem("listGioHang", JSON.stringify(listGioHang));
}


function deleteProduct(button) {
    // lấy ra số lượng sản phẩm đó trong giỏ hàng
    var soLuong = parseInt(button.parentElement.parentElement.querySelector(".soLuong").innerText);
    // nếu còn 1 mà xóa ==> xóa sản phẩm đó ra khỏi giỏ hàng
    if (soLuong === 1) {
        var tr = button.parentElement.parentElement.outerHTML;
        var table = document.getElementById("showShopTable");
        var arr = document.getElementById("showShopTable").querySelectorAll(".sanPham");
        for (var sanPham of arr) {
            if (sanPham.outerHTML === tr) {
                table.removeChild(sanPham);
                break;
            }
        }
        document.getElementById("quantity").innerText = parseInt(document.getElementById("quantity").innerText) - 1;

        // Cập nhật lại thứ tự sản phẩm trong giỏ hàng sau khi xóa 1 sản phẩm khỏi giỏ hàng
        var arr = document.getElementById("showShopTable").children;
        for (var i = 0; i < arr.length; i++) {
            arr[i].querySelector(".stt").innerText = i + 1;

        }
    }
    // nếu còn nhiều hơn 1 ==> xóa đi 1 đv số lượng
    else {
        button.parentElement.parentElement.querySelector(".soLuong").innerText = soLuong - 1;
    }
    var thanhTien = parseInt(button.parentElement.parentElement.querySelector(".donGia").innerText) *
        parseInt(button.parentElement.parentElement.querySelector(".soLuong").innerText);
    var thanhTienVND = new Intl.NumberFormat("VietNam-VN", {
        style: "currency",
        currency: "VND",
    }).format(thanhTien);
    button.parentElement.parentElement.querySelector(".thanhTien").innerText = thanhTien;
    button.parentElement.parentElement.querySelector(".thanhTienVND").innerText = thanhTienVND;

    var tong = parseInt(document.getElementById("tongTien").innerText) - parseInt(button.parentElement.parentElement.querySelector(".donGia").innerText);
    var tongVND = new Intl.NumberFormat("VietNam-VN", {
        style: "currency",
        currency: "VND",
    }).format(tong);
    document.getElementById("tongTien").innerText = tong;
    document.getElementById("tongTienVND").innerText = tongVND;

    // Cập nhật lại giỏ hàng của khách trên localStorage
    var ten = button.parentElement.parentElement.querySelector(".cotTen").innerText;
    var mau = button.parentElement.parentElement.querySelector(".mauSac").innerText;
    var size = parseInt(button.parentElement.parentElement.querySelector(".Size").innerText);
    XoaGioHang(ten, mau, size);


}


function huyGioHang() {
    alert("Đã hủy hết sản phẩm trong giỏ hàng!");
    document.getElementById("showShopTable").innerHTML = "";
    var email = document.getElementById("user").querySelector(".show-email").innerText;
    var listGioHang = JSON.parse(localStorage.getItem("listGioHang"));
    for (const a of listGioHang) {
        if (a.email === email) {
            a.giohang = [];
        }
    }
    document.getElementById("quantity").innerText = "0";
    document.getElementById("tongTien").innerText = "0đ";
    document.getElementById("tongTienVND").innerText = "0đ";
    localStorage.setItem("listGioHang", JSON.stringify(listGioHang));
}

function moDonHang() {
    document.getElementById("showShop").style.display = "none";
    document.getElementById("donHang").style.display = "block";
    document.getElementById("donHang").style.zIndex = 200;
    var hoten = document.getElementById("show-hoten").innerText;
    var sdt = document.querySelector(".show-sdt").innerText;
    var s = `<p id = "hoten-mua"> Họ Tên: <span>${hoten }</span></p>
            <p id = "sdt-mua"> Số Điện Thoại: <span>${sdt}</span> </p>
            <p id = "title"> Sản Phẩm Chọn Mua </p> 
            <ul id = "sanpham-mua" >
            
            </ul>
            <p id = "tongtien-mua"> </p>`;
    document.getElementById("mid-donhang").innerHTML = s;
    var a = document.getElementById("showShopTable").children;
    var s = "";
    for (var i = 0; i < a.length; i++) {
        var ten = a[i].querySelector(".cotTen").innerText;
        var mau = a[i].querySelector(".mauSac").innerText;
        var size = a[i].querySelector(".Size").innerText
        var soLuong = a[i].querySelector(".soLuong").innerText;
        s += `<li><span class ="tensp-mua"> ${ten}-${mau}-${size} </span><span class="slsp-mua">${soLuong}</span ></li>`

    }
    document.getElementById("sanpham-mua").innerHTML = s;
    document.getElementById("tongtien-mua").innerHTML = "Tổng tiền: " +
        document.getElementById("tongTienVND").innerText;
}

var donhangContainer = document.getElementById("main-donhang");
donhangContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

function dongDonHang() {
    document.getElementById("donHang").style.display = "none";

}

function muaHang() {
    alert("Đơn hàng của bạn đã được gửi đến admin. Vui lòng chờ Xử lý!");
    dongDonHang();
    // Xóa giỏ hàng
    var listGioHang = JSON.parse(localStorage.getItem("listGioHang"));
    var email = document.querySelector(".show-email").innerText;
    var hoten = document.getElementById("show-hoten").innerText;
    var gioHang = [];
    for (var a of listGioHang) {
        if (a.email === email) {
            gioHang = a.giohang;
            a.giohang = [];
        }
    }
    localStorage.setItem("listGioHang", JSON.stringify(listGioHang));

    document.getElementById("showShopTable").innerHTML = "";
    document.getElementById("showShop").style.display = "none";
    document.getElementById("tongTien").innerText = "0đ";
    document.getElementById("tongTienVND").innerText = "0đ";

    document.getElementById("quantity").innerText = 0;

    console.log(document.getElementById("order-body").childElementCount);
    if (document.getElementById("order-body").childElementCount === 0) {
        var so = 0;
    } else {
        var h = document.getElementById("order-body").lastElementChild.querySelector(".madh").innerText;
        var m = h.indexOf("-");
        var so = parseInt(h.slice(m + 1)) + 1;
    }
    // Thêm vào listDonHang
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    for (var a of listDonHang) {
        if (a.email === email) {
            a.donhang.push({
                madh: `${hoten}-${so}`,
                duocDuyet: false,
                giohang: gioHang,
            })
        }
    }
    localStorage.setItem("listDonHang", JSON.stringify(listDonHang));
}

function inDonHang() {
    document.getElementById("order-body").innerHTML = "";
    var email = document.getElementById("user").querySelector(".show-email").innerText;
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var arr = [];
    for (var a of listDonHang) {
        if (a.email === email) {
            arr = a.donhang;
        }
    }
    var s = "";
    var tong = 0;
    var tongVND = 0;
    var stt = 0;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].giohang.length; j++) {
            s += `<span class="ten">${arr[i].giohang[j].nameProduct}-${arr[i].giohang[j].color}-${arr[i].giohang[j].size}</span>
            <span class="sl">(${arr[i].giohang[j].quantity})</span><br>`;
            tong += parseInt(arr[i].giohang[j].money);
        }

        // inner vào Đơn hàng của trang người dùng đó thành đã xử lý
        if (arr[i].duocDuyet === true) { // đã xử lý thì không được hủy đơn hàng nữa.
            var xuLy = "Đã Xử Lý";
            var btn = "";
        } else {
            var xuLy = "Chưa Xử Lý";
            var btn = `<button onclick="huyDonHang(this);">Hủy đơn hàng</button>`;
        }
        tongVND = new Intl.NumberFormat("VietNam-VN", {
            style: "currency",
            currency: "VND",
        }).format(tong);
        document.getElementById("order-body").innerHTML += `
            <tr>
                <td class="sott">${++stt}</td>
                <td class="madh">${arr[i].madh}</td>
                <td class="listsp">
                    ${s}
                </td>
                <td id="tongtien">${tongVND}</td>
                <td>${xuLy}</td>
                <td>${btn}</td>
            </tr>`
        s = "";
        tong = 0;
    }
}

var click = false;

function showOrder() {
    if (!click) {
        document.getElementById("main-order").style.display = "block";
        click = true;
        inDonHang();
    } else {
        document.getElementById("main-order").style.display = "none";
        click = false;
    }
}


function huyDonHang(button) {
    var email = document.querySelector(".show-email").innerText;
    var madh = button.parentElement.parentElement.querySelector(".madh").innerText;
    console.log("madh", madh);
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var arr = [];
    for (var a of listDonHang) {
        if (a.email === email) {
            arr = a.donhang;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].madh === madh) {
            arr.splice(i, 1);
            break;
        }
    }
    for (var a of listDonHang) {
        if (a.email === email) {
            a.donhang = arr;
        }
    }
    localStorage.setItem("listDonHang", JSON.stringify(listDonHang));
}