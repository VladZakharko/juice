let db = JSON.parse(localStorage.getItem('db')) || [];


let data = {
    "drinks": [
        {
            name: 'Sandora',
            count: 0,
            category: 'Cік',
            price: 40,
            value: 1
        },
        {
            name: 'Садочок',
            count: 0,
            category: 'Cік',
            price: 38,
            value: 1
        }
    ]
}

// localStorage.setItem('db', JSON.stringify(data));

function setup() {
    for (let el of db.drinks) {

        $(`#orderName`).append(`<option value='${el.name}'>${el.name}</option>`)

        $('.goodsContainer').append(`<div class='goodsItem'>
        <h2>${el.name}</h2>
        </div>`)
    }
    for (let el of db.orders) {
        console.log(el);
        $(`.ordersContainer`).append(`<div class='orderItem'>
            <div>Name: ${el.orderName}</div>
            <div>Price: ${el.orderPrice}</div>
            <div>Count: ${el.orederCount}</div>
            <div>Delivery: ${el.orderDeliveryPrice}</div>
            <div>Date: ${el.data.subster(0, 10)}</div>
        </div>`)
    }
}
setup();

$(`#orderBtn`).click(function () {
    $(`.orderPopup`).css(`display`, `flex`);
});

$(`#makeOrder`).click(function () {
    let newOrder = {
        type: 'order',
        orderName: $(`#orderNeme`).val(),
        orederCount: parseInt($(`#orderCount`).val()),
        orderPrice: parseInt($(`#orderPrice`).val()),
        orderDeliveryPrice: parseInt($(`#orderDeliveryPrice`).val()),
        data: new Date().toLocaleString()
    };
    console.log(newOrder);
    db = JSON.parse(localStorage.getItem(`db`)) || [];
    db.orders.push(newOrder)
    localStorage.setItem(`db`, JSON.stringify(db));
    $(`.orderPopup`).css(`display`, `none`);
})