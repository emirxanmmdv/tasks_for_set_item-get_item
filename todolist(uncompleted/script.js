const btn = document.getElementById("add_button");
const list = document.getElementById("list")
const input = document.getElementById('myinput')
const todoarr = []


btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const li = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type="checkbox"
    li.textContent = input.value
    list.append(li)
    li.append(checkbox)
    input.value = ''
    checkbox.addEventListener("click", ()=>{
        li.classList.toggle("activate");
    })
})
