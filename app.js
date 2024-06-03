const app = Vue.createApp({
    data() {
      return {
        listItems: []
      }
    },
    methods: {
      async fetchData() {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/posts")
          const finalRes = await res.json()
          this.listItems = finalRes
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      }
    },
    mounted() {
      this.fetchData()
    }
  })
  
  app.mount('#app')
  