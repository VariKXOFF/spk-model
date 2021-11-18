if(localStorage.length !== 0){
    location.replace("/")
}

let formLogin = document.forms.login

const search = async (el) => {
    let res = await fetch("/api/checkuser", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    });
    let data = await res.json();
    console.log(data)
    if(data.length !== 0) {
        localStorage.setItem("username", data[0].username)
        localStorage.setItem("name", data[0].name)
        localStorage.setItem("surname", data[0].surname)
        localStorage.setItem("status", data[0].status)
        location.replace("/")
    } else {
        alert("Такой пользователь не зарегистрирован!")
    }
}

let body = {}

formLogin.addEventListener("submit", e => {
    e.preventDefault()
    for (let i = 0; i < e.target.elements.length; i++) {
        let element = e.target.elements[i]
        if (element.value.length !== 0) {
            body[element.name] = element.value
        }
    }
    body.username = body.username.toLowerCase()
    search(body)
})