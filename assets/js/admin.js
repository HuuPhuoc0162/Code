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
        if (a.duocDuyet === true) {
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
            document.getElementById("table-donhang").querySelector("tbody").innerHTML +=
                `<tr>
                    <td>${++stt}</td>
                    <td class="maDonHang">${a.madh}</td>
                    <td class="SanPham">
                        ${s}
                    </td>
                    <td class="ThanhTien">${tongVND}</td>
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
                <th>Màu Sản Phẩm</th>
                <th>Size Sản Phẩm</th>
                <th>Hình Sản Phẩm</th>
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
    document.getElementById("thongtin").innerHTML = s;
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
    var brand = document.getElementById("thongtin").querySelector(".hang").innerText;
    var productId = document.getElementById("thongtin").querySelector(".ma").innerText;

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
    <div class = "content">
        <h1 id="title-chuaXuLy">Các Đơn Hàng Chưa Xử Lý</h1>
        <table id="quanlydonhang-chuaXuLy">
            <thead>
                <th>STT</th>
                <th>Mã Đơn Hàng</th>
                <th>Tên Khách Hàng</th>
                <th>Số Điện Thoại</th>
                <th>Sản Phẩm</th>
                <th>Thành Tiền</th>
                <th>Action</th>
            </thead>
            <tbody id="table-chuaXuLy">

            </tbody>

            <tfoot>
                <tr>
                    <td colspan="7">
                        <button onclick="duyetHetDonHang();">Duyệt Hết</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>


    <div class = "content">
        <h1 id="title-daXuLy">Các Đơn Hàng Đã Xử Lý</h1>
        <table id="quanlydonhang-daXuLy">
            <thead>
                <th>STT</th>
                <th>Mã Đơn Hàng</th>
                <th>Tên Khách Hàng</th>
                <th>Số Điện Thoại</th>
                <th>Sản Phẩm</th>
                <th>Thành Tiền</th>
            </thead>

            <tbody id="table-daXuLy">

            </tbody>
        </table>
    </div>


`;
    document.getElementById("container").innerHTML = s;

    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var string = "";
    var s = "";
    var sttchuaXuLy = 0;
    var sttdaXuLy = 0;
    var tong = 0;
    for (var a of listDonHang) {
        if (a.donhang.length !== 0) { // có đơn hàng mới hiện
            for (var i = 0; i < a.donhang.length; i++) {
                if (a.donhang[i].duocDuyet === false) { // Chưa được duyệt ==> In trong table-chuaXuLy
                    for (var j = 0; j < a.donhang[i].giohang.length; j++) {
                        s += `<span class="Ten">${a.donhang[i].giohang[j].nameProduct}</span>-
                        <span class="Mau">(${a.donhang[i].giohang[j].color})</span>-
                        <span class="Size">(${a.donhang[i].giohang[j].size})</span>-
                        <span class="SoLuong">(${a.donhang[i].giohang[j].quantity})</span><br>`;
                        tong += parseInt(a.donhang[i].giohang[j].money);
                    }
                    string = `
                    <tr>
                        <td>${++sttchuaXuLy}</td>
                        <td class="maDonHang">${a.donhang[i].madh}</td>
                        <td class="tenKhachHang">${a.name}</td>
                        <td class="sdtKhachHang">${a.sdt}</td>
                        <td class="SanPham">
                            ${s}
                        </td>
                        <td class="ThanhTien">${tong}đ</td>
                        <td>
                            <button onclick="duyetDonHang(this);">Duyệt</button>
                        </td>
                    </tr>`;
                    document.getElementById("table-chuaXuLy").innerHTML += string;
                    s = "";
                    tong = 0;
                } else { // Được duyệt rồi ==> In trong table-daXuLy
                    for (var j = 0; j < a.donhang[i].giohang.length; j++) {
                        s += `<span class="Ten">${a.donhang[i].giohang[j].nameProduct}</span>-
                        <span class="Mau">(${a.donhang[i].giohang[j].color})</span>-
                        <span class="Size">(${a.donhang[i].giohang[j].size})</span>-
                        <span class="SoLuong">(${a.donhang[i].giohang[j].quantity})</span><br>`;
                        tong += parseInt(a.donhang[i].giohang[j].money);
                    }
                    string = `
                    <tr>
                        <td>${++sttdaXuLy}</td>
                        <td class="maDonHang">${a.donhang[i].madh}</td>
                        <td class="tenKhachHang">${a.name}</td>
                        <td class="sdtKhachHang">${a.sdt}</td>
                        <td class="SanPham">
                            ${s}
                        </td>
                        <td class="ThanhTien">${tong}đ</td>
                    </tr>`;
                    document.getElementById("table-daXuLy").innerHTML += string;
                    s = "";
                    tong = 0;
                }
            }
        }
    }
}


/** Khi bấm duyệt
 * chuyển thuộc tính duocDuyet của đơn hàng =>true => in ra trong table listDonHang daXuLy
 * xóa số đi số lượng sản phẩm trên localStorage: Nike/Adidas/Puma/Converse/Vans , sanPham
 * inner vào Đơn hàng của trang người dùng đó thành đã xử lý
 */
function duyetDonHang(button) {
    alert("Duyệt Thành Công!");

    // Chuyển đơn hàng từ chưa xử lý sang xử lý
    var tenKhachHang = button.parentElement.parentElement.querySelector(".tenKhachHang").innerText;
    var maDonHang = button.parentElement.parentElement.querySelector(".maDonHang").innerText;
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    var listSanPham = [];
    for (var a of listDonHang) {
        if (a.name === tenKhachHang) {
            for (var i = 0; i < a.donhang.length; i++) {
                if (a.donhang[i].madh === maDonHang) {
                    a.donhang[i].duocDuyet = true;
                    listSanPham = a.donhang[i].giohang;
                }
            }
        }
    }
    localStorage.setItem("listDonHang", JSON.stringify(listDonHang));




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


function duyetHetDonHang() {
    alert("Đã Duyệt Hết!");
    var listDonHang = JSON.parse(localStorage.getItem("listDonHang"));
    for (var a of listDonHang) {
        if (a.donhang.length !== 0) {
            for (var i = 0; i < a.donhang.length; i++) {
                if (a.donhang[i].duocDuyet === false) {
                    a.donhang[i].duocDuyet = true;
                }
            }
        }
    }
    localStorage.setItem("listDonHang", JSON.stringify(listDonHang));
    quanlydonhang();
}