const goods = [
    { title: 'iPhone', price: 150 },
    { title: 'Samsung', price: 250 },
    { title: 'Xiaomi', price: 350 },
    { title: 'Huawei', price: 450 }
];

const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}&#8381;</p></div>`;
};

const renderGoodsList = (list) => {
    const goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
};

renderGoodsList(goods);