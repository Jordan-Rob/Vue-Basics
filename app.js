const app = Vue.createApp({
    data(){
        return {
            titles:['golden fleece', 'Hyperion', 'Jersy'],
            title:'yolo',
            name:'coolio',
            age:24,
            condi:true,
            x: 0,
            y: 0,
            books: [
                {id:1, title:'golden fleece', author:'fussRo', img:'assets/1.jpg', isFave:true},
                {id:2, title:'Hyperion', author:'fussRo', img:'assets/2.jpg', isFave:false},
                {id:3, title:'Jersy', author:'fussRo', img:'assets/3.jpg', isFave:true},
                
            ]
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
        },
        /* 
        handleEvent(e){
            console.log(e)
        },
        */
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFave(book){
            book.isFave = !book.isFave
        }
    },
    computed: {
        filteredBooks(){
            return this.books.filter(b => b.isFave)
        }
    },
})

app.mount('#app')