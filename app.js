new Vue({
    el: '#vue-app',
    data: {
        name: 'Alex',
        job: 'Web developer'
    },
    methods: {
        greet: function(){
            return 'Good Morning!'
        }
    }
});