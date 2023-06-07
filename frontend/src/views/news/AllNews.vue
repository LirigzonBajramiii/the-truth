<template>
  <div>
    <div class="in-focus">
      <section class="in-focus-news">
        <div class="title-search-box">
          <h4>All News</h4>
          <div class="search-header">
            <el-input
              placeholder="Search your news"
              v-model="search"
            ></el-input>
            <div class="arrows">
              <arrow-down-icon
                @click="sortAsc"
                size="1.5x"
                class="custom-class"
              ></arrow-down-icon>
              <arrow-up-icon
                @click="sortDesc"
                size="1.5x"
                class="custom-class"
              ></arrow-up-icon>
            </div>
          </div>
        </div>
        <div v-for="news in filteredNews" :key="news._id">
          <div class="news-content">
            <router-link :to="{ name: 'singleNews', params: { id: news._id } }">
              <div class="in-focus-news-item">
                <img :src="news.imageUrl" class="in-focus-news-img" alt="" />
                <h6>{{ news.title }}</h6>
              </div>
            </router-link>
            <div class="controls">
              <el-button type="warning" @click="editNewsHandler(news._id)"
                >Edit</el-button
              >
              <el-button type="danger" @click="deleteNews(news._id)"
                >Delete</el-button
              >
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NewsService from "@/services/news/NewsService.js";
import { ArrowDownIcon } from "vue-feather-icons";
import { ArrowUpIcon } from "vue-feather-icons";
export default {
  name: "allNews-view",
  components: {
    ArrowDownIcon,
    ArrowUpIcon,
  },
  data() {
    return {
      newsList: null,
      search: "",
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
        const news = await NewsService.getNews();
        this.newsList = news?.data;
      } catch (error) {
        console.log(error);
      }
    },
    sortAsc() {
      this.newsList = this.newsList?.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    },
    sortDesc() {
      this.newsList = this.newsList?.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    },
    async editNewsHandler(id) {
      this.$router.push({ name: "editNews", params: { id: id } });
    },
    async deleteNews(id) {
      console.log(id);
      await NewsService.deleteNews(id);
      this.newsList = this.newsList.filter((item) => item._id !== id);
    },
  },
  computed: {
    latestNews() {
      if (this.newsList) {
        return [...this.newsList].reverse();
      } else {
        return [];
      }
    },
    filteredNews() {
      if (this.search) {
        return this.newsList?.filter((item) =>
          item?.title.toLowerCase().includes(this.search)
        );
      }
      return this.latestNews;
    },
  },
  beforeMount() {
    this.getNewsList();
  },
};
</script>

<style scoped>
.arrows {
  display: flex;
}
.search-header {
  display: flex;
  gap: 22px;
  align-items: center;
}
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

/* .in-focus {
  width: 100%;
} */

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

::v-deep .el-carousel__button {
  display: none;
}

a {
  text-decoration: none;
}

.title-search-box {
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
  /* height: 50px; */
  margin-bottom: 22px;
}

a:link,
a:visited,
a:active {
  color: #30476d;
}

a:hover {
  color: #d6197d;
}

.news-content {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 40px;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.controls button {
  width: 100%;
  margin: 0px;
}

@media (max-width: 1200px) {
  .in-focus-news-img {
    max-width: 200px;
    height: 130px;
    border-radius: 6px;
  }

  .controls {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .controls button {
    width: 100%;
    margin: 0px;
  }

  .news-content {
    gap: 10px;
  }
}
</style>
