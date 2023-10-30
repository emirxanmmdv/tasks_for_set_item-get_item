const btn = document.getElementById("add_button");
const username = document.getElementById('username')
const password = document.getElementById('password')
const user = JSON.parse(localStorage.getItem('user'))
if(user){
        username.value = user.username
        password.value = user.password
    }
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const obj = {
        username: username.value,
        password: password.value
    }
    localStorage.setItem('user',JSON.stringify(obj))
    username.value = ''
    password.value = ''
})
