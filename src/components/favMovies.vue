<template>
  <div>
    <div id="app">
      <div id="movies" v-for="favori in favList" :key="favori.id">
        <div class="movie-container">
          <div class="image-container">
            <img :src="favori.Poster" />
          </div>
          <div class="info">
            <h3 class="title">{{ favori.Title }}</h3>
            <p>{{ favori.Type }}</p>
            <div class="action_container">
              <i @click="silkalp(favori)" class="is_favourite fa fa-heart"></i>
              <a
                :href="`http://www.imdb.com/title/${favori.imdbID}`"
                target="_blank"
                class="button"
                >IMDb</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  
  data() {
    return {
          favList : [],
      }
  },

  created () {
      axios
        .get("http://localhost:3000/favoriList")
        .then((response) => {
          this.favList = response.data;
         
        });
  },
  methods : {
    silkalp(deleteItem){
        axios.delete(`http://localhost:3000/favoriList/${deleteItem.id}`)
        .then((response) => {
          console.log("Delete Response", response);
         this.favList = this.favList.filter(i => i.id != deleteItem.id);
        })
        .catch((err) => console.log(err));
  }}
  
};
</script>