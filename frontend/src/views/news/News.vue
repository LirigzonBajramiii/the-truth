<template>
  <div>
    <div class="latest-news">
      <section class="latest">
        {{news}}
      </section>
      <section class="other-news">
        Lajme tjera
      </section>
    </div>
    <div class="in-focus">
      <section class="in-focus-news">
        In focus lajme
      </section>
      <section class="slider">
        Slider
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news-view",
    data() {
      return {
        news: null
      }
    },
    methods:  {
       async getNews() {
        
        const response = await fetch('http://localhost:3000/api/news/list');
        const data = await response.json();
        this.news = data;
        
      }
    },
    beforeMount() {
      this.getNews();
    }
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
  height: 400px;
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
