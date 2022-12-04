function hienThiTrangAdmin(obj) {
    switch (obj.id) {
        case "trangchu":
            {
                trangChuUser();
                break;
            }
        case "quanlyuser":
            {
                quanlyuser();
                break;
            }
        case "quanlysanpham":
            {
                quanlysanpham();
                break;
            }
        case "quanlydonhang":
            {
                quanlydonhang();
                break;
            }
        case "thongkekinhdoanh":
            {
                thongkekinhdoanh();

                break;
            }
    }
}




function trangChuUser() {
    window.location.href = "http://127.0.0.1:5500/do_an.html";
}

function quanlyuser() {
    var s = `            
<table id="quanlyuser">
    <thead>
        <th>STT</th>
        <th>Họ Tên</th>
        <th>Số điện thoại</th>
        <th>Email</th>
        <th>Mật Khẩu</th>
    </thead>
    <tbody id="table-body">
        
    </tbody>
    <tfoot>
        <tr id="tongTaiKhoan">
            
        </tr>
    </tfoot>
</table>`;
    document.getElementById("container").innerHTML = s;
    var listTaiKhoan = JSON.parse(localStorage.getItem("listTaiKhoan"));
    var s = "";
    for (var i = 0; i < listTaiKhoan.length; i++) {
        s += `
    <tr onclick = "thongTinKhachHang(this);">
        <td>${i+1}</td>
        <td class="hoten">${listTaiKhoan[i].hoten}</td>
        <td class="sdt">${listTaiKhoan[i].sdt}</td>
        <td class="email">${listTaiKhoan[i].email}</td>
        <td class="matkhau">${listTaiKhoan[i].matkhau}</td>
    </tr>`
    }
    document.getElementById("table-body").innerHTML = s;
    document.getElementById("tongTaiKhoan").innerHTML = `<th colspan="5"><spanp>Tổng Tài Khoản: </spanp>${listTaiKhoan.length}</th>`
}

function thongTinKhachHang(tr) {
    document.getElementById("thongTinKhachHang").style.display = "block";
    var hoten = tr.querySelector(".hoten").innerText;
    var sdt = tr.querySelector(".sdt").innerText;
    var email = tr.querySelector(".email").innerText;
    var matkhau = tr.querySelector(".matkhau").innerText;
    document.getElementById("table-info").querySelector("tbody").innerHTML =
        `
        <tr>
            <td>${hoten}</td>
            <td>${sdt}</td>
            <td>${email}</td>
            <td>${matkhau}</td>
        </tr>
        `



    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var donHang = [];
    for (const a of listDonHang) {
        if (a.name === hoten) {
            donHang = a.donhang;
        }
    }
    var s = "";
    var tong = 0;
    var tongVND;
    var stt = 0;
    for (const a of donHang) {
        if (a.duocDuyet === true && a.ghiChu === false) {
            for (const b of a.giohang) {
                s += `<span class="Ten">${b.nameProduct}</span>-
                <span class="Mau">(${b.color})</span>-
                <span class="Size">(${b.size})</span>-
                <span class="SoLuong">(${b.quantity})</span><br>`;
                tong += parseInt(b.money);
            }
            tongVND = new Intl.NumberFormat("VietNam-VN", {
                style: "currency",
                currency: "VND",
            }).format(tong);
            var date = new Date(a.gioDat);
            var string1 = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "-" +
                date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            var date2 = new Date(a.gioDuyet);
            var string2 = date2.getDate() + "-" + (date2.getMonth() + 1) + "-" + date2.getFullYear() + "-" +
                date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds();
            document.getElementById("table-donhang").querySelector("tbody").innerHTML +=
                `<tr>
                    <td>${++stt}</td>
                    <td class="maDonHang">${a.madh}</td>
                    <td class="SanPham">
                        ${s}
                    </td>
                    <td class="ThanhTien">${tongVND}</td>
                    <td class="ngayDat">${string1}</td>
                    <td class="ngayDuuyet">${string2}</td>
                </tr> `;
            s = "";
            tong = 0;
        }
    }
}

function dongThongTin() {
    document.getElementById("thongTinKhachHang").style.display = "none";
    document.getElementById("table-info").querySelector("tbody").innerHTML = "";
    document.getElementById("table-donhang").querySelector("tbody").innerHTML = "";

}

var thongtinContainer = document.getElementById("main-thongtin");
thongtinContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})


function quanlysanpham() {
    var s = `
    <div class = "content">
        <table id="quanlysanpham">
            <thead>
                <th>STT</th>
                <th>Tên Hãng</th>
                <th>Tên Sản Phẩm</th>
                <th>Mã Sản Phẩm</th>
                <th>Hình Sản Phẩm</th>
                <th>Màu Sản Phẩm</th>
                <th>Size Sản Phẩm</th>
                <th>Số Lượng</th>
                <th>Giá</th>
                <th>Action</th>
            </thead>
            <tbody id="table-body">

            </tbody>

            <tr id="themSp" onclick="addsp()">
                <th colspan="10">Thêm Sản Phẩm <i class="fas fa-plus"></i></th>
            </tr>
            <tfoot>
                <tr id="tongSanPham">

                </tr>
                <tr id="tongAdidas">

                </tr>
                <tr id="tongNike">

                </tr>
                <tr id="tongPuma">

                </tr>
                <tr id="tongConverse">

                </tr>
                <tr id="tongVans">

                </tr>
            </tfoot>
        </table>
    </div>`;
    document.getElementById("container").innerHTML = s;
    var s = "";
    var stt = 0,
        tong = 0,
        nike = 0,
        adidas = 0,
        puma = 0,
        converse = 0,
        vans = 0;
    var arr = JSON.parse(localStorage.getItem("sanPham"));
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            var giaVND = new Intl.NumberFormat("VietNam-VN", {
                style: "currency",
                currency: "VND",
            }).format(arr[i][j].price);
            s += `
        <tr>
            <td>${++stt}</td>
            <td class="brand">${arr[i][j].brand}</td>
            <td class="name">${arr[i][j].name}</td>
            <td class="productID">${arr[i][j].productId}</td>
            <td class="img"><img src="${arr[i][j].img}" alt=""></td>
            <td class="color">${arr[i][j].color}</td>
            <td class="size">${arr[i][j].size}</td>
            <td class="quantity">${arr[i][j].quantity}</td>
            <td class="price" style="display:none;">${arr[i][j].price}</td>
            <td class="priceVND">${giaVND}</td>
            <td class="MoTaSP" style="display:none;">${arr[i][j].detail}</td>
            <td class="action">
                <button onclick="editsp(this);">Edit</button>
                <button onclick="deletesp(this);">Delete</button>
            </td>
        </tr>`;
            tong += arr[i][j].quantity;
            if (arr[i][j].brand === "Nike") {
                nike += arr[i][j].quantity;
            } else if (arr[i][j].brand === "Adidas") {
                adidas += arr[i][j].quantity;
            } else if (arr[i][j].brand === "Puma") {
                puma += arr[i][j].quantity;
            } else if (arr[i][j].brand === "Converse") {
                converse += arr[i][j].quantity;
            } else {
                vans += arr[i][j].quantity;
            }

        }
    }
    document.getElementById("table-body").innerHTML = s;
    document.getElementById("tongSanPham").innerHTML = `<th colspan="10"><spanp>Tổng Sản Phẩm: </spanp>${tong}</th>`;
    document.getElementById("tongNike").innerHTML = `<th colspan="10"><spanp>Tổng Giày Nike: </spanp>${nike}</th>`;
    document.getElementById("tongAdidas").innerHTML = `<th colspan="10"><spanp>Tổng Giày Adidas: </spanp>${adidas}</th>`;
    document.getElementById("tongPuma").innerHTML = `<th colspan="10"><spanp>Tổng Giày Puma: </spanp>${puma}</th>`;
    document.getElementById("tongConverse").innerHTML = `<th colspan="10"><spanp>Tổng Giày Converse: </spanp>${converse}</th>`;
    document.getElementById("tongVans").innerHTML = `<th colspan="10"><spanp>Tổng Giày Vans: </spanp>${vans}</th>`;
}


var brand; // brand ban đầu của sản phẩm cần chỉnh sửa
var productID; // Id ban đầu của sản phẩm cần chỉnh sửa

function editsp(button) {
    document.getElementById("editSP").style.display = "block";
    brand = button.parentElement.parentElement.querySelector(".brand").innerHTML;
    var name = button.parentElement.parentElement.querySelector(".name").innerHTML;
    productID = button.parentElement.parentElement.querySelector(".productID").innerHTML;
    var img = button.parentElement.parentElement.querySelector(".img").querySelector("img").getAttribute("src");
    var quantity = button.parentElement.parentElement.querySelector(".quantity").innerHTML;
    var price = button.parentElement.parentElement.querySelector(".price").innerHTML;
    var mau = button.parentElement.parentElement.querySelector(".color").innerHTML;
    var size = button.parentElement.parentElement.querySelector(".size").innerHTML;
    var detail = button.parentElement.parentElement.querySelector(".MoTaSP").innerHTML;

    var edit = document.getElementById("form-edit");
    var arr = edit.querySelector(".hangsp").children;
    for (var option of arr) {
        if (option.value === brand) {
            option.setAttribute("selected", "selected");
        } else {
            if (option.getAttribute("selected")) {
                option.removeAttribute("selected");
            }
        }
    }

    // edit.querySelector(".hangsp").firstElementChild.innerHTML = brand;
    edit.querySelector(".tensp").value = name;
    edit.querySelector(".idsp").value = productID;
    edit.querySelector(".hinhsp").setAttribute("src", img);
    edit.querySelector(".slsp").value = quantity;
    edit.querySelector(".giasp").value = price;
    edit.querySelector(".motasp").value = detail;

    var s = `
    <li class="color-item" onclick="chonMau(this);" id="trang"><span style="display:none">Trắng</span></li>
    <li class="color-item" onclick="chonMau(this);" id="do"><span style="display:none">Đỏ</span></li>
    <li class="color-item" onclick="chonMau(this);" id="den"><span style="display:none">Đen</span></li>
    <li class="color-item" onclick="chonMau(this);" id="xanhDuong"><span style="display:none">Xanh Dương</span></li>
    <li class="color-item" onclick="chonMau(this);" id="xanhLam"><span style="display:none">Xanh Lam</span></li>
    <li class="color-item" onclick="chonMau(this);" id="xanhLa"><span style="display:none">Xanh Lá</span></li>
    <li class="color-item" onclick="chonMau(this);" id="hong"><span style="display:none">Hồng</span></li>
    <li class="color-item" onclick="chonMau(this);" id="cam"><span style="display:none">Cam</span></li>
    <li class="color-item" onclick="chonMau(this);" id="vang"><span style="display:none">Vàng</span></li>
    <li class="color-item" onclick="chonMau(this);" id="xam"><span style="display:none">Xám</span></li>
    `;
    document.getElementById("InmauSac").innerHTML = s;
    var max = document.getElementById("InmauSac").querySelectorAll("li");
    var arrMau = mau.split(",");
    for (let a of arrMau) {
        for (b of max) {
            if (a === b.querySelector("span").innerText) {
                b.classList.add("active");
            }
        }

    }


    s = `
        <li class="size-item" onclick="chonSize(this);">35</li>
        <li class="size-item" onclick="chonSize(this);">36</li>
        <li class="size-item" onclick="chonSize(this);">37</li>
        <li class="size-item" onclick="chonSize(this);">38</li>
        <li class="size-item" onclick="chonSize(this);">39</li>
        <li class="size-item" onclick="chonSize(this);">40</li>
        <li class="size-item" onclick="chonSize(this);">41</li>
        <li class="size-item" onclick="chonSize(this);">42</li>
        <li class="size-item" onclick="chonSize(this);">43</li>
    `;
    document.getElementById("Insize").innerHTML = s;
    max = document.getElementById("Insize").querySelectorAll("li");
    var arrSize = size.split(",");
    for (let a of arrSize) {
        for (b of max) {
            if (a === b.innerText) {
                b.classList.add("active");
            }
        }

    }
}

function chonMau(li) {
    if (li.classList.contains("active")) {
        li.classList.remove("active");
    } else {
        li.classList.add("active");
    }
}

function chonSize(li) {
    if (li.classList.contains("active")) {
        li.classList.remove("active");
    } else {
        li.classList.add("active");
    }
}

function closeEdit() {
    document.getElementById("editSP").style.display = "none";
    var mang = document.getElementById("form-edit").querySelectorAll(".error-message");
    for (let a of mang) {
        a.innerText = "";
        a.style.color = "white";
    }
}


function ktSoLuong() {
    var check = parseInt(document.getElementById("form-edit").querySelector(".slsp").value);
    if (check >= 1) {
        return check;
    }
    return false;
}



function ktGia() {
    var check = parseInt(document.getElementById("form-edit").querySelector(".giasp").value);
    if (check >= 1000) {
        return check;
    }
    return false;
}


function thietlapEdit() {
    var hang = document.getElementById("form-edit").querySelector(".hangsp").value;
    var tensp = document.getElementById("form-edit").querySelector(".tensp").value;
    var masp = document.getElementById("form-edit").querySelector(".idsp").value;
    var hinhsp = document.getElementById("form-edit").querySelector(".hinhsp").getAttribute("src");
    var slsp = ktSoLuong();
    var giasp = ktGia();
    var motasp = document.getElementById("form-edit").querySelector(".motasp").value;
    var mausp = document.getElementById("InmauSac").querySelectorAll("li");
    var sizesp = document.getElementById("Insize").querySelectorAll("li");
    var color = [];
    var size = [];
    for (const a of mausp) {
        if (a.classList.contains("active")) {
            color.push(a.querySelector("span").innerText);
        }
    }
    for (const a of sizesp) {
        if (a.classList.contains("active")) {
            size.push(parseInt(a.innerText));
        }
    }
    // Kiểm tra để trống thông tin
    var mang = document.getElementById("form-edit").querySelectorAll(".check");
    for (let a of mang) {
        if (a.classList.contains("tensp") && tensp === "") {
            a.parentElement.querySelector(".error-message").innerText = "Vui lòng nhập tên sản phẩm!";
            a.parentElement.querySelector(".error-message").style.color = "red";
            return;
        } else if (a.classList.contains("idsp") && masp === "") {
            a.parentElement.querySelector(".error-message").innerText = "Vui lòng nhập ID sản phẩm!";
            a.parentElement.querySelector(".error-message").style.color = "red";
            return;
        } else if (a.classList.contains("slsp") && slsp === false) {
            a.parentElement.querySelector(".error-message").innerText = "Vui lòng nhập Đúng số lượng sản phẩm!";
            a.parentElement.querySelector(".error-message").style.color = "red";
            return;
        } else if (a.classList.contains("giasp") && giasp === false) {
            a.parentElement.querySelector(".error-message").innerText = "Vui lòng nhập Đúng giá sản phẩm!";
            a.parentElement.querySelector(".error-message").style.color = "red";
            return;
        } else if (a.classList.contains("color") && color.length === 0) {
            a.parentElement.querySelector(".error-message").innerText = "Vui lòng chọn màu sản phẩm!";
            a.parentElement.querySelector(".error-message").style.color = "red";
            return;
        } else if (a.classList.contains("size") && size.length === 0) {
            a.parentElement.querySelector(".error-message").innerText = "Vui lòng chọn size sản phẩm!";
            a.parentElement.querySelector(".error-message").style.color = "red";
            return;

        } else if (a.classList.contains("motasp") && motasp === "") {
            a.parentElement.querySelector(".error-message").innerText = "Vui lòng nhập mô tả sản phẩm!";
            a.parentElement.querySelector(".error-message").style.color = "red";
            return;
        } else {
            a.parentElement.querySelector(".error-message").innerText = "";
            a.parentElement.querySelector(".error-message").style.color = "white";
        }
    }
    // Kiểm tra trùng thông tin với các sản phẩm trước (trùng tên,mã)
    var arr = JSON.parse(localStorage.getItem("sanPham"));
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j].productId != productID) { // không kiểm tra với chính nó
                if (arr[i][j].name === tensp) {
                    document.querySelector(".idsp").parentElement.querySelector(".error-message").innerHTML = "";
                    document.querySelector(".hinhsp").parentElement.querySelector(".error-message").innerHTML = "";

                    document.querySelector(".tensp").parentElement.querySelector(".error-message").innerHTML = "Tên sản phẩm đã tồn tại";
                    document.querySelector(".tensp").parentElement.querySelector(".error-message").style.color = "red";
                    return false;
                } else if (arr[i][j].productId === masp) {
                    document.querySelector(".tensp").parentElement.querySelector(".error-message").innerHTML = "";
                    document.querySelector(".hinhsp").parentElement.querySelector(".error-message").innerHTML = "";

                    document.querySelector(".idsp").parentElement.querySelector(".error-message").innerHTML = "ID sản phẩm đã tồn tại";
                    document.querySelector(".idsp").parentElement.querySelector(".error-message").style.color = "red";
                    return false;

                } else {
                    document.querySelector(".idsp").parentElement.querySelector(".error-message").innerHTML = "";
                    document.querySelector(".tensp").parentElement.querySelector(".error-message").innerHTML = "";
                    document.querySelector(".hinhsp").parentElement.querySelector(".error-message").innerHTML = "";
                }

            }

        }
    }
    var checkId = document.querySelector(".idsp").parentElement.querySelector(".error-message").innerText;
    var checkTen = document.querySelector(".tensp").parentElement.querySelector(".error-message").innerText;
    var checkHinh = document.querySelector(".hinhsp").parentElement.querySelector(".error-message").innerText;
    console.log(checkId, checkTen, checkHinh);
    var Nike = JSON.parse(localStorage.getItem("Nike"));
    var Adidas = JSON.parse(localStorage.getItem("Adidas"));
    var Puma = JSON.parse(localStorage.getItem("Puma"));
    var Converse = JSON.parse(localStorage.getItem("Converse"));
    var Vans = JSON.parse(localStorage.getItem("Vans"));
    var sanpham = JSON.parse(localStorage.getItem("sanPham"));
    if (checkId === "" && checkTen === "" && checkHinh === "") { // không bị trùng => chỉnh sửa 
        if (document.querySelector(".hangsp").value === brand) { // Trường hợp không sửa lại brand
            if (brand === "Nike") {
                Nike.forEach(function(value, index) {
                    if (value.productId === productID) {
                        value.productId = masp;
                        value.name = tensp;
                        value.img = hinhsp;
                        value.quantity = parseInt(slsp);
                        value.price = parseInt(giasp);
                        value.detail = motasp;
                        value.color = color;
                        value.size = size;
                    }
                });
                localStorage.setItem("Nike", JSON.stringify(Nike));

            } else if (brand === "Adidas") {
                Adidas.forEach(function(value, index) {
                    if (value.productId === productID) {
                        value.productId = masp;
                        value.name = tensp;
                        value.img = hinhsp;
                        value.quantity = parseInt(slsp);
                        value.price = parseInt(giasp);
                        value.detail = motasp;
                        value.color = color;
                        value.size = size;
                    }
                });
                localStorage.setItem("Adidas", JSON.stringify(Adidas));

            } else if (brand === "Puma") {
                Puma.forEach(function(value, index) {
                    if (value.productId === productID) {
                        value.productId = masp;
                        value.name = tensp;
                        value.img = hinhsp;
                        value.quantity = parseInt(slsp);
                        value.price = parseInt(giasp);
                        value.detail = motasp;
                        value.color = color;
                        value.size = size;
                    }
                });
                localStorage.setItem("Puma", JSON.stringify(Puma));

            } else if (brand === "Converse") {
                Converse.forEach(function(value, index) {
                    if (value.productId === productID) {
                        value.productId = masp;
                        value.name = tensp;
                        value.img = hinhsp;
                        value.quantity = parseInt(slsp);
                        value.price = parseInt(giasp);
                        value.detail = motasp;
                        value.color = color;
                        value.size = size;
                    }
                });
                localStorage.setItem("Converse", JSON.stringify(Converse));

            } else if (brand === "Vans") {
                Vans.forEach(function(value, index) {
                    if (value.productId === productID) {
                        value.productId = masp;
                        value.name = tensp;
                        value.img = hinhsp;
                        value.quantity = parseInt(slsp);
                        value.price = parseInt(giasp);
                        value.detail = motasp;
                        value.color = color;
                        value.size = size;
                    }
                });
                localStorage.setItem("Vans", JSON.stringify(Vans));

            }

        } else { // Trường hợp sửa lại brand ==> Bỏ sản phẩm ở brand cũ, thêm sản phẩm ở brand mới
            // Bỏ sản phẩm ở brand cũ: biến brand là brand cũ, biến hãng là brand mới set lại
            if (brand === "Nike") {
                for (var i = 0; i < Nike.length; i++) {
                    if (Nike[i].productId == productID) {
                        Nike.splice(i, 1);
                        break;
                    }
                }
            } else if (brand === "Adidas") {
                for (var i = 0; i < Adidas.length; i++) {
                    if (Adidas[i].productId === productID) {
                        Adidas.splice(i, 1);
                        break;
                    }
                }

            } else if (brand === "Puma") {
                for (var i = 0; i < Puma.length; i++) {
                    if (Puma[i].productId === productID) {
                        Puma.splice(i, 1);
                        break;
                    }
                }

            } else if (brand === "Converse") {
                for (var i = 0; i < Converse.length; i++) {
                    if (Converse[i].productId === productID) {
                        Converse.splice(i, 1);
                        break;
                    }
                }

            } else {
                for (var i = 0; i < Vans.length; i++) {
                    if (Vans[i].productId === productID) {
                        Vans.splice(i, 1);
                        break;
                    }
                }

            }

            // Thêm sản phẩm ở brand mới
            if (hang === "Nike") {
                Nike.push({
                    productId: masp,
                    brand: hang,
                    img: hinhsp,
                    name: tensp,
                    price: parseInt(giasp),
                    quantity: parseInt(slsp),
                    detail: motasp,
                    color: color,
                    size: size,
                })
                console.log(Nike);
            } else if (hang === "Adidas") {
                Adidas.push({
                    productId: masp,
                    brand: hang,
                    img: hinhsp,
                    name: tensp,
                    price: parseInt(giasp),
                    quantity: parseInt(slsp),
                    detail: motasp,
                    color: color,
                    size: size,
                })
                console.log(Adidas);
            } else if (hang === "Puma") {
                Puma.push({
                    productId: masp,
                    brand: hang,
                    img: hinhsp,
                    name: tensp,
                    price: parseInt(giasp),
                    quantity: parseInt(slsp),
                    detail: motasp,
                    color: color,
                    size: size,
                })
                console.log(Puma);
            } else if (hang === "Converse") {
                Converse.push({
                    productId: masp,
                    brand: hang,
                    img: hinhsp,
                    name: tensp,
                    price: parseInt(giasp),
                    quantity: parseInt(slsp),
                    detail: motasp,
                    color: color,
                    size: size,
                })
                console.log(Converse);
            } else {
                Vans.push({
                    productId: masp,
                    brand: hang,
                    img: hinhsp,
                    name: tensp,
                    price: parseInt(giasp),
                    quantity: parseInt(slsp),
                    detail: motasp,
                    color: color,
                    size: size,
                })
                console.log(Vans);
            }
        }
        sanpham = [Adidas, Nike, Puma, Converse, Vans];
        localStorage.setItem("Nike", JSON.stringify(Nike));
        localStorage.setItem("Adidas", JSON.stringify(Adidas));
        localStorage.setItem("Puma", JSON.stringify(Puma));
        localStorage.setItem("Converse", JSON.stringify(Converse));
        localStorage.setItem("Vans", JSON.stringify(Vans));
        localStorage.setItem("sanPham", JSON.stringify(sanpham));
        alert("Thiết Lập Thành Công!");
        closeEdit();
        quanlysanpham(); // vừa chỉnh sửa xong load lại trang sản phẩm để cập nhật sản phẩm vừa chỉnh sửa
    }
}

function doiHinh(event) {
    event.stopPropagation();
    event.preventDefault();

    var files = event.target.files;
    var file = files[0];

    var fileReader = new FileReader();

    fileReader.onload = function(progressEvent) {
        var url = fileReader.result;

        var myImg = document.getElementById("form-edit").querySelector(".hinhsp");
        myImg.src = url;
    }
    fileReader.readAsDataURL(file);
}




function deletesp(button) {
    document.getElementById("deleteSP").style.display = "block";
    var hang = button.parentElement.parentElement.querySelector(".brand").innerText;
    var ten = button.parentElement.parentElement.querySelector(".name").innerText;
    var ma = button.parentElement.parentElement.querySelector(".productID").innerText;
    var soluong = parseInt(button.parentElement.parentElement.querySelector(".quantity").innerText);

    var s = `
        <p class="hang">${hang}</p>
        <p class="ten">${ten}</p>
        <p class="ma">${ma}</p>
        <p class="soluong">Số Lượng Xóa <br></p>
        <select name="" id="chon">

        </select>
    `;
    document.getElementById("thongtin-xoa").innerHTML = s;
    s = "";
    for (let index = 1; index <= soluong; index++) {
        s += `<option value="${index}">${index}</option>`
    }
    document.getElementById("chon").innerHTML = s;
}

var DeleteContainer = document.getElementById("main-delete");
DeleteContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

function closeDelete() {
    document.getElementById("deleteSP").style.display = "none";
}

function thietlapDelete() {
    var soluong = parseInt(document.getElementById("chon").value);
    var max = parseInt(document.getElementById("chon").lastElementChild.innerText);
    var brand = document.getElementById("thongtin-xoa").querySelector(".hang").innerText;
    var productId = document.getElementById("thongtin-xoa").querySelector(".ma").innerText;

    var sanPham = JSON.parse(localStorage.getItem("sanPham"));
    var Nike = JSON.parse(localStorage.getItem("Nike"));
    var Adidas = JSON.parse(localStorage.getItem("Adidas"));
    var Puma = JSON.parse(localStorage.getItem("Puma"));
    var Converse = JSON.parse(localStorage.getItem("Converse"));
    var Vans = JSON.parse(localStorage.getItem("Vans"));

    if (brand === "Nike") {
        var mang = JSON.parse(localStorage.getItem("Nike"));
    } else if (brand === "Adidas") {
        var mang = JSON.parse(localStorage.getItem("Adidas"));
    } else if (brand === "Puma") {
        var mang = JSON.parse(localStorage.getItem("Puma"));
    } else if (brand === "Converse") {
        var mang = JSON.parse(localStorage.getItem("Converse"));
    } else {
        var mang = JSON.parse(localStorage.getItem("Vans"));
    }

    console.log(mang);
    if (soluong === max) {
        mang.forEach(function(value, index) {
            if (value.productId === productId) {
                mang.splice(index, 1);
            }
        });
        console.log("sau khi xóa hết", mang);
    } else {
        mang.forEach(function(value, index) {
            if (value.productId === productId) {
                value.quantity = value.quantity - soluong;
            }
        });
        console.log("sau khi xóa số lượng", mang);
    }


    if (brand === "Adidas") {
        sanPham = [mang, Nike, Puma, Converse, Vans];
        localStorage.setItem("Adidas", JSON.stringify(mang));
    } else if (brand === "Nike") {
        sanPham = [Adidas, mang, Puma, Converse, Vans];
        localStorage.setItem("Nike", JSON.stringify(mang));
    } else if (brand === "Puma") {
        sanPham = [Adidas, Nike, mang, Converse, Vans];
        localStorage.setItem("Puma", JSON.stringify(mang));
    } else if (brand === "Converse") {
        sanPham = [Adidas, Nike, Puma, mang, Vans];
        localStorage.setItem("Converse", JSON.stringify(mang));
    } else {
        sanPham = [Adidas, Nike, Puma, Converse, mang];
        localStorage.setItem("Vans", JSON.stringify(mang));
    }
    console.log(sanPham);
    localStorage.setItem("sanPham", JSON.stringify(sanPham));
    alert("Xóa thành công!");
    closeDelete();
    quanlysanpham(); // vừa chỉnh sửa xong load lại trang sản phẩm để cập nhật sản phẩm vừa chỉnh sửa
}


function addsp() {
    document.getElementById("addSP").style.display = "block";
}

function closeAdd() {
    document.getElementById("addSP").style.display = "none";
    document.getElementById("form-add").querySelector(".tensp").value = "";
    document.getElementById("form-add").querySelector(".idsp").value = "";
    document.getElementById("form-add").querySelector(".hinhsp").src = "";
    document.getElementById("form-add").querySelector(".hinhsp").style.display = "none";
    document.getElementById("form-add").querySelector(".slsp").value = "";
    document.getElementById("form-add").querySelector(".giasp").value = "";
    document.getElementById("form-add").querySelector(".motasp").value = "";
    var arr = document.getElementById("form-add").querySelectorAll(".error");
    for (const a of arr) {
        a.innerHTML = "";
    }
    var color = document.getElementById("form-add").querySelector(".color").querySelectorAll("li");
    var size = document.getElementById("form-add").querySelector(".size").querySelectorAll("li");
    for (const a of color) {
        if (a.classList.contains("active")) {
            a.classList.remove("active");
        }
    }
    for (const a of size) {
        if (a.classList.contains("active")) {
            a.classList.remove("active");
        }
    }
}


function doiHinh1(event) {
    event.stopPropagation();
    event.preventDefault();

    var files = event.target.files;
    var file = files[0];

    var fileReader = new FileReader();

    fileReader.onload = function(progressEvent) {
        var url = fileReader.result;
        document.getElementById("form-add").querySelector(".hinhsp").style.display = "block";
        var myImg = document.getElementById("form-add").querySelector(".hinhsp");
        myImg.src = url;
    }
    fileReader.readAsDataURL(file);
}

function ktSoLuong2() {
    var check = parseInt(document.getElementById("form-add").querySelector(".slsp").value);
    if (check >= 1) {
        return check;
    }
    return false;
}



function ktGia2() {
    var check = parseInt(document.getElementById("form-add").querySelector(".giasp").value);
    if (check >= 1000) {
        return check;
    }
    return false;
}

function thietlapAdd() {
    var hang = document.getElementById("form-add").querySelector(".hangsp").value;
    var tensp = document.getElementById("form-add").querySelector(".tensp").value;
    var masp = document.getElementById("form-add").querySelector(".idsp").value;
    var hinhsp = document.getElementById("form-add").querySelector(".hinhsp").getAttribute("src");
    var slsp = ktSoLuong2();
    var giasp = ktGia2();
    var motasp = document.getElementById("form-add").querySelector(".motasp").value;
    var mausp = document.getElementById("mausp").querySelectorAll("li");
    var sizesp = document.getElementById("sizesp").querySelectorAll("li");
    var color = [];
    var size = [];
    for (const a of mausp) {
        if (a.classList.contains("active")) {
            color.push(a.querySelector("span").innerText);
        }
    }
    for (const a of sizesp) {
        if (a.classList.contains("active")) {
            size.push(parseInt(a.innerText));
        }
    }

    // Kiểm tra để trống thông tin
    var mang = document.getElementById("form-add").querySelectorAll(".check");
    for (let a of mang) {
        if (a.classList.contains("tensp") && tensp === "") {
            a.parentElement.querySelector(".error").innerText = "Vui lòng nhập tên sản phẩm!";
            a.parentElement.querySelector(".error").style.color = "red";
            return;
        } else if (a.classList.contains("idsp") && masp === "") {
            a.parentElement.querySelector(".error").innerText = "Vui lòng nhập ID sản phẩm!";
            a.parentElement.querySelector(".error").style.color = "red";
            return;
        } else if (a.classList.contains("hinhsp") && hinhsp === "") {
            a.parentElement.querySelector(".error").innerText = "Vui lòng nhập ID sản phẩm!";
            a.parentElement.querySelector(".error").style.color = "red";
            return;
        } else if (a.classList.contains("slsp") && slsp === false) {
            a.parentElement.querySelector(".error").innerText = "Vui lòng nhập Đúng số lượng sản phẩm!";
            a.parentElement.querySelector(".error").style.color = "red";
            return;
        } else if (a.classList.contains("giasp") && giasp === false) {
            a.parentElement.querySelector(".error").innerText = "Vui lòng nhập Đúng giá sản phẩm!";
            a.parentElement.querySelector(".error").style.color = "red";
            return;
        } else if (a.classList.contains("color") && color.length === 0) {
            a.parentElement.querySelector(".error").innerText = "Vui lòng chọn màu sản phẩm!";
            a.parentElement.querySelector(".error").style.color = "red";
            return;
        } else if (a.classList.contains("size") && size.length === 0) {
            a.parentElement.querySelector(".error").innerText = "Vui lòng chọn size sản phẩm!";
            a.parentElement.querySelector(".error").style.color = "red";
            return;

        } else if (a.classList.contains("motasp") && motasp === "") {
            a.parentElement.querySelector(".error").innerText = "Vui lòng nhập mô tả sản phẩm!";
            a.parentElement.querySelector(".error").style.color = "red";
            return;
        } else {
            a.parentElement.querySelector(".error").innerText = "";
            a.parentElement.querySelector(".error").style.color = "white";
        }
    }





    //Kiểm tra trùng thông tin với các sản phẩm trước
    var arr = JSON.parse(localStorage.getItem("sanPham"));
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j].name === tensp) {
                document.getElementById("form-add").querySelector(".idsp").parentElement.querySelector(".error").innerHTML = "";
                document.getElementById("form-add").querySelector(".tensp").parentElement.querySelector(".error").innerHTML = "Tên sản phẩm đã tồn tại";
                document.getElementById("form-add").querySelector(".tensp").parentElement.querySelector(".error").style.color = "red";
                return false;
            } else if (arr[i][j].productId === masp) {
                document.getElementById("form-add").querySelector(".tensp").parentElement.querySelector(".error").innerHTML = "";
                document.getElementById("form-add").querySelector(".idsp").parentElement.querySelector(".error").innerHTML = "ID sản phẩm đã tồn tại";
                document.getElementById("form-add").querySelector(".idsp").parentElement.querySelector(".error").style.color = "red";
                return false;

            } else {
                document.getElementById("form-add").querySelector(".idsp").parentElement.querySelector(".error").innerHTML = "";
                document.getElementById("form-add").querySelector(".tensp").parentElement.querySelector(".error").innerHTML = "";
            }
        }
    }
    var checkId = document.getElementById("form-add").querySelector(".idsp").parentElement.querySelector(".error").innerText;
    var checkTen = document.getElementById("form-add").querySelector(".tensp").parentElement.querySelector(".error").innerText;
    var Nike = JSON.parse(localStorage.getItem("Nike"));
    var Adidas = JSON.parse(localStorage.getItem("Adidas"));
    var Puma = JSON.parse(localStorage.getItem("Puma"));
    var Converse = JSON.parse(localStorage.getItem("Converse"));
    var Vans = JSON.parse(localStorage.getItem("Vans"));
    var sanpham = JSON.parse(localStorage.getItem("sanPham"));

    if (checkId === "" && checkTen === "") {
        if (hang === "Nike") {
            Nike.push({
                productId: masp,
                brand: hang,
                img: hinhsp,
                name: tensp,
                price: giasp,
                quantity: slsp,
                detail: motasp,
                color: color,
                size: size,
            });
            console.log(Nike);
        } else if (hang === "Adidas") {
            Adidas.push({
                productId: masp,
                brand: hang,
                img: hinhsp,
                name: tensp,
                price: giasp,
                quantity: slsp,
                detail: motasp,
                color: color,
                size: size,
            });
            console.log(Adidas);
        } else if (hang === "Puma") {
            Puma.push({
                productId: masp,
                brand: hang,
                img: hinhsp,
                name: tensp,
                price: giasp,
                quantity: slsp,
                detail: motasp,
                color: color,
                size: size,
            });
            console.log(Puma);
        } else if (hang === "Converse") {
            Converse.push({
                productId: masp,
                brand: hang,
                img: hinhsp,
                name: tensp,
                price: giasp,
                quantity: slsp,
                detail: motasp,
                color: color,
                size: size,
            });
            console.log(Converse);
        } else {
            Vans.push({
                productId: masp,
                brand: hang,
                img: hinhsp,
                name: tensp,
                price: giasp,
                quantity: slsp,
                detail: motasp,
                color: color,
                size: size,
            });
            console.log(Vans);
        }

        sanpham = [Adidas, Nike, Puma, Converse, Vans];
        localStorage.setItem("Nike", JSON.stringify(Nike));
        localStorage.setItem("Adidas", JSON.stringify(Adidas));
        localStorage.setItem("Puma", JSON.stringify(Puma));
        localStorage.setItem("Converse", JSON.stringify(Converse));
        localStorage.setItem("Vans", JSON.stringify(Vans));
        localStorage.setItem("sanPham", JSON.stringify(sanpham));


        alert("Thiết Lập Thành Công!");
        closeAdd();
        quanlysanpham(); // vừa chỉnh sửa xong load lại trang sản phẩm để cập nhật sản phẩm vừa chỉnh sửa
    }
}






function quanlydonhang() {
    var s = `
    <nav>
    <div class="tab-menu">
        <div class="tab-item active">
            <div><a href="#" id="chuaXL" onclick="quanlydonhang();">Chưa Xử Lý</a></div>
        </div>

        <div class="tab-item">
            <div><a href="#" id="DaXL" onclick="donhangDaDuyet();">Đã Xử Lý</a></div>
        </div>

    </div>
    </nav>
    <div class = "content">
    
    </div>`;
    document.getElementById("container").innerHTML = s;

    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var string = "";
    var s = "";
    var sttchuaXuLy = 0;
    var tong = 0;
    var find = false;
    for (const a of listDonHang) {
        for (const b of a.donhang) {
            if (b.duocDuyet === false) {
                find = true;
                break;
            }
        }
    }
    if (!find) {
        document.querySelector(".content").innerHTML = "Không có dữ liệu";
        return;
    } else {
        document.querySelector(".content").innerHTML = ` 
        <h1 id = "title-chuaXuLy"> Các Đơn Hàng Chưa Xử Lý </h1>
        <table id = "quanlydonhang-chuaXuLy">
            <thead>
                <th> STT </th> 
                <th> Mã Đơn Hàng </th> 
                <th> Tên Khách Hàng </th> 
                <th> Số Điện Thoại </th> 
                <th> Sản Phẩm </th> 
                <th> Thành Tiền </th> 
                <th> Ngày Đặt </th> 
                <th> Chi Tiết </th> 
                <th> Action </th> 
            </thead>
            <tbody id = "table-chuaXuLy" >

            </tbody>

            <tfoot >
                <tr>
                    <td colspan = "10"><button onclick = "duyetHetDonHang();"> Duyệt Hết</button></td>
                </tr>
            </tfoot> 
        </table>`;
    }

    for (var a of listDonHang) {
        if (a.donhang.length !== 0) { // có đơn hàng mới hiện
            var name = a.name;
            for (var i = 0; i < a.donhang.length; i++) { // từng đơn hàng
                if (a.donhang[i].duocDuyet === false) { // Chưa được duyệt ==> In trong table-chuaXuLy
                    var check = true;
                    for (var j = 0; j < a.donhang[i].giohang.length; j++) { // từng sản phẩm trong giỏ hàng của từng đơn hàng
                        if (ktSanPham(name, a.donhang[i].giohang[j].nameProduct, a.donhang[i].giohang[j].quantity) === false) {
                            check = false;
                        }

                        s += `<span class ="Ten">${a.donhang[i].giohang[j].nameProduct}</span>-
                        <span class = "Mau">(${a.donhang[i].giohang[j].color})</span>-
                        <span class = "Size">(${a.donhang[i].giohang[j].size})</span>-
                        <span class = "SoLuong">(${a.donhang[i].giohang[j].quantity})</span><br>`;
                        tong += parseInt(a.donhang[i].giohang[j].money);
                    }
                    var tongVND = new Intl.NumberFormat("VietNam-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(tong);
                    var date = new Date(a.donhang[i].gioDat);
                    var m = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "-" +
                        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                    console.log("KQ", check);
                    if (check) {
                        string = `
                        <tr>
                            <td>${++sttchuaXuLy}</td>
                            <td class="maDonHang">${a.donhang[i].madh}</td>
                            <td class="tenKhachHang">${a.name}</td>
                            <td class="sdtKhachHang">${a.sdt}</td>
                            <td class="SanPham">
                                ${s}
                            </td>
                            <td class="ThanhTien">${tongVND}</td>
                            <td class="ngayDat">${m}</td>
                            <td>
                                <button onclick="chiTietDonHang(this);">Chi Tiết</button>
                            </td>
                            <td>
                                <button onclick="duyetDonHang(this);">Duyệt</button>
                            </td>
                        </tr>`;
                    } else {
                        string = `
                        <tr style="background-color:red;">
                            <td>${++sttchuaXuLy}</td>
                            <td class="maDonHang">${a.donhang[i].madh}</td>
                            <td class="tenKhachHang">${a.name}</td>
                            <td class="sdtKhachHang">${a.sdt}</td>
                            <td class="SanPham">
                                ${s}
                            </td>
                            <td class="ThanhTien">${tongVND}</td>
                            <td class="ngayDat">${m}</td>
                            <td>
                                <button onclick="chiTietDonHang(this);">Chi Tiết</button>
                            </td>
                            <td>
                                <button onclick="duyetDonHang(this);">Duyệt</button>
                                <button onclick="loiDonHang(this);" style="background-color:black;color:white;">Hủy</button>
                            </td>
                        </tr>`;
                    }
                    document.getElementById("table-chuaXuLy").innerHTML += string;
                    s = "";
                    tong = 0;
                }
            }
        }
    }


}

function loiDonHang(button) {
    document.getElementById("guiThongBao").style.display = "block";
    var ten = button.parentElement.parentElement.querySelector(".tenKhachHang").innerText;
    var madh = button.parentElement.parentElement.querySelector(".maDonHang").innerText;
    var sdt = button.parentElement.parentElement.querySelector(".sdtKhachHang").innerText;
    document.getElementById("chiTietThongBao").innerHTML =
        `<table id="thongtinkhach">
            <thead>
                <tr>
                    <th>Họ Tên</th>
                    <th>Số Điện Thoại</th>
                    <th>Mã Đơn Hàng</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="ten">${ten}</td>
                    <td class="sdt">${sdt}</td>
                    <td class="madh">${madh}</td>
                </tr>
            </tbody>
        </table>
        <textarea name="" id="" cols="50" rows="10" placeholder="viết gì đó..."></textarea>
        <button onclick="xacNhanBaoLoi(this);">Xác Nhận</button>`;
    document.getElementById("chiTietThongBao").querySelector("textarea").value = `
    Chào ${ten}, Shop thành thật xin lỗi bạn đơn hàng ${madh} của bạn đã bị hủy do có sản phẩm trùng với khách hàng khác!`;

}


function xacNhanBaoLoi(button) {
    var ten = button.parentElement.querySelector(".ten").innerText;
    var madh = button.parentElement.querySelector(".madh").innerText;
    var ghiChu = button.parentElement.querySelector("textarea").value;
    console.log(ten, madh, ghiChu);
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    for (const a of listDonHang) {
        if (a.name === ten) {
            for (const b of a.donhang) {
                var date = new Date();
                if (b.madh === madh) {
                    b.duocDuyet = true;
                    b.gioDuyet = date;
                    b.ghiChu = ghiChu;
                }
            }
        }
    }
    alert("Thành Công");
    document.getElementById("guiThongBao").style.display = "none";
    localStorage.setItem("listDonHang", JSON.stringify(listDonHang));
    quanlydonhang();
}

function dongThongBao() {
    document.getElementById("guiThongBao").style.display = "none";
    document.getElementById("chiTietThongBao").innerHTML = "";
}
// kiểm tra những đơn hàng có sản phẩm trùng nhau mà vượt quá số lượng sản phẩm trong shop
function ktSanPham(name, nameProduct, quantity) {
    console.log(name, nameProduct, quantity);
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var tongSL = quantity;
    var SoLuongSanPham = 0;
    for (const a of listDonHang) {
        if (a.name !== name) {
            for (const b of a.donhang) {
                if (b.duocDuyet === false) {
                    for (const c of b.giohang) {
                        if (c.nameProduct === nameProduct) {
                            tongSL += c.quantity;
                        }
                    }
                }
            }
        }

    }
    var sanPham = JSON.parse(localStorage.getItem("sanPham"));
    for (const a of sanPham) {
        for (const b of a) {
            if (b.name === nameProduct) {
                SoLuongSanPham = b.quantity;
            }
        }
    }
    console.log(SoLuongSanPham);
    console.log("tong", tongSL);
    if (tongSL > SoLuongSanPham) {
        return false;
    }
    return true;
}

function donhangDaDuyet() {
    var s = `
    <nav>
    <div class="tab-menu">
        <div class="tab-item">
            <div><a href="#" id="chuaXL" onclick="quanlydonhang();">Chưa Xử Lý</a></div>
        </div>

        <div class="tab-item active">
            <div><a href="#" id="DaXL" onclick="donhangDaDuyet();">Đã Xử Lý</a></div>
        </div>

    </div>
    </nav>
    <div class = "content">
    
    </div>`;
    document.getElementById("container").innerHTML = s;

    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var string = "";
    var s = "";
    var sttdaXuLy = 0;
    var tong = 0;
    var find = false;
    for (const a of listDonHang) {
        for (const b of a.donhang) {
            if (b.duocDuyet === true) {
                find = true;
                break;
            }
        }
    }
    if (!find) {
        document.querySelector(".content").innerHTML = "Không có dữ liệu";
        return;
    } else {
        document.querySelector(".content").innerHTML = ` 
        <h1 id="title-daXuLy">Các Đơn Hàng Đã Xử Lý</h1>
        <div class="btn">
            <button onclick = "toanbodonhang();">Toàn bộ</button>
            <button onclick="donhangtheotg(this)">Lọc</button>
            <input type="number" class="ngay" placeholder="ngày...">
            <input type="number" class="thang" placeholder="tháng...">
            <input type="number" class="nam" placeholder="năm...">
            <div class="baoloi"></div>
        </div>

        <table id="quanlydonhang-daXuLy">
            <thead>
                <th>STT</th>
                <th>Mã Đơn Hàng</th>
                <th>Tên Khách Hàng</th>
                <th>Số Điện Thoại</th>
                <th>Sản Phẩm</th>
                <th>Thành Tiền</th>
                <th>Ngày Đặt</th>
                <th>Ngày Duyệt</th>
                <th>Chi Tiết</th>
            </thead>

            <tbody id="table-daXuLy">

            </tbody>
        </table>`;
    }

    for (var a of listDonHang) {
        if (a.donhang.length !== 0) { // có đơn hàng mới hiện
            for (var i = 0; i < a.donhang.length; i++) { //ghi Chú === false là admin không hủy đơn hàng đó của khách ==> hủy thì sẽ ghi chú
                if (a.donhang[i].duocDuyet === true && a.donhang[i].ghiChu === false) { // Chưa được duyệt ==> In trong table-chuaXuLy
                    for (var j = 0; j < a.donhang[i].giohang.length; j++) {
                        s += `<span class="Ten">${a.donhang[i].giohang[j].nameProduct}</span>-
                        <span class="Mau">(${a.donhang[i].giohang[j].color})</span>-
                        <span class="Size">(${a.donhang[i].giohang[j].size})</span>-
                        <span class="SoLuong">(${a.donhang[i].giohang[j].quantity})</span><br>`;
                        tong += parseInt(a.donhang[i].giohang[j].money);
                    }
                    var tongVND = new Intl.NumberFormat("VietNam-VN", {
                        style: "currency",
                        currency: "VND",
                    }).format(tong);
                    var date = new Date(a.donhang[i].gioDat);
                    var date2 = new Date(a.donhang[i].gioDuyet);
                    var m = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "-" +
                        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                    var n = date2.getDate() + "-" + (date2.getMonth() + 1) + "-" + date2.getFullYear() + "-" +
                        date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds();
                    string = `
                    <tr>
                        <td>${++sttdaXuLy}</td>
                        <td class="maDonHang">${a.donhang[i].madh}</td>
                        <td class="tenKhachHang">${a.name}</td>
                        <td class="sdtKhachHang">${a.sdt}</td>
                        <td class="SanPham">
                            ${s}
                        </td>
                        <td class="ThanhTien">${tongVND}</td>
                        <td class="ngayDat">${m}</td>
                        <td class="ngayDuyet">${n}</td>
                        <td>
                            <button onclick="chiTietDonHang(this);">Chi Tiết</button>
                        </td>
                    </tr>`;
                    document.getElementById("table-daXuLy").innerHTML += string;
                    s = "";
                    tong = 0;
                }
            }
        }
    }
}

function toanbodonhang() {
    document.querySelector(".ngay").value = "";
    document.querySelector(".thang").value = "";
    document.querySelector(".nam").value = "";
    donhangDaDuyet();
}

function ngayThangNam(ngay, thang, nam) {
    document.getElementById("table-daXuLy").innerHTML = "";
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var string = "";
    var s = "";
    var sttdaXuLy = 0;
    var tong = 0;
    for (var a of listDonHang) {
        if (a.donhang.length !== 0) { // có đơn hàng mới hiện
            for (var i = 0; i < a.donhang.length; i++) {
                if (a.donhang[i].duocDuyet === true && a.donhang[i].ghiChu === false) { // Chưa được duyệt ==> In trong table-chuaXuLy
                    var date = new Date(a.donhang[i].gioDuyet);
                    var day = date.getDate();
                    var month = date.getMonth() + 1;
                    var year = date.getFullYear();
                    if (day == ngay && month == thang && year == nam) {
                        for (var j = 0; j < a.donhang[i].giohang.length; j++) {
                            s += `<span class="Ten">${a.donhang[i].giohang[j].nameProduct}</span>-
                            <span class="Mau">(${a.donhang[i].giohang[j].color})</span>-
                            <span class="Size">(${a.donhang[i].giohang[j].size})</span>-
                            <span class="SoLuong">(${a.donhang[i].giohang[j].quantity})</span><br>`;
                            tong += parseInt(a.donhang[i].giohang[j].money);
                        }
                        var tongVND = new Intl.NumberFormat("VietNam-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(tong);
                        var date = new Date(a.donhang[i].gioDat);
                        var date2 = new Date(a.donhang[i].gioDuyet);
                        var m = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "-" +
                            date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                        var n = date2.getDate() + "-" + (date2.getMonth() + 1) + "-" + date2.getFullYear() + "-" +
                            date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds();
                        string = `
                        <tr>
                            <td>${++sttdaXuLy}</td>
                            <td class="maDonHang">${a.donhang[i].madh}</td>
                            <td class="tenKhachHang">${a.name}</td>
                            <td class="sdtKhachHang">${a.sdt}</td>
                            <td class="SanPham">
                                ${s}
                            </td>
                            <td class="ThanhTien">${tongVND}</td>
                            <td class="ngayDat">${m}</td>
                            <td class="ngayDuyet">${n}</td>
                            <td>
                                <button onclick="chiTietDonHang(this);">Chi Tiết</button>
                            </td>
                        </tr>`;
                        document.getElementById("table-daXuLy").innerHTML += string;
                        s = "";
                        tong = 0;
                    }

                }
            }
        }
    }
}

function thangNam(thang, nam) {
    document.getElementById("table-daXuLy").innerHTML = "";
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var string = "";
    var s = "";
    var sttdaXuLy = 0;
    var tong = 0;
    for (var a of listDonHang) {
        if (a.donhang.length !== 0) { // có đơn hàng mới hiện
            for (var i = 0; i < a.donhang.length; i++) {
                if (a.donhang[i].duocDuyet === true && a.donhang[i].ghiChu === false) { // Chưa được duyệt ==> In trong table-chuaXuLy
                    var date = new Date(a.donhang[i].gioDuyet);
                    var month = date.getMonth() + 1;
                    var year = date.getFullYear();
                    if (month == thang && year == nam) {
                        for (var j = 0; j < a.donhang[i].giohang.length; j++) {
                            s += `<span class="Ten">${a.donhang[i].giohang[j].nameProduct}</span>-
                            <span class="Mau">(${a.donhang[i].giohang[j].color})</span>-
                            <span class="Size">(${a.donhang[i].giohang[j].size})</span>-
                            <span class="SoLuong">(${a.donhang[i].giohang[j].quantity})</span><br>`;
                            tong += parseInt(a.donhang[i].giohang[j].money);
                        }
                        var tongVND = new Intl.NumberFormat("VietNam-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(tong);
                        var date = new Date(a.donhang[i].gioDat);
                        var date2 = new Date(a.donhang[i].gioDuyet);
                        var m = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "-" +
                            date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                        var n = date2.getDate() + "-" + (date2.getMonth() + 1) + "-" + date2.getFullYear() + "-" +
                            date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds();
                        string = `
                        <tr>
                            <td>${++sttdaXuLy}</td>
                            <td class="maDonHang">${a.donhang[i].madh}</td>
                            <td class="tenKhachHang">${a.name}</td>
                            <td class="sdtKhachHang">${a.sdt}</td>
                            <td class="SanPham">
                                ${s}
                            </td>
                            <td class="ThanhTien">${tongVND}</td>
                            <td class="ngayDat">${m}</td>
                            <td class="ngayDuyet">${n}</td>
                            <td>
                                <button onclick="chiTietDonHang(this);">Chi Tiết</button>
                            </td>
                        </tr>`;
                        document.getElementById("table-daXuLy").innerHTML += string;
                        s = "";
                        tong = 0;
                    }

                }
            }
        }
    }
}

function namXacDinh(nam) {
    document.getElementById("table-daXuLy").innerHTML = "";
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var string = "";
    var s = "";
    var sttdaXuLy = 0;
    var tong = 0;
    console.log("1");
    for (var a of listDonHang) {
        if (a.donhang.length !== 0) { // có đơn hàng mới hiện
            for (var i = 0; i < a.donhang.length; i++) {
                if (a.donhang[i].duocDuyet === true && a.donhang[i].ghiChu === false) { // Chưa được duyệt ==> In trong table-chuaXuLy
                    var date = new Date(a.donhang[i].gioDuyet);
                    var year = date.getFullYear();
                    console.log(year, nam);
                    if (year == nam) {
                        for (var j = 0; j < a.donhang[i].giohang.length; j++) {
                            s += `<span class="Ten">${a.donhang[i].giohang[j].nameProduct}</span>-
                            <span class="Mau">(${a.donhang[i].giohang[j].color})</span>-
                            <span class="Size">(${a.donhang[i].giohang[j].size})</span>-
                            <span class="SoLuong">(${a.donhang[i].giohang[j].quantity})</span><br>`;
                            tong += parseInt(a.donhang[i].giohang[j].money);
                        }
                        var tongVND = new Intl.NumberFormat("VietNam-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(tong);
                        var date = new Date(a.donhang[i].gioDat);
                        var date2 = new Date(a.donhang[i].gioDuyet);
                        var m = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "-" +
                            date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                        var n = date2.getDate() + "-" + (date2.getMonth() + 1) + "-" + date2.getFullYear() + "-" +
                            date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getSeconds();
                        string = `
                        <tr>
                            <td>${++sttdaXuLy}</td>
                            <td class="maDonHang">${a.donhang[i].madh}</td>
                            <td class="tenKhachHang">${a.name}</td>
                            <td class="sdtKhachHang">${a.sdt}</td>
                            <td class="SanPham">
                                ${s}
                            </td>
                            <td class="ThanhTien">${tongVND}</td>
                            <td class="ngayDat">${m}</td>
                            <td class="ngayDuyet">${n}</td>
                            <td>
                                <button onclick="chiTietDonHang(this);">Chi Tiết</button>
                            </td>
                        </tr>`;
                        document.getElementById("table-daXuLy").innerHTML += string;
                        s = "";
                        tong = 0;
                    }

                }
            }
        }
    }
}

function donhangtheotg(button) {
    // Kiểm tra
    var date = new Date();
    var namhientai = date.getFullYear();
    var ngay = button.parentElement.querySelector(".ngay").value;
    var thang = button.parentElement.querySelector(".thang").value;
    var nam = button.parentElement.querySelector(".nam").value;
    var loi = button.parentElement.querySelector(".baoloi");

    if (nam === "" || nam < 2021 || nam > namhientai) {
        loi.innerText = "Lỗi rồi!";
        loi.style.color = "red";
        return;
    } else {
        if (thang === "") {
            loi.innerText = "";
            loi.style.color = "white";
            namXacDinh(nam);
        } else {
            if (thang < 1 || thang > 12) {
                loi.innerText = "Lỗi tháng";
                loi.style.color = "red";
                return;
            } else {
                if (ngay === "") {
                    loi.innerText = "";
                    loi.style.color = "white";
                    thangNam(thang, nam);
                } else {
                    if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
                        if (ngay < 1 || ngay > 30) {
                            loi.innerText = "Lỗi ngày";
                            loi.style.color = "red";
                        } else {

                            loi.innerText = "";
                            loi.style.color = "white";
                            ngayThangNam(ngay, thang, nam);
                        }
                    } else {
                        if (ngay < 1 || ngay > 31) {
                            loi.innerText = "Lỗi ngày";
                            loi.style.color = "red";
                        } else {
                            loi.innerText = "";
                            loi.style.color = "white";
                            ngayThangNam(ngay, thang, nam);
                        }
                    }
                }
            }
        }
    }

}


function dongChiTietDonHang() {
    document.getElementById("chiTietDonHang").style.display = "none";
}
var modalContainer = document.getElementById("main-chiTietDonHang");
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})

function chiTietDonHang(button) {
    document.getElementById("chiTietDonHang").style.display = "block";
    var tenKhachHang = button.parentElement.parentElement.querySelector(".tenKhachHang").innerText;
    var maDonHang = button.parentElement.parentElement.querySelector(".maDonHang").innerText;
    var email, sdt, ngayDat, ngayDuyet;
    var listSanPham = [];
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    for (const a of listDonHang) {
        if (a.name === tenKhachHang) {
            for (const b of a.donhang) {
                if (b.madh === maDonHang) {
                    listSanPham = b.giohang;
                    ngayDat = b.gioDat;
                    ngayDuyet = b.gioDuyet;
                }
            }
            email = a.email;
            sdt = a.sdt;
        }
    }
    document.getElementById("InfoKhachHang").querySelector(".ten").innerText = tenKhachHang;
    document.getElementById("InfoKhachHang").querySelector(".sdt").innerText = sdt;
    document.getElementById("InfoKhachHang").querySelector(".email").innerText = email;
    document.getElementById("InfoKhachHang").querySelector(".madh").innerText = maDonHang;
    var date = new Date(ngayDat);
    var string = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "-" +
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    document.getElementById("InfoKhachHang").querySelector(".ngayDat").innerText = string;
    if (ngayDuyet === false) {
        document.getElementById("InfoKhachHang").querySelector(".ngayDuyet").innerText = "Chờ Duyệt";

    } else {
        var date = new Date(ngayDuyet);
        var string = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "-" +
            date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        document.getElementById("InfoKhachHang").querySelector(".ngayDuyet").innerText = string;

    }


    var s = "";
    var stt = 0;
    var tong = 0;
    for (const a of listSanPham) {
        var priceVND = new Intl.NumberFormat("VietNam-VN", {
            style: "currency",
            currency: "VND",
        }).format(a.price);
        var moneyVND = new Intl.NumberFormat("VietNam-VN", {
            style: "currency",
            currency: "VND",
        }).format(a.money);
        s +=
            `<tr>
                <td>${++stt}</td>
                <td>${a.nameProduct}</td>
                <td><img src="${a.img}" alt=""></td>
                <td>${a.color}</td>
                <td>${a.size}</td>
                <td>${a.quantity}</td>
                <td>${priceVND}</td>
                <td>${moneyVND}</td>
            </tr>`;
        tong += a.money;
    }
    document.getElementById("donHangChiTiet").querySelector("tbody").innerHTML = s;
    var tongVND = new Intl.NumberFormat("VietNam-VN", {
        style: "currency",
        currency: "VND",
    }).format(tong);
    document.getElementById("donHangChiTiet").querySelector(".tongTienSanPham").innerHTML = tongVND;
}
/** Khi bấm duyệt
 * chuyển thuộc tính duocDuyet của đơn hàng =>true => in ra trong table listDonHang daXuLy
 * xóa số đi số lượng sản phẩm trên localStorage: Nike/Adidas/Puma/Converse/Vans , sanPham
 * inner vào Đơn hàng của trang người dùng đó thành đã xử lý
 */
function duyetDonHang(button) {

    var tenKhachHang = button.parentElement.parentElement.querySelector(".tenKhachHang").innerText;
    var maDonHang = button.parentElement.parentElement.querySelector(".maDonHang").innerText;
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var sanPham = JSON.parse(localStorage.getItem("sanPham"));
    var check = false;

    var listSanPham = [];
    var date = new Date();
    for (var a of listDonHang) {
        if (a.name === tenKhachHang) {
            for (var i = 0; i < a.donhang.length; i++) {
                if (a.donhang[i].madh === maDonHang && a.donhang[i].duocDuyet === false) {
                    listSanPham = a.donhang[i].giohang;
                }
            }
        }
    }
    var sl = 0;
    var sluong = 0;
    for (const a of listSanPham) {
        sl = a.quantity;
        for (const b of sanPham) {
            for (const c of b) {
                if (c.name === a.nameProduct) {
                    sluong = c.quantity;
                }
            }
        }
        if (sl > sluong) {
            console.log("Lỗi");
            return;
        }
    }

    alert("Duyệt Thành Công!");
    var daBan = localStorage.getItem("daBan") ? JSON.parse(localStorage.getItem("daBan")) : [];
    // Chuyển đơn hàng từ chưa xử lý sang xử lý


    var date = new Date();
    for (var a of listDonHang) {
        if (a.name === tenKhachHang) {
            for (var i = 0; i < a.donhang.length; i++) {
                if (a.donhang[i].madh === maDonHang) {
                    a.donhang[i].duocDuyet = true;
                    listSanPham = a.donhang[i].giohang;
                    a.donhang[i].gioDuyet = date;
                    for (const b of a.donhang[i].giohang) {
                        daBan.push({
                            nameProduct: b.nameProduct,
                            brand: b.brand,
                            img: b.img,
                            price: b.price,
                            quantity: b.quantity,
                            money: b.money,
                            ngayBan: a.donhang[i].gioDuyet,
                        });
                    }
                }
            }
        }
    }
    localStorage.setItem("listDonHang", JSON.stringify(listDonHang));
    localStorage.setItem("daBan", JSON.stringify(daBan));





    // Xóa đi số lượng sản phẩm hiện có
    var Nike = JSON.parse(localStorage.getItem("Nike"));
    var Adidas = JSON.parse(localStorage.getItem("Adidas"));
    var Puma = JSON.parse(localStorage.getItem("Puma"));
    var Converse = JSON.parse(localStorage.getItem("Converse"));
    var Vans = JSON.parse(localStorage.getItem("Vans"));
    var sanPham = JSON.parse(localStorage.getItem("sanPham"));

    for (var a of listSanPham) { // so sánh từng sản phẩm trong giỏ hàng của đơn hàng đã duyệt để trừ với số sản phẩm tương ứng có trong csdl
        for (var i = 0; i < sanPham.length; i++) {
            for (var j = 0; j < sanPham[i].length; j++) {
                if (a.nameProduct === sanPham[i][j].name) {
                    if (a.quantity === sanPham[i][j].quantity) { // mua hết số lượng sản phẩm hiện có ==> xóa hết số sản phẩm đó
                        // Xóa ở các mảng sản phẩm
                        if (sanPham[i][j].brand === "Nike") {
                            Nike.splice(j, 1);
                        } else if (sanPham[i][j].brand === "Adidas") {
                            Adidas.splice(j, 1);
                        } else if (sanPham[i][j].brand === "Puma") {
                            Puma.splice(j, 1);
                        } else if (sanPham[i][j].brand === "Converse") {
                            Converse.splice(j, 1);
                        } else {
                            Vans.splice(j, 1);
                        }
                    } else { // mua 1 số lượng của sản phẩm ==> cập nhật lại số lượng sản phẩm

                        if (sanPham[i][j].brand === "Nike") {
                            Nike[j].quantity -= a.quantity;

                        } else if (sanPham[i][j].brand === "Adidas") {
                            Adidas[j].quantity -= a.quantity;

                        } else if (sanPham[i][j].brand === "Puma") {
                            Puma[j].quantity -= a.quantity;

                        } else if (sanPham[i][j].brand === "Converse") {
                            Converse[j].quantity -= a.quantity;

                        } else {
                            Vans[j].quantity -= a.quantity;

                        }
                    }

                }
            }
        }

    }

    sanPham = [Adidas, Nike, Puma, Converse, Vans];
    localStorage.setItem("Nike", JSON.stringify(Nike));
    localStorage.setItem("Adidas", JSON.stringify(Adidas));
    localStorage.setItem("Puma", JSON.stringify(Puma));
    localStorage.setItem("Converse", JSON.stringify(Converse));
    localStorage.setItem("Vans", JSON.stringify(Vans));
    localStorage.setItem("sanPham", JSON.stringify(sanPham));
    quanlydonhang();


}

function xoaSanPham(b) {
    var Nike = JSON.parse(localStorage.getItem("Nike"));
    var Adidas = JSON.parse(localStorage.getItem("Adidas"));
    var Puma = JSON.parse(localStorage.getItem("Puma"));
    var Converse = JSON.parse(localStorage.getItem("Converse"));
    var Vans = JSON.parse(localStorage.getItem("Vans"));
    var sanPham = JSON.parse(localStorage.getItem("sanPham"));


    for (var i = 0; i < sanPham.length; i++) {
        for (var j = 0; j < sanPham[i].length; j++) {
            if (b.nameProduct === sanPham[i][j].name) {
                if (b.quantity === sanPham[i][j].quantity) { // mua hết số lượng sản phẩm hiện có ==> xóa hết số sản phẩm đó
                    // Xóa ở các mảng sản phẩm
                    if (sanPham[i][j].brand === "Nike") {
                        Nike.splice(j, 1);
                    } else if (sanPham[i][j].brand === "Adidas") {
                        Adidas.splice(j, 1);
                    } else if (sanPham[i][j].brand === "Puma") {
                        Puma.splice(j, 1);
                    } else if (sanPham[i][j].brand === "Converse") {
                        Converse.splice(j, 1);
                    } else {
                        Vans.splice(j, 1);
                    }
                } else { // mua 1 số lượng của sản phẩm ==> cập nhật lại số lượng sản phẩm

                    if (sanPham[i][j].brand === "Nike") {
                        Nike[j].quantity -= b.quantity;

                    } else if (sanPham[i][j].brand === "Adidas") {
                        Adidas[j].quantity -= b.quantity;

                    } else if (sanPham[i][j].brand === "Puma") {
                        Puma[j].quantity -= b.quantity;

                    } else if (sanPham[i][j].brand === "Converse") {
                        Converse[j].quantity -= b.quantity;

                    } else {
                        Vans[j].quantity -= b.quantity;

                    }
                }

            }
        }
    }

    sanPham = [Adidas, Nike, Puma, Converse, Vans];
    localStorage.setItem("Nike", JSON.stringify(Nike));
    localStorage.setItem("Adidas", JSON.stringify(Adidas));
    localStorage.setItem("Puma", JSON.stringify(Puma));
    localStorage.setItem("Converse", JSON.stringify(Converse));
    localStorage.setItem("Vans", JSON.stringify(Vans));
    localStorage.setItem("sanPham", JSON.stringify(sanPham));
}

function duyetHetDonHang() {
    var arr = document.getElementById("table-chuaXuLy").querySelectorAll("tr");
    for (const a of arr) {
        if (a.style.backgroundColor === "red") {
            return;
        }
    }
    alert("Đã Duyệt Hết!");
    var date = new Date();
    var daBan = localStorage.getItem("daBan") ? JSON.parse(localStorage.getItem("daBan")) : [];
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));

    for (var a of listDonHang) {
        if (a.donhang.length !== 0) {
            for (var i = 0; i < a.donhang.length; i++) {
                if (a.donhang[i].duocDuyet === false) {
                    a.donhang[i].duocDuyet = true;
                    a.donhang[i].gioDuyet = date;
                    for (const b of a.donhang[i].giohang) {
                        daBan.push({
                            nameProduct: b.nameProduct,
                            brand: b.brand,
                            img: b.img,
                            price: b.price,
                            quantity: b.quantity,
                            money: b.money,
                            ngayBan: date,
                        });
                        xoaSanPham(b);
                    }


                }
            }
        }
    }
    localStorage.setItem("listDonHang", JSON.stringify(listDonHang));
    localStorage.setItem("daBan", JSON.stringify(daBan));

    quanlydonhang();
}




function thongkekinhdoanh() {
    document.getElementById("container").innerHTML =
        `
        <div id="thongkekinhdoanh">
        <h1 id="title">Thống kê kinh doanh</h1>
        <div class="selector-thongke">
            <button id="toanbo-active" class="toanbo" onclick="choose(this);">Toàn bộ</button>
            <button id="loc-active" class="loc" onclick="choose(this);">Lọc</button>
            <input type="number" id="ngay-check" class="ngay" placeholder="ngày...">
            <input type="number" id="thang-check" class="thang" placeholder="tháng...">
            <input type="number" id="nam-check" class="nam" placeholder="năm...">
            <div class="baoloi"></div>
        </div>
        <div class="selector-sanpham">
            <button onclick="thongke(this);">Toàn Bộ Sản Phẩm</button>
            <button onclick="thongke(this)">Adidas</button>
            <button onclick="thongke(this)">Nike</button>
            <button onclick="thongke(this)">Puma</button>
            <button onclick="thongke(this)">Converse</button>
            <button onclick="thongke(this)">Vans</button>
        </div>
        <div id="content">
            <table id="table-thongke">
                <caption></caption>
                <thead>

                </thead>
                <tbody>

                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>
    </div>
    `;
}

function choose(button) {
    var loi = button.parentElement.querySelector(".baoloi");
    if (button.classList.contains("toanbo")) {
        loi.innerText = "";
        loi.style.color = "white";
        var arr = button.parentElement.querySelectorAll("button");
        for (const a of arr) {
            a.classList.remove("active");
        }
        button.classList.add("active");
        document.querySelector(".selector-sanpham").style.display = "block";
    } else if (button.classList.contains("loc")) {
        var date = new Date();
        var namhientai = date.getFullYear();
        var ngay = button.parentElement.querySelector(".ngay").value;
        var thang = button.parentElement.querySelector(".thang").value;
        var nam = button.parentElement.querySelector(".nam").value;


        if (nam === "" || nam < 2021 || nam > namhientai) {
            loi.innerText = "Lỗi rồi!";
            loi.style.color = "red";
            document.querySelector(".selector-sanpham").style.display = "none";
            return;

        } else {
            if (thang === "") {
                loi.innerText = "";
                loi.style.color = "white";
                // namXacDinh(nam);

                var arr = button.parentElement.querySelectorAll("button");
                for (const a of arr) {
                    a.classList.remove("active");
                }
                button.classList.add("active");
                document.querySelector(".selector-sanpham").style.display = "block";
            } else {
                if (thang < 1 || thang > 12) {
                    loi.innerText = "Lỗi tháng";
                    loi.style.color = "red";
                    document.querySelector(".selector-sanpham").style.display = "none";
                    return;
                } else {
                    if (ngay === "") {
                        loi.innerText = "";
                        loi.style.color = "white";
                        // thangNam(thang, nam);

                        var arr = button.parentElement.querySelectorAll("button");
                        for (const a of arr) {
                            a.classList.remove("active");
                        }
                        button.classList.add("active");
                        document.querySelector(".selector-sanpham").style.display = "block";
                    } else {
                        if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
                            if (ngay < 1 || ngay > 30) {
                                loi.innerText = "Lỗi ngày";
                                loi.style.color = "red";
                                document.querySelector(".selector-sanpham").style.display = "none";
                                return
                            } else {

                                loi.innerText = "";
                                loi.style.color = "white";
                                // ngayThangNam(ngay, thang, nam);

                                var arr = button.parentElement.querySelectorAll("button");
                                for (const a of arr) {
                                    a.classList.remove("active");
                                }
                                button.classList.add("active");
                                document.querySelector(".selector-sanpham").style.display = "block";
                            }
                        } else {
                            if (ngay < 1 || ngay > 31) {
                                loi.innerText = "Lỗi ngày";
                                loi.style.color = "red";
                                document.querySelector(".selector-sanpham").style.display = "none";
                                return
                            } else {
                                loi.innerText = "";
                                loi.style.color = "white";
                                // ngayThangNam(ngay, thang, nam);


                                var arr = button.parentElement.querySelectorAll("button");
                                for (const a of arr) {
                                    a.classList.remove("active");
                                }
                                button.classList.add("active");
                                document.querySelector(".selector-sanpham").style.display = "block";
                            }
                        }
                    }
                }
            }
        }
    }
}



function daBanToanBo(choose) {
    var daBan = localStorage.getItem("daBan") ? JSON.parse(localStorage.getItem("daBan")) : [];
    if (daBan.length === 0) {
        return false;
    }
    var arr = [];
    for (const b of daBan) {
        if (b.brand === choose) {
            if (arr.length === 0) {
                arr.push({
                    nameProduct: b.nameProduct,
                    img: b.img,
                    price: b.price,
                    quantity: b.quantity,
                    money: b.money,
                });
            } else {
                var check = false;
                var pos;
                for (var index = 0; index < arr.length; index++) {
                    if (b.nameProduct === arr[index].nameProduct) {
                        check = true;
                        pos = index;
                        break;
                    }
                }
                if (check) {
                    arr[pos].quantity += b.quantity;
                    arr[pos].money = arr[pos].price * arr[pos].quantity;
                } else {
                    arr.push({
                        nameProduct: b.nameProduct,
                        img: b.img,
                        price: b.price,
                        quantity: b.quantity,
                        money: b.money,
                    });
                }
            }

        } else {
            if (choose === "Toàn Bộ Sản Phẩm") {
                if (arr.length === 0) {
                    arr.push({
                        nameProduct: b.nameProduct,
                        img: b.img,
                        price: b.price,
                        quantity: b.quantity,
                        money: b.money,
                    });
                } else {
                    var check = false;
                    var pos;
                    for (var index = 0; index < arr.length; index++) {
                        if (b.nameProduct === arr[index].nameProduct) {
                            check = true;
                            pos = index;
                            break;
                        }
                    }
                    if (check) {
                        arr[pos].quantity += b.quantity;
                        arr[pos].money = arr[pos].price * arr[pos].quantity;
                    } else {
                        arr.push({
                            nameProduct: b.nameProduct,
                            img: b.img,
                            price: b.price,
                            quantity: b.quantity,
                            money: b.money,
                        });
                    }
                }
            }
        }

    }
    console.log("arr", arr);
    return arr;
}

function daBanLocNam(choose, nam) {
    var daBan = localStorage.getItem("daBan") ? JSON.parse(localStorage.getItem("daBan")) : [];
    if (daBan.length === 0) {
        return false;
    }
    var arr = [];
    for (const b of daBan) {
        var date = new Date(b.ngayBan);
        var year = date.getFullYear();
        if (b.brand === choose && year == nam) {
            if (arr.length === 0) {
                arr.push({
                    nameProduct: b.nameProduct,
                    img: b.img,
                    price: b.price,
                    quantity: b.quantity,
                    money: b.money,
                });
            } else {
                var check = false;
                var pos;
                for (var index = 0; index < arr.length; index++) {
                    if (b.nameProduct === arr[index].nameProduct) {
                        check = true;
                        pos = index;
                        break;
                    }
                }
                if (check) {
                    arr[pos].quantity += b.quantity;
                    arr[pos].money = arr[pos].price * arr[pos].quantity;
                } else {
                    arr.push({
                        nameProduct: b.nameProduct,
                        img: b.img,
                        price: b.price,
                        quantity: b.quantity,
                        money: b.money,
                    });
                }
            }

        } else {
            if (choose === "Toàn Bộ Sản Phẩm" && year == nam) {
                if (arr.length === 0) {
                    arr.push({
                        nameProduct: b.nameProduct,
                        img: b.img,
                        price: b.price,
                        quantity: b.quantity,
                        money: b.money,
                    });
                } else {
                    var check = false;
                    var pos;
                    for (var index = 0; index < arr.length; index++) {
                        if (b.nameProduct === arr[index].nameProduct) {
                            check = true;
                            pos = index;
                            break;
                        }
                    }
                    if (check) {
                        arr[pos].quantity += b.quantity;
                        arr[pos].money = arr[pos].price * arr[pos].quantity;
                    } else {
                        arr.push({
                            nameProduct: b.nameProduct,
                            img: b.img,
                            price: b.price,
                            quantity: b.quantity,
                            money: b.money,
                        });
                    }
                }
            }
        }

    }
    console.log("arr", arr);
    return arr;
}

function daBanLocThangNam(choose, thang, nam) {
    var daBan = localStorage.getItem("daBan") ? JSON.parse(localStorage.getItem("daBan")) : [];
    if (daBan.length === 0) {
        return false;
    }
    var arr = [];
    for (const b of daBan) {
        var date = new Date(b.ngayBan);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if (b.brand === choose && year == nam && month == thang) {
            if (arr.length === 0) {
                arr.push({
                    nameProduct: b.nameProduct,
                    img: b.img,
                    price: b.price,
                    quantity: b.quantity,
                    money: b.money,
                });
            } else {
                var check = false;
                var pos;
                for (var index = 0; index < arr.length; index++) {
                    if (b.nameProduct === arr[index].nameProduct) {
                        check = true;
                        pos = index;
                        break;
                    }
                }
                if (check) {
                    arr[pos].quantity += b.quantity;
                    arr[pos].money = arr[pos].price * arr[pos].quantity;
                } else {
                    arr.push({
                        nameProduct: b.nameProduct,
                        img: b.img,
                        price: b.price,
                        quantity: b.quantity,
                        money: b.money,
                    });
                }
            }

        } else {
            if (choose === "Toàn Bộ Sản Phẩm" && year == nam && month == thang) {
                if (arr.length === 0) {
                    arr.push({
                        nameProduct: b.nameProduct,
                        img: b.img,
                        price: b.price,
                        quantity: b.quantity,
                        money: b.money,
                    });
                } else {
                    var check = false;
                    var pos;
                    for (var index = 0; index < arr.length; index++) {
                        if (b.nameProduct === arr[index].nameProduct) {
                            check = true;
                            pos = index;
                            break;
                        }
                    }
                    if (check) {
                        arr[pos].quantity += b.quantity;
                        arr[pos].money = arr[pos].price * arr[pos].quantity;
                    } else {
                        arr.push({
                            nameProduct: b.nameProduct,
                            img: b.img,
                            price: b.price,
                            quantity: b.quantity,
                            money: b.money,
                        });
                    }
                }
            }
        }

    }
    console.log("arr", arr);
    return arr;
}

function daBanLocNgayThangNam(choose, ngay, thang, nam) {
    var daBan = localStorage.getItem("daBan") ? JSON.parse(localStorage.getItem("daBan")) : [];
    if (daBan.length === 0) {
        return false;
    }
    var arr = [];
    for (const b of daBan) {
        var date = new Date(b.ngayBan);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        if (b.brand === choose && year == nam && month == thang && day == ngay) {
            if (arr.length === 0) {
                arr.push({
                    nameProduct: b.nameProduct,
                    img: b.img,
                    price: b.price,
                    quantity: b.quantity,
                    money: b.money,
                });
            } else {
                var check = false;
                var pos;
                for (var index = 0; index < arr.length; index++) {
                    if (b.nameProduct === arr[index].nameProduct) {
                        check = true;
                        pos = index;
                        break;
                    }
                }
                if (check) {
                    arr[pos].quantity += b.quantity;
                    arr[pos].money = arr[pos].price * arr[pos].quantity;
                } else {
                    arr.push({
                        nameProduct: b.nameProduct,
                        img: b.img,
                        price: b.price,
                        quantity: b.quantity,
                        money: b.money,
                    });
                }
            }

        } else {
            if (choose === "Toàn Bộ Sản Phẩm" && year == nam && month == thang && day == ngay) {
                if (arr.length === 0) {
                    arr.push({
                        nameProduct: b.nameProduct,
                        img: b.img,
                        price: b.price,
                        quantity: b.quantity,
                        money: b.money,
                    });
                } else {
                    var check = false;
                    var pos;
                    for (var index = 0; index < arr.length; index++) {
                        if (b.nameProduct === arr[index].nameProduct) {
                            check = true;
                            pos = index;
                            break;
                        }
                    }
                    if (check) {
                        arr[pos].quantity += b.quantity;
                        arr[pos].money = arr[pos].price * arr[pos].quantity;
                    } else {
                        arr.push({
                            nameProduct: b.nameProduct,
                            img: b.img,
                            price: b.price,
                            quantity: b.quantity,
                            money: b.money,
                        });
                    }
                }
            }
        }

    }
    console.log("arr", arr);
    return arr;
}

function thongke(button) {
    var toanbo = document.getElementById("toanbo-active");
    if (button.innerText === "Adidas") {
        var choose = "Adidas";
    } else if (button.innerText === "Nike") {
        var choose = "Nike";
    } else if (button.innerText === "Puma") {
        var choose = "Puma";
    } else if (button.innerText === "Converse") {
        var choose = "Converse";
    } else if (button.innerText === "Vans") {
        var choose = "Vans";
    } else {
        var choose = "Toàn Bộ Sản Phẩm";
    }
    console.log(choose);
    var stt = 0;
    var s = "";
    var priceVND, moneyVND;
    var tong = 0;
    if (toanbo.classList.contains("active")) {
        document.getElementById("table-thongke").style.display = "table";
        document.getElementById("table-thongke").querySelector("thead").innerHTML =
            `<tr>
            <th>STT</th>
            <th>Tên Sản Phẩm</th>
            <th>Hình Sản Phẩm</th>
            <th>Giá Hiện tại</th>
            <th>Bán Được</th>
            <th>Thu Được</th>
        </tr>`;
        var arr = daBanToanBo(choose);
        if (arr === false) {
            document.getElementById("table-thongke").querySelector("caption").innerText = "Không có dữ liệu";
            return;
        }
        for (const a of arr) {
            var priceVND = new Intl.NumberFormat("VietNam-VN", {
                style: "currency",
                currency: "VND",
            }).format(a.price);
            var moneyVND = new Intl.NumberFormat("VietNam-VN", {
                style: "currency",
                currency: "VND",
            }).format(a.money);
            s += `
            <tr>
                <td>${++stt}</td>
                <td>${a.nameProduct}</td>
                <td><img src="${a.img}" alt=""></td>
                <td>${priceVND}</td>
                <td>${a.quantity}</td>
                <td>${moneyVND}</td>
            </tr>
            `
            tong += a.money;
        }
        var tongVND = new Intl.NumberFormat("VietNam-VN", {
            style: "currency",
            currency: "VND",
        }).format(tong);
        document.getElementById("table-thongke").querySelector("tbody").innerHTML = s;
        document.getElementById("table-thongke").querySelector("tfoot").innerHTML =
            `<tr>
                <th colspan="6">Tổng Thu từ ${choose}: ${tongVND}</th>
            </tr>`;
        document.getElementById("table-thongke").querySelector("caption").innerText = choose;
    } else {
        document.getElementById("table-thongke").style.display = "table";
        document.getElementById("table-thongke").querySelector("thead").innerHTML =
            `<tr>
            <th>STT</th>
            <th>Tên Sản Phẩm</th>
            <th>Hình Sản Phẩm</th>
            <th>Giá Hiện tại</th>
            <th>Bán Được</th>
            <th>Thu Được</th>
        </tr>`;
        var ngay = document.getElementById("ngay-check").value;
        var thang = document.getElementById("thang-check").value;
        var nam = document.getElementById("nam-check").value;
        if (ngay === "" && thang === "") {
            var arr = daBanLocNam(choose, nam);
            if (arr === false) {
                document.getElementById("table-thongke").querySelector("caption").innerText = "Không có dữ liệu";
                return;
            }

        } else if (ngay === "") {
            var arr = daBanLocThangNam(choose, thang, nam);
            if (arr === false) {
                document.getElementById("table-thongke").querySelector("caption").innerText = "Không có dữ liệu";
                return;
            }

        } else if (ngay !== "" && thang !== "" && nam !== "") {
            var arr = daBanLocNgayThangNam(choose, ngay, thang, nam);
            if (arr === false) {
                document.getElementById("table-thongke").querySelector("caption").innerText = "Không có dữ liệu";
                return;
            }

        }


        for (const a of arr) {
            var priceVND = new Intl.NumberFormat("VietNam-VN", {
                style: "currency",
                currency: "VND",
            }).format(a.price);
            var moneyVND = new Intl.NumberFormat("VietNam-VN", {
                style: "currency",
                currency: "VND",
            }).format(a.money);
            s += `
            <tr>
                <td>${++stt}</td>
                <td>${a.nameProduct}</td>
                <td><img src="${a.img}" alt=""></td>
                <td>${priceVND}</td>
                <td>${a.quantity}</td>
                <td>${moneyVND}</td>
            </tr>
            `
            tong += a.money;
        }
        var tongVND = new Intl.NumberFormat("VietNam-VN", {
            style: "currency",
            currency: "VND",
        }).format(tong);
        document.getElementById("table-thongke").querySelector("tbody").innerHTML = s;
        document.getElementById("table-thongke").querySelector("tfoot").innerHTML =
            `<tr>
                <th colspan="6">Tổng Thu từ ${choose}: ${tongVND}</th>
            </tr>`;
        document.getElementById("table-thongke").querySelector("caption").innerText = choose;
    }

}