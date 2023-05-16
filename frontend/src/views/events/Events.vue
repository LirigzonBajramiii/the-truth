<template>
  <div>
    <h3 class="events">Events</h3>
    <div v-for="event in eventsList" :key="event._id">
      <div class="event-content">
        <h3 class="event-name">{{ event.name }}</h3>
        <p>{{ event.desc }}</p>
        <p>Date: {{ event.date1 }}</p>
        <p>Time: {{ event.date2 }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-content {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 60%;
  padding: 18px;
  border-radius: 6px;
  margin: 0 auto;
  margin-bottom: 14px;
}

.event-name {
  margin-bottom: 22px;
}

.event-content p {
  margin-bottom: 10px;
}

.events {
  text-align: center;
  margin-bottom: 22px;
}
</style>

<script>
import EventsService from "@/services/events/EventsService.js";
export default {
  name: "events-view",
  data() {
    return {
      eventsList: null,
    };
  },
  methods: {
    async getEventsList() {
      try {
        const events = await EventsService.getEvents();
        this.eventsList = await events?.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeMount() {
    this.getEventsList();
  },
};
</script>
