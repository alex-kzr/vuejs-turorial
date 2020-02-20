new Vue({
    el: '#vue-app',
    data: {
        name: 'Alex',
        job: 'Web developer',
        website: 'http://vuejs.org'
    },
    methods: {
        greet: function(dayTime){
            return 'Good ' + dayTime + ' ' + this.name + '!';
        }
    }
});