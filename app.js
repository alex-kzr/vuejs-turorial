new Vue({
    el: '#vue-app',
    data: {
        name: 'Alex',
        job: 'Web developer',
        website: 'http://vuejs.org',
        websiteTag: '<a href="http://vuejs.org">Vue.js site again</a>'
    },
    methods: {
        greet: function(dayTime){
            return 'Good ' + dayTime + ' ' + this.name + '!';
        }
    }
});