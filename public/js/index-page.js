if(localStorage.length !== 0){
    let loginButton = document.querySelector(".header__account-link")
    loginButton.remove()
    let header = document.querySelector(".header")
    header.append(`${localStorage.name + " " + localStorage.surname}`)
}
