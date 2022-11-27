// JavaScript Document

function giay(productId, brand, img, name, size, color, price, quantity, detail) {
    this.productId = productId;
    this.brand = brand;
    this.img = img;
    this.name = name;
    this.size = size;
    this.color = color;
    this.price = price;
    this.quantity = quantity;
    this.detail = detail;
}
var size = [35, 36, 37, 38, 39, 40];
var color = ['Trắng', 'Đen', 'Đỏ'];
var Adidas = [
    new giay("A01", "Adidas", "/assets/img/Adidas/Adidas Ultraboost GX5928 Women.png", "Adidas Ultraboost GX5928 Women", size, color, 5200000, 10,
        `Giày Adidas Ultraboost 22 W Gx5928 có độ bền và độ dẻo cao, nhẹ, khả năng chịu lực tốt nhờ chất liệu vải dệt.
	Với công nghệ Adidas Primeknit, giày Adidas vừa ôm sát chân vừa hoàn trả năng lượng tốt trong từng bước chạy.
	Đế giày làm bằng chất liệu cao su bền với nhiệt, bên cạnh đó còn gia tăng khả năng chống trượt bám chặt trên mọi địa hình.
	Thiết kế giày hiện đại kết hợp cùng màu đen cá tính tạo nên phong cách thời trang thời thượng.`
    ),

    new giay("A02", "Adidas", "/assets/img/Adidas/Adidas Ultraboost FZ2558 Men.png", "Adidas Ultraboost FZ2558 Men", size, color, 5000000, 10,
        `Giày Adidas được làm từ vải dệt Primeknit cho trọng lượng của giày nhẹ, độ co giãn cao
	Với lớp lót bằng vải dệt thấm hút mồ hôi tốt, vải mềm mịn, an toàn với cả những làn da nhạy cảm
	Đế giày cao su Continental bền bỉ, dẻo dai, linh hoạt, nhẹ hơn khi di chuyển
	Giày Adidas ULTRABOOST 21 C.RDY FZ2558 sử dụng công nghệ Primegreen thân thiện với môi trường`
    ),

    new giay("A03", "Adidas", "/assets/img/Adidas/Unisex Adidas Ultraboost GY4173.jpeg", "Unisex Adidas Ultraboost GY4173", size, color, 5000000, 10,
        `Giày Adidas Ultraboost Web DNA GY4173 được làm từ chất liệu vải dệt Primeknit đảm bảo tính thoải mái, độ linh hoạt 
	mà vẫn nhẹ chân, đem tới cảm giác êm ái cho từng bộ phận trên bàn chân
	Mẫu giày Adidas sử dụng công nghệ Primeblue hỗ trợ giảm thiểu rác thải đại dương, góp phần bảo vệ môi trường
	Đế giày cao su có độ bền cao, đàn hồi tốt, có khả năng hạn chế trơn trượt tốt nhờ có các đường vân dưới bề mặt đế của giày`
    ),

    new giay("A04", "Adidas", "/assets/img/Adidas/Adidas Ultraboost S23873.jpg", "Adidas Ultraboost S23873", size, color, 4500000, 10,
        `Thân giày chạy bộ nam Adidas Ultraboost 21 S23873 được làm tự vải dệt tạo cảm giác thoải mái khi mang và có độ bền cao
	Công nghệ Adidas Primeknit+, Primeblue, Boost đảm bảo tính thoải mái, độ linh hoạt, đem đến cảm giác êm ái cho đôi chân
	Cao su Continental được sử dụng cho đế giày Adidas mang lại tính đàn hồi cao
	Với kiểu dáng giày cổ thấp giúp cho bạn linh hoạt hơn trong việc vận động cổ chân`
    ),

    new giay("A05", "Adidas", "/assets/img/Adidas/Adidas Pureboost Jet Women GW9146.jpg", "Adidas Pureboost Jet Women GW9146", size, color, 3400000, 10,
        `Với chất liệu hoàn toàn từ Textile giúp giày Adidas trở nên bền bỉ và có độ dẻo cao, khả năng chịu lực tốt
	Công nghệ Boost sẽ cho bạn những trải nghiệm chạy tuyệt vời và êm ái nhất mỗi khi mang giày
	Đế giày Adidas Pureboost Jet W GW9146 từ Continental™ Rubber tăng khả năng ma sát và chống trơn trượt hiệu quả`
    ),

    new giay("A06", "Adidas", "/assets/img/Adidas/Adidas Supernova 2 Men GW9092.jpg", "Adidas Supernova 2 Men GW9092", size, color, 2700000, 10,
        `Phần thân giày Adidas GW9092 được làm từ cao su carbon có độ đàn hồi và độ bền cao
	Công nghệ Boost được ứng dụng mang lại khả năng hoàn trả năng lượng tuyệt vời cho giày Adidas, cùng với công nghệ Bounce có độ ổn định và độ bám cao,
	an toàn cho người dùng Đế giày sử dụng chất liệu TPU có khả năng chống mài mòn và chịu nhiệt tốt`
    ),

    new giay("A07", "Adidas", "/assets/img/Adidas/Adidas Supernova Women GX0535-3.jpg", "Adidas Supernova Women GX0535-3", size, color, 2925000, 10,
        `Thân giày chạy bộ nữ Adidas Supernova+ GX0535 được làm từ chất liệu Mesh có độ co giãn tốt, bề mặt vải thông thoáng, 
	mang đến cảm giác thoải mái cho người dùngCông nghệ Boost, Bounce giúp nâng cao độ êm và độ đàn hồi, hỗ trợ hoàn trả năng lượng lên mức tối ưu
	Phần đế giày Adidas được làm từ cao su bền bỉ, đảm bảo độ bám chắc trong mọi địa hình
	Thiết kế giày cổ thấp kết hợp sắc đen huyền bí thích hợp với những tín đồ của phong cách thời trang trẻ trung và thời thượng`
    ),

    new giay("A08", "Adidas", "/assets/img/Adidas/Adidas Supernova Men GX2962.jpg", "Adidas Supernova Men GX2962", size, color, 2850000, 10, `
	Thân giày Adidas Supernova M GX2962 được làm từ chất liệu vải lưới và da tổng hợp giúp không khí bên ngoài có thể lọt vào
	tạo sự thoải mái cho người sử dụng Công nghệ Boost, Bounce trên giày Adidas tạo cảm giác thoải mái cho chân với sức bám cao và 
	độ nâng đỡ lý tưởng, công nghệ Primegreen thuộc dòng vật liệu tái chế hiệu năng cao, thân thiện với môi trường Đế cao su đàn hồi và bền bỉ,
	giúp tăng ma sát, an toàn khi vận động Giày cổ thấp với thiết kế hiện đại, linh hoạt khi di chuyển, phù hợp với các bạn nam thích chạy bộ`),
];

var Nike = [
    new giay("N01", "Nike", "/assets/img/Nike/Nike Air Max DC9332-001 Men.jpg", "Nike Air Max DC9332-001 Men", size, color, 5000000, 10,
        `Được làm từ chất liệu gồm 32% Leather, 23% Synthetic, và 45% Textile cho giày Nike độ bền đẹp cao, mềm mịn và chống thấm nước tốt.
	Nike Air Max Plus Se DC9332-001 sử dụng công nghệ Air Max mang lại khả năng đàn hồi hiệu quả và êm ái hơn.
	Thiết kế giày cổ thấp giúp bạn dễ dàng kết hợp với nhiều mẫu quần áo thường ngày khác nhau.`
    ),

    new giay("N02", "Nike", "/assets/img/Nike/Unisex Nike CV7562-104.jpg", "Unisex Nike CV7562-104", size, color, 4700000, 10,
        `Thân giày Nike Lebron Xviii Low CV7562-104 được làm từ 36% sợi dệt, 64% sợi tổng hợp thông thoáng khó bám bụi, dễ dàng vệ sinh giày
	Đế giày có nhiều gai làm tăng độ ma sát, chống trơn trượt mỗi khi vận động
	Kiểu dáng giày Nike cổ cao cá tính, thời trang, bảo vệ chân tốt khi chơi thể thao`
    ),

    new giay("N03", "Nike", "/assets/img/Nike/Nike Air Max DH4245-400 Men.jpg", "Nike Air Max DH4245-400", size, color, 4700000, 10,
        `Sử dụng 58% sợi tổng hợp cùng 42% sợi dệt mang lại cho giày Nike độ bền và độ đàn hồi tốt, tính thẩm mỹ cao và dễ dàng vệ sinh hơn.
	Nike Air Max 2021 DH4245-400 với công nghệ Air Max sẽ mang lại trải nghiệm tuyệt vời hơn cho bạn mỗi khi sử dụng.
	Đế giày cao su sẽ giúp chống trơn trượt và chống mài mòn hiệu quả hơn.`
    ),

    new giay("N04", "Nike", "/assets/img/Nike/Nike React Infinity Run Fk 2 CT2357-009.jpg", "Nike React Infinity Run Fk 2 CT2357-009", size, color, 4700000, 10,
        `Sở hữu chất liệu từ 18% sợi tổng hợp cùng 82% sợi dệt cho giày Nike độ bền cao, khả năng thấm hút tốt mang lại sự thông thoáng
	Sự kết hợp từ công nghệ Nike React giảm va đập, hoàn trả năng lượng, cùng công nghệ Nike Flywire và Flyknit có khả năng đàn hồi tốt và thân thiện với môi trường
	Thiết kế dáng giày cổ thấp giúp bạn dễ dàng phối hợp với những kiểu quần áo khác nhau, mát mẻ hơn vào những ngày hè`
    ),

    new giay("N05", "Nike", "/assets/img/Nike/Nike Zoom Fly 4 CT2392-005.jpg", "Nike Zoom Fly 4 CT2392-005", size, color, 4700000, 10,
        `Nike Zoom Fly 4 CT2392-005 sử dụng 71% Textile, 29% sợi tổng hợp có khả năng co giãn tốt, bền bỉ trong quá trình sử dụng
	Chiếc giày Nike có thiết kế hiện đại hỗ trợ tối đa cho việc tập luyện
	Kiểu dáng giày cổ thấp năng động, phù hợp cho những bạn nam yêu thích chạy bộ`
    ),

    new giay("N06", "Nike", "/assets/img/Nike/Nike Zoom Vomero 16 DA7698-003 Women.jpg", "Nike Zoom Vomero 16 DA7698-003 Women", size, color, 3970000, 10,
        `Dễ dàng phối đồ với kiểu giày cổ thấp năng động
	Giày Nike Air Zoom Vomero 16 DA7698-003 sử dụng chất liệu 35% sợi tổng hợp, 65% sợi dệt có ưu điểm đàn hồi tốt, độ bền cao
	Giày Nike có dây đeo linh hoạt, phù hợp với hoạt động thể thao như chạy độ, đi bộ,..
	Sở hữu công nghệ Nike ZoomX có loại bọt xốp nhẹ mang lại cho bạn một cảm giác thoải mái khi mang, 
	kết hợp cùng đệm Air Zoom bên dưới bàn chân trước mang lại cảm giác nhanh nhạy khi bạn chạy thời gian dài`
    ),

    new giay("N07", "Nike", "/assets/img/Nike/Nike Air Max DC9336-400 Men.jpg", "Nike Air Max DC9336-400 Men", size, color, 3800000, 10,
        `Được làm từ 12% sợi tổng hợp, 61% da cùng 27% sợi dệt giúp giày Nike bền bỉ hơn, khả năng chống nước và đàn hồi tốt.
	Dáng giày cổ thấp và màu sắc tối giản, phù hợp với nhiều mẫu quần áo khác nhau cho bạn tha hồ lựa chọn.`
    ),

    new giay("N08", "Nike", "/assets/img/Nike/Nike Zoom Pegasus 38 DQ4994-010 Men.jpg", "Nike Zoom Pegasus 38 DQ4994-010 Men", size, color, 3640000, 10,
        `Thân giày sở hữu chất liệu từ 18% sợi tổng hợp, 82% sợi dệt nên có độ bền cao, độ đàn hồi tốt, hạn chế vi khuẩn xâm nhập nhờ khả năng thấm hút 
	mồ hôi tốt và khô nhanhCông nghệ Air Zoom hỗ trợ tối đa trong việc phản hồi và tăng tốc cho từng hoạt động của bàn chân, tối ưu năng lượng, 
	giúp bạn có thể luyện tập tốt hơnKiểu dáng giày Nike cổ thấp thuộc dòng thể thao chuyên dụng nên có thể sử dụng trong những buổi chạy bộ việt dã 
	hoặc giao lưu với bạn bè`
    ),
];

var Puma = [
    new giay("P01", "Puma", "/assets/img/Puma/Puma Run Xx Nitro 376171-02 Women.jpg", "Puma Run Xx Nitro 376171-02 Women", size, color, 3600000, 10,
        `Được làm từ chất liệu Mesh cho giày Puma Run Xx Nitro 376171-02 có độ bền và độ dẻo cao, khả năng giữ màu và chịu lực tốt
	Giày Puma sở hữu công nghệ Nitro Foam giúp bạn luôn cảm thấy nhẹ nhàng và êm ái hơn mỗi khi sử dụng
	Với đế giày từ cao su giúp cho khả năng chống trơn trượt và chống mài mòn hiệu quả`
    ),

    new giay("P02", "Puma", "/assets/img/Puma/Puma Velocity Nitro 2 376262-01 Women.jpg", "Puma Velocity Nitro 2 376262-01 Women", size, color, 3510000, 10,
        `Với chất liệu Mesh cho giày Puma độ bền và đàn hồi tốt, ít bám bẩn và dễ dàng vệ sinh
	Sử dụng công nghệ Nitro Foam giúp giày trở nên nhẹ nhàng và êm ái hơn
	Thiết kế đế giày Puma Velocity Nitro 2 376262-01 từ cao su chống mài mòn và mang lại độ ma sát cao trên mặt đường
	Phần gót được cố định bằng TPU chắc chắn và hiệu quả hơn`
    ),

    new giay("P03", "Puma", "/assets/img/Puma/Puma RS 306536-01 Unisex.jpg", "Puma RS 306536-01 Unisex", size, color, 3330000, 10,
        `Phần thân Puma RS-2K 306536 được làm hoàn toàn từ chất liệu vải dệt có độ mềm mịn, thân thiện với làn da cũng như thấm hút mồ hôi tốt, tạo cảm giác khô thoáng và thoải mái cho người dùng
	Phần đế giày Puma có nhiều rãnh nhỏ rải đều, cho khả năng bám đường tốt khi di chuyển
	Kiểu dáng giày cổ thấp tiện lợi, dễ dàng phối với nhiều loại thời trang khác nhau`
    ),

    new giay("P04", "Puma", "/assets/img/Puma/Puma Court Rider 2.0 376646-01 Men.jpg", "Puma Court Rider 2.0 376646-01 Men", size, color, 3150000, 10,
        `Mẫu giày Puma bóng rổ với phần thân làm từ sợi tổng hợp chắc chắn, chống thấm nước và bền bỉ theo thời gian
	Công nghệ Foam với lớp đệm êm mang lại cảm giác thoải mái và nhẹ nhàng khi chơi bóng rổ
	Puma Court Rider 2.0 376646-01 sở hữu bộ đế cao su giúp tăng cao khả năng ma sát, bám tốt hơn giúp bạn thỏa sức vận động mà không lo trơn trượt
	Kiểu dáng giày cổ thấp linh hoạt phù hợp với những bạn nam yêu thích bóng rổ`
    ),

    new giay("P05", "Puma", "/assets/img/Puma/Unisex Puma 195196-03.jpg", "Unisex Puma 195196-03", size, color, 3150000, 10,
        `Giày tập luyện unisex Puma Xetic Halflife 195196-03 được làm từ vải dệt thông thoáng, chống nhăn và dễ dàng vệ sinh
	Công nghệ Profoam Lite giúp giày có khả năng phục hồi cao, mang đến cảm giác êm ái và thoải mái khi luyện tập
	Kiểu dáng giày Puma cổ thấp có dây năng động, phù hợp với hầu hết các hoạt động thể thao`
    ),

    new giay("P06", "Puma", "/assets/img/Puma/Lifestyle Unisex Puma Bmw Mms Maco 306995-02.jpg", "Lifestyle Unisex Puma Bmw Mms Maco 306995-02", size, color, 3150000, 10,
        `Chất liệu vải dệt được sử dụng cho mẫu giày Puma giúp mang lại sự bền bỉ cùng khả năng thoáng khí tốt không gây bí chân
	Bộ đế của Puma Bmw Mms Maco 306995-02 được thiết kế với nhiều rãnh sâu giúp tăng khả năng ma sát trên bề mặt, an toàn trên mỗi bước chân
	Sở hữu kiểu dáng giày cổ thấp năng động thích hợp mang hằng ngày, đi học, đi cafe cùng bạn bè,...`
    ),

    new giay("P07", "Puma", "/assets/img/Puma/Puma RS 372429-01 Unisex.jpg", "Puma RS 372429-01 Unisex", size, color, 3150000, 10,
        `Thân giày Puma được làm từ chất liệu vải dệt có độ bền cao, chống phai màu cũng như dễ dàng lau chùi khi dính vết bẩn
	Đế giày cao su có độ bền, chịu được nhiệt, ít bị mài mòn cũng như có nhiều rãnh nhỏ, bám dính trên hầu hết địa hình
	Kiểu dáng Puma RS-X 372429 cổ thấp truyền thống, mang lại cảm giác cổ điển, phù hợp nhiều đối tượng yêu thích tập luyện/training`
    ),

    new giay("P08", "Puma", "/assets/img/Puma/Puma RS 380562-04 Unisex.jpg", "Puma RS 380562-04 Unisex", size, color, 2880000, 10,
        `Giày Puma được hoàn thiện từ chất liệu Textile có độ thoáng mát, co giãn linh hoạt nhưng đảm bảo tính ổn định khi di chuyển
	Kiểu dáng giày cổ thấp có màu sắc đen mạnh mẽ, cá tính, thích hợp cho các bạn sử dụng theo đuổi phong cách thời trang thời thượng`
    ),
];

var Converse = [
    new giay("C01", "Converse", "/assets/img/Converse/Converse Chuck 70 Seasonal Color - A01448C.jpg", "Converse Chuck 70 Seasonal Color", size, color, 1900000, 10,
        `Converse Chuck 70 Seasonal Color là “đứa con lai” giữa hai dòng giày đình đám Chuck 70S và Seasonal Color của nhà Converse.
	Đôi giày là sự kết hợp tinh túy giữa vẻ ngoài cổ điển của Chuck 70S cùng phối màu Dark Beetroot/Egret/Black thời thượng của Seasonal Color.
	Đặc biệt, màu đỏ rượu vang chủ đạo mang đến vẻ đẹp ấm áp, sang trọng và quyến rũ, rất phù hợp cho outfit mùa đông sắp đến.`
    ),

    new giay("C02", "Converse", "/assets/img/Converse/Converse Chuck Taylor All Star 70 Plus.jpg", "Converse Chuck Taylor All Star 70 Plus", size, color, 2500000, 10,
        `Lấy cảm hứng từ dòng Chuck 70s, Chuck 70s Plus là một thiết kế “lệch pha" với sự kết hợp của hai loại vải 12oz và 16oz tái chế.
	Về tổng thể, đây là một kết cấu mới dựa trên sự tách rời - chắp vá - tái tạo đầy ấn tượng phá vỡ mọi quy tắc nhưng vẫn giữ được nét
	cổ điển của dòng giày kinh điển này.`
    ),

    new giay("C03", "Converse", "/assets/img/Converse/Converse Chuck Taylor All Star Dainty.jpg", "Converse Chuck Taylor All Star Dainty", size, color, 1500000, 10,
        `Phiên bản Converse Dainty màu đen vô cùng thời trang, nhẹ nhàng giúp các bạn nữ tỏa sáng với phong cách thanh lịch, trẻ trung.
	Kiểu dáng thanh mảnh, ôm form cùng chất liệu da Canvas cao cấp, miếng đệm giày và lớp lót trong mềm mại giúp bạn có được sự thoải mái,
	êm nhẹ dù diện giày cả ngày dài.`
    ),

    new giay("C04", "Converse", "/assets/img/Converse/Converse Chuck Taylor All Star Lift Platform Canvas.jpg", "Converse Chuck Taylor All Star Lift Platform Canvas", size, color, 1620000, 10,
        `Mang trở lại phiên bản đế cao trong một diện mạo cơ bản, Converse Lift Platform Canvas là sự kết hợp nhuần nhuyễn và 
	hài hòa giữa đế Platform cao su dày dặn và Canvas Upper nhẹ thoáng, bền bỉ. Với những gam màu basic và độ hack dáng không thể xem thường,
	bạn có thể tự tin diện item này đến những buổi gặp gỡ bạn bè trong những bộ cánh xinh tươi, rạng rỡ nhất.`
    ),

    new giay("C05", "Converse", "/assets/img/Converse/Converse Chuck Taylor All Star 1970s Recycled Rpet Canvas.jpg", "Converse Chuck Taylor All Star 1970s Recycled Rpet Canvas", size, color, 1710000, 10,
        `Converse Chuck 70 Recycled RPET Canvas  được “tái sinh” với chất liệu tái chế bảo vệ môi trường tối đa. Bên cạnh đó, phối màu hồng
	ngọt ngào sẽ giúp bạn có thêm nguồn năng lượng tích cực cho mọi outfit của mình. Với những ai trót mê Converse thì đây sẽ là
	“must have item” mà bạn không nên bỏ lỡ.`
    ),

    new giay("C06", "Converse", "/assets/img/Converse/Converse Chuck Taylor All Star CX Explore Roots.jpg", "Converse Chuck Taylor All Star CX Explore Roots", size, color, 2000000, 10,
        `Converse đã quay trở lại bằng một màn “chào sân” ấn tượng cùng BST Explore Roots, với những mẫu giày CTAS CX tiện nghi, bền bỉ.
	Mang phong cách trẻ trung, hiện đại với những gam màu Digital khác biệt trên mỗi bộ phận của giày, kèm theo đó là thiết kế Pull Tabs
	vô cùng thời trang và tiện dụng, mẫu giày lấy cảm hứng từ các chuyến dã ngoại sẽ cho bạn trở thành tâm điểm trong mỗi cuộc vui.`
    ),

    new giay("C07", "Converse", "/assets/img/Converse/Converse Chuck Taylor All Star Renew.jpg", "Converse Chuck Taylor All Star Renew", size, color, 1440000, 10,
        `Cá tính và đậm chất hơn cùng cách phối màu cực cool ngầu trong phiên bản Converse Chuck Taylor All Star Renew. Được làm từ tổ hợp
	chất liệu tái chế nhưng vẫn thật bền bỉ và cuốn hút, BST giúp nhà Converse truyền đi thông điệp về một lối sống xanh, giảm thiểu
	rác thải để tương lai chúng ta được tốt đẹp hơn.`
    ),

    new giay("C08", "Converse", "/assets/img/Converse/Converse Chuck Taylor All Star Create Future.jpg", "Converse Chuck Taylor All Star Create Future", size, color, 1440000, 10,
        `Với thông điệp tích cực về việc tạo dựng và vun đắp tương lai từ những việc làm hôm nay, Converse đã mang đến BST Create Future đầy ý nghĩa.
	Wordmark cách điệu với font chữ to bị làm méo với dụng ý tạo điểm nhấn riêng biệt cho đôi giày. Màu sắc tươi mới và trẻ trung năng động sẽ
	làm bạn nổi bật hơn trước đám đông.`
    ),

];

var Vans = [
    new giay("V01", "Vans", "/assets/img/Vans/Vans Old Skool Checker.jpg", "Vans Old Skool Checker", size, color, 1600000, 10,
        `Được gọi vui một cách thân thuộc là “giày Vans đen“, thực chất đây là một trong những phiên bản đầu tiên và cổ điển nhất của VANS
	trong bộ sưu tập VANS OLD SKOOL ra đời năm 1977. Tới nay đôi giày chỉ với phối màu đen trắng này vẫn nằm trong top “Best Seller” của VANS
	trên toàn thế giới, với kiểu dáng cổ điển cùng “sọc Jazz” huyền thoại hợp thời trang khiến đôi VANS này thật sự trở thành mẫu giày
	classic bất bại, là fan hâm mộ của VANS nói chung và những skaters nói riêng đều nên có một đôi trong tủ giày. Được mệnh danh là phiên
	bản mang “càng cũ càng đẹp” và nhiều phiên bản custom bậc nhất của nhà VANS.`
    ),

    new giay("V04", "Vans", "/assets/img/Vans/Vans SK8-Hi BW.jpg", "Vans SK8-Hi BW", size, color, 1000000, 10,
        `Vans SK8-Hi với thiết kế cổ cao qua mắt cá chân và giữ lại chi tiết lượn sóng đặc trưng 2 bên thân giày. Sử dụng kết hợp cả 2 chất liệu
	Canvas và da lộn mềm mại giúp form giày ôm chân hơn. Sản phẩm dành cho phong cách đường phố cực kỳ cá tính, thời thượng.`
    ),

    new giay("V06", "Vans", "/assets/img/Vans/Vans Old Skool Black White.jpg", "Vans Old Skool Black White", size, color, 1600000, 10,
        `Được gọi vui một cách thân thuộc là “giày Vans đen“, thực chất đây là một trong những phiên bản đầu tiên và cổ điển nhất của VANS
	trong bộ sưu tập VANS OLD SKOOL ra đời năm 1977. Tới nay đôi giày chỉ với phối màu đen trắng này vẫn nằm trong top “Best Seller” của
	VANS trên toàn thế giới, với kiểu dáng cổ điển cùng “sọc Jazz” huyền thoại hợp thời trang khiến đôi VANS này thật sự trở thành mẫu giày classic
	bất bại, là fan hâm mộ của VANS nói chung và những skaters nói riêng đều nên có một đôi trong tủ giày. Được mệnh danh là phiên bản mang “càng cũ càng đẹp”
	và nhiều phiên bản custom bậc nhất của nhà VANS.`
    ),

    new giay("V02", "Vans", "/assets/img/Vans/Vans UA Classic Slip-On SF Mix Match.jpg", "Vans UA Classic Slip-On SF Mix Match", size, color, 1305000, 10,
        `Vans SF Mix Match tỏa sáng nhờ những khối màu sắc, hoạt tiết kết hợp xen kẽ tạo nên vẻ đẹp độc đáo, sáng tạo tiếp thêm cho người
	mang nguồn năng lượng tích cực. Nâng cấp kết cấu nội thất linh hoạt, hiện đại được thể hiện ở cấu trúc Vans Surf SF với đệm lót UltraCush
	Lite có thể tháo rời và đế ngoài trở nên nhẹ nhàng hơn. Đặc biệt, phần gót có thể gập lại để dễ dàng tạo sự linh hoạt mang đến một nét
	chấm phá cho phong cách của đôi giày mang tính di sản.`
    ),

    new giay("V03", "Vans", "/assets/img/Vans/Vans UA Old Skool Vans Collage.jpg", "Vans UA Old Skool Vans Collage", size, color, 670000, 10,
        `Hiện đại, thẩm mỹ, sáng tạo, Vans Collage tiếp tục bước vào thế giới nghệ thuật đương đại với kỹ thuật Collage mang đến hiệu ứng thị giác
	độc đáo. Đa dạng với các bản in được cắt ghép khéo léo cùng biểu tượng logo Vans và họa tiết Checkerboard đặc trưng thể hiện tính di sản của
	thương hiệu. BST được tạo nên với những mảnh ghép mộc mạc liên kết với nhau một cách bất quy tắc với cách tạo hình tự do, phóng khoáng và
	không theo một trật tự nào. `
    ),

    new giay("V05", "Vans", "/assets/img/Vans/Vans UA Authentic Eco Theory Positivity.jpg", "Vans UA Authentic Eco Theory Positivity", size, color, 1700000, 10,
        `Vans Eco Theory Positivity truyền tải thông điệp nhân văn nhân dịp kỷ niệm Ngày Trái Đất trên tinh thần đẩy mạnh việc thực hiện
	sử dụng các vật liệu có nguồn gốc, thân thiện với môi trường. Ngoại hình tạo điểm nhấn với các họa tiết hoa văn sinh động và slogan
	thể hiện trách nhiệm với môi trường. Đồng thời, thiết kế được hoàn thiện bởi upper canvas từ hai thành phần chính là bông hữu cơ và
	cây gai dầu. Sự cải tiến còn được thể hiện ở đế ngoài với cấu trúc EcoWaffle™ và đệm lót EcoCush ™ êm ái, cùng đế ngoài dày dặn linh hoạt.`
    ),

    new giay("V07", "Vans", "/assets/img/Vans/Vans UA Old Skool Pig Suede.jpg", "Vans UA Old Skool Pig Suede", size, color, 1980000, 10,
        `Sở hữu kiểu dáng Old Skool cổ điển với phối màu rất chill, Vans Pig Suede Honey Gold Old Skool tone nền vàng rực rỡ mang lại cảm giác
	ấm áp với phong cách thời thượng. Siêu phẩm sở hữu nhiều tính năng vô cùng nổi bật với Upper bao phủ toàn bộ 100% chất liệu da lộn mềm mại
	tựa như nhung. Ngoài ra thiết kế da lộn được nâng cấp với công nghệ HeiQ Eco Dry tạo nên điểm khác biệt cho BST với khả năng chống thấm cực tốt.`
    ),

    new giay("V08", "Vans", "/assets/img/Vans/Vans UA Old Skool Tiger Floral.jpg", "Vans UA Old Skool Tiger Floral", size, color, 1575000, 10,
        `Không phụ lòng mong mỏi của các fan, lần này Vans lại cho ra mắt BST mới với họa tiết Tiger Floral bắt mắt. Sự kết hợp độc đáo của
	hai họa tiết “Hoa” và “Hổ” tưởng chừng như không liên quan lại làm nên một tổ hợp cực kì ăn ý và hài hòa. Kỹ thuật in Allover với công
	nghệ hiện đại đã giúp thành quả sáng tạo của các nhà thiết kế đến gần hơn với công chúng.`
    ),
];


var sanPham = [Adidas, Nike, Puma, Converse, Vans];


//  tránh tạo đè ==> tạo 1 lần rồi thôi
localStorage.getItem("Adidas") ? 1 : localStorage.setItem("Adidas", JSON.stringify(Adidas));
localStorage.getItem("Nike") ? 1 : localStorage.setItem("Nike", JSON.stringify(Nike));
localStorage.getItem("Puma") ? 1 : localStorage.setItem("Puma", JSON.stringify(Puma));
localStorage.getItem("Converse") ? 1 : localStorage.setItem("Converse", JSON.stringify(Converse));
localStorage.getItem("Vans") ? 1 : localStorage.setItem("Vans", JSON.stringify(Vans));
localStorage.getItem("sanPham") ? 1 : localStorage.setItem("sanPham", JSON.stringify(sanPham));