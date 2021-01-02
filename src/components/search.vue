<template>
  <div>
    <div id="app">
      <input
        type="text"
        autofocus
        placeholder="Film adını yazın ve enter tuşuna basın..."
        class="search_text"
        v-model="searchInpo"
        @keydown.enter="api"
      />
      <div id="movies" v-for="films in filmList.Search" :key="films.imdbID">
        <div class="movie-container">
          <div class="image-container">
            <img :src="films.Poster" />
          </div>
          <div class="info">
            <h3 class="title">{{ films.Title }}</h3>
            <p>{{ films.Type }}</p>
            <div class="action_container">
              <i
                @click="gonder(films)"
                class="is_favourite fa fa-heart"
                :class="[
                  (films.favorite = true
                    ? 'is_favourite fa fa-heart'
                    : 'isFavourite fa fa-heart'),
                ]"
              >
              </i>

              <a
                is_favourite
                fa
                fa-heart
                :href="`http://www.imdb.com/title/${films.imdbID}`"
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
      searchInpo: null,
      filmList: [],
    };
  },

  methods: {
    api() {
      fetch(`http://www.omdbapi.com/?apikey=ea67c8a9&s=${this.searchInpo}`)
        .then((response) => response.json())
        .then((response) => {
          this.filmList = response;
        });
    },
    gonder(item) {
      axios
        .post("http://localhost:3000/favoriList", { ...item, favorite: true })
        .then((response) => {});
    },
  },
};
</script>
