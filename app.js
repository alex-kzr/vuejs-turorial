new Vue({
    el: '#vue-app',
    data: {
        age: 37        
    },
    methods: {     
        add: function(){
            this.age++;
        },
        subtract: function(){
            this.age--;
        }
    }
});