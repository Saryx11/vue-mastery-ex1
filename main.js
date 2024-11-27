var app = new Vue({
    el:'#app',
    data: {
        product : "Chaussettes",
        description : "Une paire de chaussettes chaudes et confortables",
        image:'./images/vmSocks-green-onWhite.jpg',
        altText:"Une paire de chaussettes vertes",
        inStock:true,
        inventory: 0,
        onSale: false,
        details: ["80% coton", "20% polyester","Unisexe"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./images/vmSocks-green-onWhite.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./images/vmSocks-blue-onWhite.jpg"
            }
        ],
        tailles: ["35-39","40-42","43-45"],
        cart: 0
    },
    methods:{
       addToCart: function (){
        this.cart+=1
       },
       updateProduct: function(variantImage){
        this.image = variantImage
       },
       deleteFromCart: function (){
        if (this.cart>0){
        this.cart-=1}
       }
    }
})