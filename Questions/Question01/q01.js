var itemArray = [

    {
        name: "Juice",
        price: "50",
        quantity: "3",
        totalPrice: function () {
            return this.price * this.quantity;
        }
    },
    {
        name: "Cookie",
        price: "30",
        quantity: "9",
        totalPrice: function () {
            return this.price * this.quantity;
        }
    },
    {
        name: "T-shirt",
        price: "880",
        quantity: "1",
        totalPrice: function () {
            return this.price * this.quantity;
        }
    },
    {
        name: "Pen",
        price: "100",
        quantity: "2",
        totalPrice: function () {
            return this.price * this.quantity;
        }
    }
]


for (var i = 0; i < itemArray.length; i++) {
    
document.write(`<div class="card">
<h4>Printing Total Prices of Each Item and Item Name in Browser</h4>
<span>Item no ${i + 1}</span>
<span>  Item Name : ${itemArray[i].name} </span>
<span>Item Price: ${itemArray[i].price}</span>
<span>Item Quantity : ${itemArray[i].quantity}</span>
<span>Total Prices : ${itemArray[i].totalPrice()}</span>
</div>`);
}