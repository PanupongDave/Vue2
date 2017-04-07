  var app = new Vue({
      el: '#root',
      data: {
        newName: '',
        names:['joe','Mary','Jane','Jack']
      },

      delimiters: ["((","))"],

      methods:{
        addName(){
          this.names.push(this.newName);
          console.log(this.names);
        }
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
