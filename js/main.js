const list = new Vue({
    el: '#list',
    data: {
        listItems: [],
        listValue: '',
    },
    methods: {
        add() {
            this.listItems.push(this.listValue);
            this.listValue = '';
        },
        remove(itemIndex) {
            this.listItems.splice(itemIndex,1 );
        }
    }
});