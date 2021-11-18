if(localStorage.length !== 0){
    location.replace("/")
}


const formRegistration = document.forms.registration

const send = async(body) => {
    let res = await fetch("/api/registration", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    })
}

const search = async (el) => {
    let res = await fetch("/api/getuser", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    });
    let data = await res.json();
    if(data.length === 0){
        let dataUser = {
            "username": body.username,
            "name": body.name,
            "surname": body.surname,
            "status": "Ученик"
        }
        localStorage.setItem("username", body.username)
        localStorage.setItem("name", body.name)
        localStorage.setItem("surname", body.surname)
        localStorage.setItem("status", "Ученик")
        send(body)
        location.replace("/")
    } else {
        alert("Логин занят!")
    }
}

let body = {}
formRegistration.addEventListener("submit", e => {
    e.preventDefault()
    for (let i = 0; i < e.target.elements.length; i++) {
        let element = e.target.elements[i]
        if (element.value.length !== 0) {
            body[element.name] = element.value
        }
    }
    if(e.target.elements[e.target.elements.length - 3].value === e.target.elements[e.target.elements.length - 2].value) {
        body.username = body.username.toLowerCase()
        search(body)
    } else {
        alert("Пароли не совпадают")
    }
})