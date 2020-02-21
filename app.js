new Vue({
    el: '#vue-app',
    data: {    
        a: 0,
        b: 0,
        age: 20
    },
    methods: { 
                
    },
    computed: {
        addToA: function(){
            console.log('addToA');
            return this.age + this.a;
        },
        addToB: function(){
            console.log('addToB');
            return this.age + this.b;
        }
    }
});