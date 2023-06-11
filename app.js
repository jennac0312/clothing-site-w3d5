// DOM MANIPULATION


// Goal -> retail site
    // dynamically change the entire site with the click of a button

let majorContainer = {
    mens: {
        headImage: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
        productImages: [
            {
                name: 'Sneakers',
                pic: 'https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
            },
            {
                name: 'Boots',
                pic: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
            },
            {
                name: 'Flannels',
                pic: 'https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Scarves',
                pic: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Hoodies',
                pic: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Hats',
                pic: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=423&q=80',
            },
        ],
        textDescription: `Browse our entire selection of men's clothing at H&M. From basics and loungewear to sweaters and suiting, we have something for every season and occasion. Whether you prefer bright colors and loud patterns or neutral, solid colors, find the clothes that match your style.`,
        lowImage: ''
    },
    womens: {
        headImage: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        optionTags: ["Dresses", "Skirts", "Sports", "Heels"],
        productImages: [
            {
                name: 'Dresses',
                pic: 'https://images.unsplash.com/photo-1640923160720-35dddb6348ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Skirts',
                pic: 'https://images.unsplash.com/photo-1619627826693-8b40c611ca59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=372&q=80',
            },
            {
                name: 'Sports',
                pic: 'https://images.unsplash.com/photo-1606902965551-dce093cda6e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Heels',
                pic: 'https://images.unsplash.com/photo-1514047882-673ad74081a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Sweaters',
                pic: 'https://images.unsplash.com/photo-1612629779374-a8432d338af5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Hats',
                pic: 'https://images.unsplash.com/photo-1564463836390-947f23837e02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
        ],
        textDescription: `Find the latest trends of the season and update your wardrobe with new-and-improved clothing and accessories from H&M. Take a look at our plus sizes and discover jeans, dresses, occasion wear and more must-haves in flattering fits. Discover petite dresses and bottoms in an array of styles that will suit you perfectly. From tops, to skirts and jeans, we have you covered for all kinds of occasions. Explore the full range of colors, fabrics and styles now.`,
        lowImage: ''
    },
    kids: {
        headImage: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=648&q=80",
        optionTags: ["BackPacks", "School", "Sneakers", "Toys"],
        productImages: [
            {
                name: 'Sneakers',
                pic: 'https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
            },
            {
                name: 'Boots',
                pic: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
            },
            {
                name: 'Flannels',
                pic: 'https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Scarves',
                pic: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Hoodies',
                pic: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            },
            {
                name: 'Hats',
                pic: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=423&q=80',
            },
        ],
        textDescription: `Our dresses and skirts for your baby girl come in peppy patterns and charming details, all made from gentle fabrics and designed for active, fun-filled days.`,
        lowImage: ''
    }
}
// ----------------------------------------

let mainImageDiv = document.querySelector('.mainImage')
console.log(mainImageDiv)

const topPic = document.querySelector('.topPic')
console.log(topPic)
// let option = document.querySelector('.options')
let options = document.querySelectorAll('.choice')
let productDiv = document.querySelectorAll('.productDiv')
let pic = document.querySelector('.polaroid')
let textBox = document.querySelector('.textContainer')

const products = document.querySelectorAll('.product')


// category buttons
const allButtons = document.querySelectorAll('.tabs')
const mensButton = document.querySelector('.mens')
const womensButton = document.querySelector('.womens')
const kidsButton = document.querySelector('.kids')

console.log(allButtons)

// if its text we can replace it. if its an image we need to create a new image

// const changeTopPic = () => {
//     console.log('clicked mens')
//     // create image
//     let newImage = document.createElement('img')
//         newImage.setAttribute('src', majorContainer.mens.headImage)
//         newImage.setAttribute('class','topPic')
//     // replace with current image
//     mainImage.replaceWith(newImage)

// }
// const changeOptions = () => {
//     let tabz = document.querySelector('div.choice')
//     tabz.remove()
//     // doesnt work
//     // // miniOp.replaceWith("") 
//     // option.remove()
//     let newOption = document.createElement('div')
//     newOption.setAttribute('class','options')

//     // // let text = document.querySelector('.options2')

//     majorContainer.mens.optionTags.forEach((tagName) => {
//         // create elements
//         let text = document.createElement('div')
//         text.innerHTML = tagName

//         // replace element with new element
//         newOption.append(text)
//     })
// }
// const product = () => {
//     majorContainer.mens.productImages.forEach((obj) => {
//         let shopBox = document.createElement('div')
//         shopBox.setAttribute('scr', obj.pic)
//         productBox.append(shopBox)
//     })

// }

// booleans to check category clicked
let isMens
let isWomens
let isKids
let clickedCategory


// check and set clicked category
allButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.classList.value.includes('boys'))
        if(button.classList.value.match('womens')){
            isWomens = true
            isMens = false
            isKids = false
            clickedCategory = 'womens'
        } else if(button.classList.value.match('mens')){
            isMens = true
            isWomens = false
            isKids = false
            clickedCategory = 'mens'
        } else if(button.classList.value.match('kids')){
            isMens = false
            isWomens = false
            isKids = true
            clickedCategory = 'kids'
        }
        console.log(`MENS CLICKED: ${isMens}`)
        console.log(`WOMENS CLICKED: ${isWomens}`)
        console.log(`KIDS CLICKED: ${isKids}`)
        console.log(`CLICKED CATEGORY: ${clickedCategory}`)
    })
})


// change top pic
const changeTopPic = (who) => {
    // check category
    if(who === "mens"){
        topPic.src = majorContainer.mens.headImage
    } else if(who === "womens"){
        topPic.src = majorContainer.womens.headImage
    } else if(who === "kids"){
        topPic.src = majorContainer.kids.headImage
    }
}

// change div options ... children (div.choice)
const changeOptions = (who) => {
    if(who === 'mens'){
        who = majorContainer.mens.optionTags
        console.log(who.length)
    } else if(who === 'womens'){
        who = majorContainer.womens.optionTags
    } else if(who === 'kids'){
        who = majorContainer.kids.optionTags
    }

// didnt work.. replaces with last option who times ... realized i nested in wrong direction.. wont exit forEach loop until for loop runs completelty
    // options.forEach((option) => {
    //     for(let i = 0; i < who.length; i++){
    //         option.innerText = who[i]
    //     }
    // })


// realized who length matches options length so this is easy solution... but what if i had to create new options tags on the fly? this wouldnt work
    for(let i = 0; i < who.length; i++){
        console.log(who[i])
        console.log(options[i])
        options[i].innerText = who[i]
    }

}

 console.log('mens tags:',majorContainer.mens.optionTags.length)


// change images
const changeImages = (who) => {
    
    // create child image with src attribute
    let imgTag = document.createElement('img')
    imgTag.setAttribute('src', '')

    // find who (product images array of {})
    console.log(imgTag)
    if(who === 'mens'){
        who = majorContainer.mens.productImages
    } else if(who === 'womens'){
        who = majorContainer.womens.productImages
    } else if(who === 'kids'){
        who = majorContainer.kids.productImages
    }
    
    // iterate through both productDivs and product images (yes, i realize i can use length of productDivs array since the length are =... again this would not work if who.length > productDivs.length..... does not create more divs on the fly)

    for(let i = 0; i < who.length; i++){
        // console.log('major container',who[i].pic)

        // feels like im cheating but works lol
        productDiv[i].innerHTML = `<img src='${who[i].pic}' >`
        // console.log('html div',productDiv[i])
        // imgTag.src.textContent = who[i].pic
    }

    who.forEach((image) => {
        console.log(image.pic)
    })
    // checking to see if productDiv has img child
    // productDiv[1].appendChild(imgTag)
    // console.log(productDiv[1].firstElementChild)


    // append img tag to each productDiv ...
    // change img src to productImages[i].pic

}
changeImages('mens')


// array of objects
// console.log('mens product images:',majorContainer.mens.productImages[1].pic)


// working functions called inside one main function...

const changeAll = (who) => {
    changeTopPic(who)
    changeOptions(who)

}







// factory function attempt lol

const elementFactory = (parent,pAttributes,child,cAttributes) => {
    
    let childElement = createElement(`${child}`)
    childElement.addAttributes('')
}




// allButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         if(isMens || isWomens || isKids){
//             changeTopPic(clickedCategory)
//             console.log(topPic)
//         }
//     })
// })


// populate products
// const populateProducts = (category) => {
//     console.log(category)
//     products.forEach((img) => {
//         // console.log(img)
//         majorContainer.mens.productImages.forEach((product,img) => {
//             console.log(product)
//             img.src = product.pic
//             console.log(img)
//         })
//         console.log(img)
//     })
// }

// console.log(majorContainer.mens.productImages)

// majorContainer.mens.productImages.forEach((product) => {
//     console.log(product.pic)
// })