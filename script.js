const { createApp } = Vue

createApp({
    data() {
    return {
        emailList : [],
        actualEmail : 1
    }
    },
    methods:{
        getRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                console.log(this.actualEmail)
                console.log(response)
                this.actualEmail = response.data.response
                console.log(this.actualEmail)
            })
        },
    },
    created(){
        this.getRandomEmail()
    }

}).mount('#app')