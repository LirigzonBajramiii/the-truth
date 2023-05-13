<template>
  <div>
    <div class="latest-news">
      <section class="latest">
        <div>
          <h4>{{ newsList[0].title }}</h4>
          <img :src="newsList[0].imageUrl" width="100%" height="400px" alt="" />
        </div>
      </section>
      <section class="other-news">
        <div v-for="news in newsList" :key="news._id">
          <h3>{{ news.title }}</h3>
          <img :src="news.imageUrl" width="100%" height="198px" alt="" />
        </div>
      </section>
    </div>
    <div class="in-focus">
      <section class="in-focus-news">In focus lajme</section>
      <section class="slider">Slider</section>
    </div>
  </div>
</template>

<script>
export default {
  name: "news-view",
  data() {
    return {
      newsList: null,
    };
  },
  methods: {
    async getNews() {
      const response = await fetch("http://localhost:3000/api/news/list");
      const data = await response.json();
      this.newsList = data;
    },
  },
  beforeMount() {
    this.getNews();
  },
};
</script>

<style scoped>
.latest-news {
  display: grid;
  grid-template-columns: 6fr 3fr;
  gap: 22px;
  color: #fff;
}

.latest {
  width: 100%;
  height: 100%;
  background-color: darkcyan;
}

.other-news {
  width: 100%;
  height: auto;
  background-color: brown;
}

.in-focus {
  display: grid;
  grid-template-columns: 6fr 3fr;
  gap: 22px;
  color: #fff;
  margin-top: 58px;
}

.in-focus-news {
  width: 100%;
  height: auto;
  background-color: coral;
}

.slider {
  background-color: darkgreen;
}
</style>
