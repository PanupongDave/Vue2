var app = new Vue({
  el: '#myApp',
  data:{
    isLoading: false
},

methods: {
  toggleClass(){
    if (this.isLoading == false) {
      this.isLoading = true;
    } else {
      this.isLoading = false;
    }

  }
}
});
