
let app = new Vue({
  el: '#app',
  data: {
    current: {
      image: '',
    },
    loading: true,
  },
  created() {
    this.newDish();
  },

  methods: {
    async newDish() {
      try {

        this.loading = true;
        let url = 'https://foodish-api.herokuapp.com/api';
        //const response = await axios.get(url);
        //console.log(respone);
        console.log("JOE");
        axios.get(url)
          .then(response => {
            console.log(response);
            this.current = response.data;
            this.loading = false;
            return true;
          })
          .catch(error => {
            console.log(error);
          })
        console.log("JOE2");

      } catch (error) {
        console.log(error);
      }
    },
    saveDish() {
      this.current
    }
    /*
    getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(100);
      return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and minimum are inclusive
    },
    randomDog() {
      this.index = this.getRandom(1, 100);
    },
    firstDog() {
      this.index = 1;
    },
    lastDog() {
      this.index = 100;
    },
    */
  }

});
