const {createApp} = Vue

createApp({ 
    data() {
        return {
            titolo: "Ciao",
            urls: ""
        }
    },
    methods:{
        btnclick(){
            this.urls = "https://picsum.photos/200/300"
        }
    }
}).mount('#app')