<template>
  <div>
    <div class="latest-news">
      <section class="latest">
        <div>
          <h1 style="margin-bottom: 22px">{{ latestNews.title }}</h1>
          <img
            class="latest-img"
            :src="latestNews.imageUrl"
            width="100%"
            height="400px"
            alt=""
          />
        </div>
      </section>
      <section class="other-news">
        <div v-for="news in newsList" :key="news._id">
          <div class="news-item">
            <img :src="news.imageUrl" class="other-news-img" alt="" />
            <h4>{{ news.title }}</h4>
          </div>
        </div>
      </section>
    </div>
    <div class="in-focus">
      <section class="in-focus-news">
        <h4 style="margin-bottom: 22px">Top News</h4>
        <div v-for="news in newsList" :key="news._id">
          <div class="in-focus-news-item">
            <img :src="news.imageUrl" class="in-focus-news-img" alt="" />
            <h4>{{ news.title }}</h4>
          </div>
        </div>
      </section>
      <section class="slider">
        <h4 style="margin-bottom: 22px">Carousel News</h4>
        <div class="block">
          <el-carousel height="400px">
            <el-carousel-item v-for="item in newsList" :key="item._id">
              <img :src="item.imageUrl" width="100%" height="100%" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </section>
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
  computed: {
    latestNews() {
      if (this.newsList) {
        const lastPost = this.newsList[this.newsList?.length - 1];
        return lastPost;
      }
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
  height: 500px;
  gap: 22px;
  color: #fff;
  color: #000;
}

.latest {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 6px;
}

.latest-img {
  border-radius: 6px;
}

.other-news {
  width: 100%;
  overflow: auto;
  height: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 6px;
}

.other-news-img {
  width: 142px;
  height: 80px;
}

.news-item {
  display: flex;
  gap: 22px;
  padding-bottom: 10px;
}

.in-focus {
  display: grid;
  grid-template-columns: 6fr 3fr;
  gap: 22px;
  color: #fff;
  margin-top: 58px;
}

.in-focus-news {
  color: #000;
  width: 100%;
  height: auto;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 6px;
}

.in-focus-news-item {
  display: flex;
  gap: 32px;
  margin-bottom: 12px;
}

.in-focus-news-img {
  width: 320px !important;
  height: 198px;
  border-radius: 6px;
}

.slider {
  height: 500px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 6px;
  color: #000;
}

.slider img {
  object-fit: cover;
  border-radius: 6px;
}
</style>
