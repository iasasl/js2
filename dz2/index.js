class GoodsItem {
    constructor(title = '', price = '') {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}&#8381;</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [ 
        { title: 'iPhone', price: 150 },
        { title: 'Samsung', price: 250 },
        { title: 'Xiaomi', price: 350 },
        { title: 'Huawei', price: 450 }
    ]}

    render() {
        let outputHTML = '';
        this.goods.forEach(item => {
            const newGoodItem = new GoodsItem(item.title, item.price);
            outputHTML += newGoodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = outputHTML;
    }

};

class GoodsListItem {
    constructor(title, quantity, price) {
        this.title = title,
        this.quantity = quantity,
        this.price = price
    }
}

const indexGoodsList = new GoodsList();
indexGoodsList.render()