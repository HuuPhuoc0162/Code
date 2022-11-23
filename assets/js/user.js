
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

document.getElementById("Dang_ky").onclick = () => document.getElementById("sign_up").style.zIndex = 1;
document.getElementById("Dang_nhap").onclick = () => document.getElementById("sign_in").style.zIndex = 1;


// console.log( document.getElementById("sign_up"))
for (let exit of exits)
    exit.onclick = () =>
    {
        document.getElementById("sign_in").style.zIndex = -1;
        document.getElementById("sign_up").style.zIndex = -1;       
        for (let i = 0; i < password_input.length; i++)
            if ( password_input[i].type === "text")
            {
                password_input[i].type = "password";
                slash[i].style.zIndex = 1;
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