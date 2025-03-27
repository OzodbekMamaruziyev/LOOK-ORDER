
let users = JSON.parse(window.localStorage.getItem("users")) || [
    {
        userId: 1,
        userName: "Ali",
        contact: "998905303285" 
    },
    {
        userId: 2,
        userName: "Vali",
        contact: "998905353285"
    },
    {
        userId: 3,
        userName: "Aziz",
        contact: "998905803285"
    },
]

let foods = JSON.parse(window.localStorage.getItem("foods")) || [
    {foodId: 1, foodName: "combo", foodImg: "./img/combo.jpeg"},
    {foodId: 2, foodName: "fanta", foodImg: "./img/fanta.jpeg"},
    {foodId: 3, foodName: "spinner", foodImg: "./img/spinner.jpeg"},
]



let orders = JSON.parse(window.localStorage.getItem("orders")) || [
    {
        orderId: 1,
        userId: 1,
        foodId: 2,
        count: 2
    },
    {
        orderId: 2,
        userId: 1,
        foodId: 3,
        count: 1
    }
]
