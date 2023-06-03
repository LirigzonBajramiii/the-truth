<template>
  <div>
    <div v-if="loading" class="loading" v-loading="loading"></div>
    <div v-if="!loading">
      <h3 class="e-details">Event Details</h3>
      <div class="event-container">
        <div class="details border-right">
          <h3>{{ event.name }}</h3>
          <h3>Date: {{ event.date1 | formatDate }}</h3>
          <h3>Time: {{ event.date2 | formatTime }}</h3>
        </div>
        <div class="details">
          <p>
            {{ event.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventsService from "@/services/events/EventsService";
export default {
  name: "event-view",
  data() {
    return {
      event: null,
      loading: false,
    };
  },

  async beforeMount() {
    try {
      this.loading = true;
      const id = this.$route.params.id;
      const response = await EventsService.getEvent(id);
      this.event = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.loading {
  height: 600px;
  margin: auto auto;
}
.event-container {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  color: #495057;
  border-radius: 9px;
  padding: 50px;
  display: grid;
  gap: 32px;
  grid-template-columns: 2fr 2fr;
  margin: 20px auto;
}
.details h3 {
  margin-bottom: 72px;
}

.border-right {
  border-right: 1px solid #ccc;
}

.details {
  padding: 32px;
}

.details p {
  line-height: 1.9;
}

.e-details {
  color: #212529;
  margin: 0;
}

@media (max-width: 1200px) {
  .event-container {
    grid-template-columns: 1fr;
  }

  .border-right {
    border-right: none !important;
    border-bottom: 1px solid #ccc;
  }
}
</style>
