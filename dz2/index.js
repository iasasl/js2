const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
function makeGETRequest(url) {
    return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        } else {
            xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const body = JSON.parse(xhr.responseText);
                    resolve(body)
                } else {
                    reject(xhr.responseText);
                }
            }
        };
        xhr.onerror = function (err) {
            reject(err);
        };

        xhr.open('GET', url);
        xhr.send();
    });
}

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
        this.goods = [];
        this.filteredGoods = [];
    }

    fetchGoods()  {
        return makeGETRequest(`${API_URL}/catalogData.json`)
          .then((goods) => {
              this.goods = goods;
              this.filteredGoods = goods;
          })
          .catch(e => e);
    }

    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter((good) => regexp.test(good.product_name));
        this.render();
    }

    totalPrice() {
        return this.goods.reduce((accum, item) => {
            if (item.price) accum += item.price;
            return accum;
        }, 0);
    }

    render() {
        let listHtml = '';
        this.filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }


};

class GoodsListItem {
    constructor(title, quantity, price) {
        this.title = title,
        this.quantity = quantity,
        this.price = price
    }
}

class Basket extends GoodsList {
    constructor(props) {
        super(props);
    }
    clean() {}
    incGood() {}
    decGood() {}
}

class BasketItem extends GoodsItem {
    constructor(props) {
        super(props);
    }
    delete() {}
}


const list = new GoodsList();
list.fetchGoods().then(() => {
    list.render();
}).catch(e => console.error(e));