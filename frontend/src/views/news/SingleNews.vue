<template>
  <div>
    <div v-if="loading" class="loading" v-loading="loading"></div>
    <div v-if="!loading" class="single--news-container">
      <h4 class="title">{{ singleNewsData?.title }}</h4>
      <img class="single--news-img" :src="singleNewsData?.imageUrl" alt="" />
      <p>
        {{ formatDistance }}
      </p>
      <h6 class="category">Category: {{ singleNewsData?.category }}</h6>

      <p
        v-for="(paragraph, index) in descriptionsParagraphs"
        :key="index"
        class="description"
      >
        {{ paragraph }}
      </p>
      <h5 class="author">Author: {{ singleNewsData?.author }}</h5>
    </div>
  </div>
</template>

<script>
import NewsService from "@/services/news/NewsService";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default {
  name: "Single-News",
  props: ["id"],
  data() {
    return {
      singleNewsData: null,
      formatedDate: null,
      loading: false,
    };
  },
  methods: {},
  computed: {
    descriptionsParagraphs() {
      return this.singleNewsData?.desc?.split(".");
    },
    formatDistance() {
      return formatDistanceToNow(new Date(this.singleNewsData?.createdAt), {
        addSuffix: true,
      });
    },
  },
  async beforeMount() {
    try {
      this.loading = true;
      const singleNews = await NewsService.getSingleNews(this.id);
      this.singleNewsData = singleNews.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.loading {
  margin: auto auto;
  height: 600px;
}
.single--news-container {
  margin: 30px 90px;
}

.title {
  font-size: 50px;
  text-align: center;
  margin: 0 25px;
  margin-bottom: 22px;
  letter-spacing: -2px;
}

.single--news-img {
  width: 100%;
  height: 550px;
  border-radius: 9px;
  margin-bottom: 22px;
}

.description {
  width: 60%;
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 32px;
}

.category {
  width: 200px;
  background-color: #30476d;
  border-radius: 200px;
  padding: 5px;
  text-align: center;
  color: #fff;
  margin-top: 22px;
  margin-bottom: 36px;
}

@media (max-width: 1200px) {
  .description {
    width: 100%;
    font-size: 18px;
  }

  .title {
    font-size: 28px;
  }

  .single--news-img {
    width: 100%;
    height: auto;
    border-radius: 9px;
    margin-bottom: 22px;
  }

  .author {
    font-size: 16px;
  }
}
</style>
