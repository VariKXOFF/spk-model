document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.length !== 0){
        let loginButton = document.querySelector(".header__account-link")
        loginButton.remove()
        let header = document.querySelector(".header")
        header.append(`${localStorage.name + " " + localStorage.surname}`)
    }

    if(localStorage.length === 0){
        location.replace("/login")
    }

    let mainBlock = document.querySelector(".main-study")
    const take = async (el) => {
        let res = await fetch("/api/allcourse");
        let data = await res.json();
        data.forEach(item => {
            let course = `<a class="course">
<div class="course__image">
<div class="course__info">
<span class="course__name">Тема: ${item.name}</span>
<span class="course__price">Цена: ${item.price}</span>
</div>
</div>
</a>`
            mainBlock.innerHTML += course
        })
        let coursePrice = document.querySelectorAll(".course__price")
        for(let i = 0; i < coursePrice.length; i++){
            if(coursePrice[i].innerHTML === "Цена: 0"){
                coursePrice[i].innerHTML = "Цена: Бесплатно"
            }
        }

        let courseForm = document.forms.form_add_course
        let addCourseButton = document.querySelector(".course-form")
        let headerBlock = document.querySelector(".header")
        let closeButton = document.querySelector(".form-generate__close")

        courseForm.style.display = "none"
        addCourseButton.style.display = "none"

        if(localStorage.status === "Администратор" || localStorage.status === "Преподаватель") {
            addCourseButton.style.display = "block"
        }

        addCourseButton.addEventListener("click", e => {
            if(courseForm.style.display === "none") {
                courseForm.style.display = "flex"
                mainBlock.classList.add("main-study--disable")
                headerBlock.classList.add("main-study--disable")
            }
        })

        closeButton.addEventListener("click", e => {
            courseForm.style.display = "none"
            mainBlock.classList.remove("main-study--disable")
            headerBlock.classList.remove("main-study--disable")
        })

        const send = async(body) => {
            let res = await fetch("/api/addcourse", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(body)
            })
        }

        let body = {}

        courseForm.addEventListener("submit", e => {
            e.preventDefault()
            for(let i = 0; i < e.target.elements.length; i++){
                let element = e.target.elements[i]
                if(element.value.length !== 0) {
                    body[element.name] = element.value
                }
            }
            send(body)
            location.replace("/study")
        })
    }
    take()
});