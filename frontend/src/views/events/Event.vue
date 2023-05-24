<template>
  <div>
    <div class="event-container">
      <div class="details">
        <h3>{{ event.name }}</h3>
        <h3>Date:{{ event.date1 }}</h3>
        <h3>Time:{{ event.date2 }}</h3>
      </div>
      <div class="details">
        <p>{{ event.desc }}</p>
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
    };
  },

  async beforeMount() {
    const id = this.$route.params.id;
    const response = await EventsService.getEvent(id);
    this.event = response.data;
  },
};
</script>

<style scoped>
.event-container {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 9px;
  padding: 32px;
  display: grid;
  grid-template-columns: 2fr 2fr;
}
.details h3 {
  margin-bottom: 72px;
}
</style>
