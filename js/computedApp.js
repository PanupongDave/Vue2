var app = new Vue({
  el: '#myApp',

  data: {
    input1: 20,
    input2: 40

  },

  delimiters: ["<%","%>"],

  computed: {
    thisSum(){
      return this.input1 + this.input2;
    }
  }
});
