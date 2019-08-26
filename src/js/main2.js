(function() {
  'use strict'

  // component の勉強
  var likeComponent = Vue.extend({
    // propsは配列かオブジェクトで受け取る
    // props: ['message'],
    props: {
      message: {
        type: String,
        default: 'Like',
      }
    },
    data: function() {
      return {
        count: 0
      }
    },
    template: '<div><button @click="countUp">{{ message }} {{ count }}</button></div>',
    methods: {
      countUp: function() {
        this.count++;
        this.$emit('increment');
      }
    }
  });

  var app = new Vue({
    el: '#app',
    components: {
      'like-component': likeComponent
    },
    data: {
      total: 0,
    },
    methods: {
      incrementTotal: function() {
        this.total++;
      }
    }
  });
})();
