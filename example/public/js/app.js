'use strict';

/*-----------------
 Filters
 -----------------*/
/*
Vue.filter('uppercase', function (value) {
    return value.toUpperCase();
});*/

/*-----------------
 APP
 -----------------*/
function startVue() {
    app = new Vue({

        // We want to target the div with an id of 'componentsList'
        el: '#componentsList',

        data: {
            testData : 22,
            pluginsData : []
        },

        created: function () {
        },

        methods: {},

        computed: {}
    });
}
