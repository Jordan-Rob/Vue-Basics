const app = Vue.createApp({
    data(){
        return {
            titles:['golden fleece', 'Hyperion', 'Jersy'],
            title:'yolo',
            name:'coolio',
            age:24,
            condi:true
        }
    },
    methods: {
        changeTitle(ttl){
            this.title=ttl
        },
        changeCondi(){
            if (this.condi === true) {
                this.condi = false
            }else{
                this.condi = true
            }
        },
        handleEvent(){
            console.log('event')
        }
    },
})

app.mount('#app')