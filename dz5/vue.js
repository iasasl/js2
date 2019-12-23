const app = new Vue({
    el: '#container',
    data: {
        goods: [
            { name: 'iPhone', price: 150 },
            { name: 'Samsung', price: 250 },
            { name: 'Xiaomi', price: 350 },
            { name: 'Huawei', price: 450 },
        ],
        search: '',
        isVisibleCart: '',
    },
    computed: {
        filterGoods: function() {
            let goods = this.goods;
            let searchRequest = this.search;
            if (!searchRequest) {
                return goods;
            }
            searchRequest = searchRequest.toLowerCase();
            goods.filter(item => item.match(searchRequest));
        },
    },
    methods: {
        
    },
});