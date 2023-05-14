<template>
  <div>
    <h2>{{ singleNewsData?.title }}</h2>
    <p>{{ singleNewsData?.desc }}</p>
  </div>
</template>

<script>
import NewsService from "@/services/news/NewsService";

export default {
  name: "Single-News",
  props: ["id"],
  data() {
    return {
      singleNewsData: null,
    };
  },
  methods: {},
  computed: {},
  async beforeMount() {
    const singleNews = await NewsService.getSingleNews(this.id);
    this.singleNewsData = singleNews.data;
  },
};
</script>
