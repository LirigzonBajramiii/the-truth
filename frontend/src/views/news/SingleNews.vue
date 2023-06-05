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

      <div class="comments">
        <div>
          <h5 class="comments-title">Comments:</h5>
          <label for="">Your comment:</label>
          <div class="comment-query">
            <el-input
              placeholder="Please write your comment"
              v-model="comment"
            ></el-input>
            <el-button type="primary" plain @click="addComment"
              >Add Comment</el-button
            >
          </div>
        </div>
      </div>
      <div style="margin-top: 32px">
        <section v-for="(com, index) in filteredComments" :key="index">
          <div class="comments-section">
            <p>{{ com.comment }}</p>
            <p style="font-size: 14px; margin: 0px">
              User: <strong>{{ com.userName }}</strong>
            </p>
            <span style="font-size: 10px"> Comment #{{ index + 1 }}</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import NewsService from "@/services/news/NewsService";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import CommentsService from "@/services/comments/CommentsService";
import { mapState } from "vuex";

export default {
  name: "Single-News",
  props: ["id"],
  data() {
    return {
      singleNewsData: null,
      formatedDate: null,
      loading: false,
      comment: "",
      commentList: [],
    };
  },
  methods: {
    async addComment() {
      const newComment = {
        userName: this.user.displayName,
        comment: this.comment,
        commentId: this.id,
      };

      const response = await CommentsService.postComment(newComment);
      console.log(response);

      // Update commentList with the latest comments from the server
      const res = await CommentsService.getComments();
      this.commentList = res.data;

      // Clear the comment input field
      this.comment = "";
    },
  },
  computed: {
    descriptionsParagraphs() {
      return this.singleNewsData?.desc?.split(".");
    },
    formatDistance() {
      return formatDistanceToNow(new Date(this.singleNewsData?.createdAt), {
        addSuffix: true,
      });
    },
    filteredComments() {
      if (this.commentList) {
        return this.commentList.filter(
          (comment) => comment.commentId === this.id
        );
      } else {
        return [];
      }
    },
    ...mapState({
      user: (state) => state.users.user,
    }),
  },
  async beforeMount() {
    try {
      this.loading = true;
      const singleNews = await NewsService.getSingleNews(this.id);
      this.singleNewsData = singleNews.data;

      const res = await CommentsService.getComments();
      this.commentList = res.data;
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

.comment-query {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
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

.comments-section {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  padding: 10px;
  margin: 10px 0px;
}

.comments-title {
  color: #17a2b8;
}

.comments {
  margin-top: 62px;
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
