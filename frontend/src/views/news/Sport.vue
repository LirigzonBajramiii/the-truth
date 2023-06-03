<template>
  <div>
    <div v-if="loading" class="loading" v-loading="loading"></div>
    <div v-if="!loading">
      <div class="latest-news">
        <section class="latest">
          <router-link
            :to="{ name: 'singleNews', params: { id: lastNews._id } }"
          >
            <div>
              <h4 style="margin-bottom: 22px">{{ lastNews.title }}</h4>
              <img
                class="latest-img"
                :src="lastNews.imageUrl"
                width="100%"
                height="400px"
                alt=""
              />
            </div>
          </router-link>
        </section>
        <section class="other-news">
          <div v-for="news in latestNews" :key="news._id">
            <router-link :to="{ name: 'singleNews', params: { id: news._id } }">
              <div class="news-item">
                <img :src="news.imageUrl" class="other-news-img" alt="" />
                <h6>{{ truncateTitle(news.title) }}</h6>
              </div>
            </router-link>
          </div>
        </section>
      </div>
      <div class="in-focus">
        <section class="in-focus-news">
          <h4 style="margin-bottom: 22px">Sport News</h4>
          <div v-for="news in latestNews" :key="news._id">
            <router-link :to="{ name: 'singleNews', params: { id: news._id } }">
              <div class="in-focus-news-item">
                <img :src="news.imageUrl" class="in-focus-news-img" alt="" />
                <h5>{{ news.title }}</h5>
              </div>
            </router-link>
          </div>
        </section>
        <section class="slider">
          <h4 style="margin-bottom: 22px">Carousel News</h4>
          <div class="block">
            <el-carousel height="400px">
              <el-carousel-item v-for="item in latestNews" :key="item._id">
                <router-link
                  :to="{ name: 'singleNews', params: { id: item._id } }"
                >
                  <img :src="item.imageUrl" width="100%" height="100%" alt="" />
                </router-link>
              </el-carousel-item>
            </el-carousel>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import NewsService from "@/services/news/NewsService.js";
export default {
  name: "sport-view",
  data() {
    return {
      newsList: null,
      loading: false,
    };
  },
  methods: {
    async getNewsList() {
      // Old way
      // const response = await fetch("http://localhost:3000/api/news/list");
      // const data = await response.json();
      // this.newsList = data;

      // New way
      try {
        this.loading = true;
        const news = await NewsService.getNews();
        this.newsList = news?.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    truncateTitle(title) {
      if (title.length > 49) {
        return title.substring(0, 49) + "...";
      } else {
        return title;
      }
    },
  },
  computed: {
    lastNews() {
      if (this.newsList) {
        const filteredSportNews = this.newsList.filter(
          (newsObj) => newsObj.category === "Sport"
        );
        console.log(filteredSportNews);
        return filteredSportNews[filteredSportNews.length - 1];
      } else {
        return {};
      }
    },
    latestNews() {
      if (this.newsList) {
        return [...this.newsList]
          .filter((newsObj) => newsObj.category === "Sport")
          .reverse();
      } else {
        return [];
      }
    },
  },
  beforeMount() {
    this.getNewsList();
  },
};
</script>

<style scoped>
.loading {
  margin: auto auto;
  height: 600px;
}
.latest-news {
  display: grid;
  grid-template-columns: 6fr 3fr;
  height: auto;
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
  width: 320px;
  height: 198px;
  border-radius: 6px;
}

.slider {
  /* height: 50px; */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 6px;
  color: #000;
}

.slider img {
  object-fit: cover;
  border-radius: 6px;
}

::v-deep .el-carousel__button {
  display: none;
}

a {
  text-decoration: none;
}

a:link,
a:visited,
a:active {
  color: #30476d;
}

a:hover {
  color: #d6197d;
}

@media (max-width: 1200px) {
  .latest-news {
    display: grid;
    grid-template-columns: 1fr;
  }

  .in-focus {
    display: grid;
    grid-template-columns: 1fr;
  }

  .in-focus-news-img {
    width: 200px;
  }
}
</style>
