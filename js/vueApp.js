  var app = new Vue({
      el: '#root',
      data: {
        x: 20,
        y: 40,
        result: 0,
      },

      delimiters: ["((","))"],

      methods:{
        this.result : this.x * this.y
      }

      // mounted(){
      //   document.querySelector('#button').addEventListener('click', () =>{
      //     let name = document.querySelector('#input');
      //
      //     app.names.push(name.value);
      //   });
      //
      // }
    });
