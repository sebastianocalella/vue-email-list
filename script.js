const { createApp } = Vue

createApp({
    data() {
    return {
        emailList : []
    }
    },
    methods:{
        getRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                console.log(response)
            })
        },
    },
    created(){
        this.getRandomEmail()
    }

}).mount('#app')