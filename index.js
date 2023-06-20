const product= [
    {
        id: 1,
        image: 'images/foldable-phone.png ',
        title: 'Z-flip Foldable Mobile',
        price: 120
    }, 
    {
        id: 2,
        image: 'images/air-pods.png ',
        title: 'Air Pod Pro',
        price: 60
    },
    {
        id: 3,
        image: 'images/camera.png ',
        title: '200 DSLR camera',
        price: 230
    },
    {
        id: 4,
        image: 'images/headphone.jpg ',
        title: 'Headphone',
        price: 100
    }
];

const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = categories.map((item)=>{
        let {image,title,price} = item;
        return(
            ` <article> 
                <figure class="box">
                    <img class="img-one" src=${image} width="200"height="200"></img>
                    <p>${title}</p>
                    <p>$ ${price}.00</p>`+
                    "<button onclick='addToCart("+(i++)+")'>Add to cart</button>" +
                ` </figure>
            </article>` 
    
        )
    }
).join('')

let cart= [];

function addToCart(a){
    cart.push({...categories[a]});
    displayCart(); 
}

function delElement(a){
    cart.splice(a, 1);
    displayCart();
}

function displayCart(a){
    let j=0; total= 0;
    document.getElementById('count').innerHTML= cart.length;
    if(cart.length=== 0){
        document.getElementById('cartItem').innerHTML = 'Your cart is empty';
        document.getElementById('total').innerHTML= "$ "+0+" .00";
    }else{
        document.getElementById('cartItem').innerHTML= cart.map((items)=>{
            let{image, title, price}= items;
            total = total + price;
            document.getElementById('total').innerHTML= "$ "+total+" .00";
            return( 
                `<div id="cartItem">
                    <div class ="row" >
                        <img class="img" src=${image}></img>
                        <p style="font-size:12px">${title}</p>
                        <p style="color:red; font-size:12px">$${price}.00</p> 
                        <i class="fa-solid fa-trash" onclick="delElement('+ (j++) +')"></i>
                    </div>
                </div>` 

            );
        }).join(''); 
    }
};
