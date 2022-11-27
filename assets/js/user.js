//Tài Khoản Admin---------------------------------------------------------------------------------------------------------------------------------------------------------------------
var adminTk = "Admin";
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
    document.getElementById("sign_up").style.zIndex = 1;
}

function dongDangKy() {
    document.getElementById("sign_up").style.zIndex = -1;
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
        JSON.parse(localStorage.getItem("listTaiKhoan")) :
        [];
    var listGioHang = localStorage.getItem("listGioHang") ?
        JSON.parse(localStorage.getItem("listGioHang")) :
        [];
    var listDonHang = localStorage.getItem("listDonHang") ?
        JSON.parse(localStorage.getItem("listDonHang")) :
        [];

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
        JSON.parse(localStorage.getItem("listTaiKhoan")) :
        [];
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
            JSON.parse(localStorage.getItem("listTaiKhoan")) :
            [];
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
        document
            .getElementById("password_3")
            .parentElement.parentElement.querySelector(".error-message").innerText =
            "Tài khoản không tồn tại. Vui lòng đăng ký!";
        document
            .getElementById("password_3")
            .parentElement.parentElement.querySelector(".error-message").style.color =
            "red";
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
    } else {
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
    } else {
        document.getElementById("main-order").style.display = "none";
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
const colors = $$(".color-item");
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

colors.forEach((color, index) => {
    color.onclick = function() {
        $(".color-item.active").classList.remove("active");
        this.classList.add("active");
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
					<div class="information">
						<h2 class="gioiThieu">BÁN GIÀY THỂ THAO SNEAKER CHÍNH HÃNG TẠI TPHCM - SneakerShop GIỚI THIỆU
						</h2>
						<p class="gioiThieu"> Nỗi sợ vì mua phải giày kém chất lượng, giày fake, từ nay không còn lo
							lắng nữa vì đã có #SneakerShop.VN: hàng chính hãng nhập trực tiếp từ US, fullbox, nguyên
							tem.</p>
						</p>
						<p>✓ 15 Ngày Đổi Hàng ✓ Giao Hàng Miễn Phí ✓ Thanh Toán Khi Nhận Hàng ✓ Bảo Hành Hàng Chính Hãng
						</p>
						<p class="gioiThieu">Đến với "SneakerShop.VN” quý khách hàng sẽ có những sản phẩm ưng ý nhất,
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
				</div>`;
                document.querySelector(".container").innerHTML = s;
                break;
            }
        case "Adidas":
            {
                var s = `<div class="all-content">
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
                var s = `<div class="all-content">
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
                var s = `<div class="all-content">
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
                var s = `<div class="all-content">
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
                var s = `<div class="all-content">
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
    renderProduct(mangTam);
    renderPageNumber(mang);
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
    renderProduct(mangTam);
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
    renderProduct(mangTam);
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

function renderProduct(mang) {
    var arr = mang;
    location.href = "#";
    var s = "";
    for (var i = 0; i < arr.length; i++) {
        var price = new Intl.NumberFormat("VietNam-VN", {
            style: "currency",
            currency: "VND",
        }).format(arr[i].price); // Format VNĐ
        s += `<li onclick = "chiTietSP(this)">
                        <div class="product-item">
                            <img src="${arr[i].img}" alt=""
                                class="product-img">
                            <div class="product-info" align="center">
                                <a href="" class="product-name">${arr[i].name}</a>
                                <br>
                                <div class="mang" style="display: none">
                                    <div class="mota">${arr[i].detail}</div>
                                    <div class="soluong">${arr[i].quantity}</div>
                                </div>
                                <div class="product-price">${price}</div>
                            </div>
                        </div>
                    </li>`;
    }
    document.querySelector(".product").innerHTML = s;
}

function chiTietSP(li) {
    console.log(li);
    var detail = li.querySelector(".mang").querySelector(".mota").innerText;
    var slSP = parseInt(
        li.querySelector(".mang").querySelector(".soluong").innerText
    );
    var anhSP = li.querySelector("img").src;
    var tenSP = li.querySelector(".product-name").innerText;
    var giaSP = li.querySelector(".product-price").innerText;
    document.getElementById("chiTietSP").style.display = "block";
    document.getElementById("chiTietSP").querySelector(".anhSP").src = anhSP;
    document.getElementById("chiTietSP").querySelector(".tenSP").innerText =
        tenSP;
    document.getElementById("chiTietSP").querySelector(".giaSP").innerText =
        giaSP;
    document.getElementById("chiTietSP").querySelector(".slSP").innerText = slSP;
    document.getElementById("chiTietSP").querySelector(".moTa").innerText =
        detail;
}

function dongChiTietSP() {
    document.getElementById("chiTietSP").style.display = "none";
}

var modalContainer = document.getElementById("main-chiTiet");
modalContainer.addEventListener("click", function(event) {
    event.stopPropagation();
});