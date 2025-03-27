let customersList = document.querySelector(".customers-list") 
let foodSelect = document.querySelector("#foodsSelect")
let ordersList = document.querySelector(".orders-list")
let clientId = document.querySelector("#clientId")
let userHeader = document.querySelector("#userHeader")
let userAdd = document.querySelector("#userAdd")
let usernameInput = document.querySelector("#usernameInput")
let telephoneInput = document.querySelector("#telephoneInput")
let foodsForm = document.querySelector("#foodsForm")
let foodsCount = document.querySelector("#foodsCount")
let userID = 0
let u_name = " "

function renderUsers(){
    customersList.innerHTML = ""
    for (let user of users){
        customersList.innerHTML += `
        <li onclick="renderOrders(${user.userId}, '${user.userName}')" class="customer-item">
            <span class="customer-name">${user.userName}</span>
            <a class="customer-phone" href="tel:${user.contact}">${user.contact}</a>
        </li>`
    }
}

function renderFoods(){
    foodSelect.innerHTML = ""
    for (let food of foods){
        foodSelect.innerHTML += `<option value="${food.foodId}">${food.foodName}</option>`
    }
}

function renderOrders(id, name){
    clientId.textContent = id
    userID = id
    userHeader.textContent = name
    u_name = name
    window.localStorage.setItem("userName", name)
    window.localStorage.setItem("user_id", id)

    ordersList.innerHTML = ""  
    let order = orders.filter(or => or.userId == id)
    for (let el of order){
        let food = foods.find(f => f.foodId == el.foodId)
        ordersList.innerHTML += `
        <li class="order-item">
            <img src="${food.foodImg}">
            <div>
                <span class="order-name">${food.foodName}</span>
                <span class="order-count">${el.count}</span>
            </div>
        </li>`
    }
}

function addUser(event) {
    event.preventDefault()
    let username = usernameInput.value.trim()
    let contact = telephoneInput.value.trim()
    if (!username || username.length > 20) {
        return alert("Invalid username")
    }
    if (!(/^998(9[012345789]|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)) {
        return alert("Invalid contact")
    }
    let newUser = {
        userId: users.length ? users.at(-1).userId + 1 : 1,
        userName: username,
        contact
    }
    users.push(newUser)
    window.localStorage.setItem("users", JSON.stringify(users))
    usernameInput.value = ""
    telephoneInput.value = ""
    renderUsers()
}

function addOrders(event) {
    event.preventDefault()
    let count = foodsCount.value
    let foodId = foodSelect.value
    let newOrder = {
        orderId: orders.length ? orders.at(-1).orderId + 1 : 1,
        userId: userID,
        foodId,
        count
    }
    orders.push(newOrder)
    window.localStorage.setItem("orders", JSON.stringify(orders))
    renderOrders(userID, u_name)
}

clientId.textContent = window.localStorage.getItem("user_id") || ""
userHeader.textContent = window.localStorage.getItem("userName") || ""

renderOrders(window.localStorage.getItem("user_id"), window.localStorage.getItem("userName"))
renderUsers()
renderFoods()

userAdd.addEventListener("submit", addUser)
foodsForm.addEventListener("submit", addOrders)