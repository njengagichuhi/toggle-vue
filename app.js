const app = Vue.createApp({
  //template: "<h2>i am so blessed</h2>"
  data() {
    return {
      showBook: true,
      book: [
        { name: "legend of the seeker", auther: "lamuel",Img:'asset/1.jpg',isFav:true },
        { name: "the alchemist", auther: "paulo coelho" ,Img:'asset/2.jpg',isFav:false},
        { name: "mutant of the seeker", auther: "anonimouse",Img:'asset/3.jpg',isFav:true},
      ],
    };
  },
  methods: {
    togleshowBook() {
      this.showBook = !this.showBook;
    },
    toglechange(book){
     book.isFav=!book.isFav
    }
  },
  computed:{
    filterdBooks(){
      return this.book.filter((book)=>book.isFav)}
    }
  }
);
app.mount("#app");
