
/*
1. Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
2. Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/



const app = new Vue({
  el: '#app',

  data: {
    mails: [],
    numbeEmails: 10,
  },

  methods: {
    getMail(){
      for(let i = 0; i < this.numbeEmails; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res)=>{
          this.mails.push(res.data.response);

        })

      }
    }
  },
  
  mounted(){
    this.getMail()
  }


})