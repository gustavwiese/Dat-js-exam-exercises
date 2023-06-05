"use strict";

window.addEventListener("load", start)

/* --------------- !!! ØVELSE 6 !!! ------------------- */

/*

function start(){
    console.log("js kører!");
    showProducts();
}

const products = [
    {
        name: "Apple",
        price: 10,
        inStock: true,
    },
    {
        name: "Orange",
        price: 12,
        inStock: true,
    },
    {
        name: "Banana",
        price: 15,
        inStock: false,
    },
]

function showProducts(){
    for (const product of products){
        if (product.inStock === true){
        const html = `
        <li>Name: ${product.name} - Price: ${product.price} - In stock: ${product.inStock}</li>
        `;
        document.querySelector("#list-container").insertAdjacentHTML("beforeend", html)
    }}
}

*/

/* --------------- !!! ØVELSE 7 !!! ------------------- */

/*

function start(){
    console.log("js running");
    showProducts();
}

const products = [
    {
        name: "Æble",
        price: 20,
        inStock: true,
    },
    {
        name: "Appelsin",
        price: 25,
        inStock: false,
    },
    {
        name: "Vindrue",
        price: 30,
        inStock: true,
    },
    
]

function showProducts(){
    products.sort((a,b) => b.inStock - a.inStock)
    for (const product of products){
        const html = `
        <li>Name: ${product.name} - Price: ${product.price} - In stock: ${product.inStock}</li>
        `;
        document.querySelector("#list-container").insertAdjacentHTML("beforeend", html)
    }
} 

*/

/* --------------- !!! ØVELSE 8 !!! ------------------- */

/*

function start(){
    console.log("js kører");
    showProducts();
}

const products = [
    {
        name: "product 1",
        price: 200,
        inStock: true,
    },
    {
        name: "product 2",
        price: 300,
        inStock: true,
    },
    {
        name: "product 3",
        price: 400,
        inStock: false,
    },
]

function showProducts(){
    for (const product of products){
        const html = `
        <li>Name: ${product.name} - Price: ${product.price} - In stock: ${product.inStock}</li>
        `;
        document.querySelector("#list-container").insertAdjacentHTML("beforeend", html)
    }
}

*/





