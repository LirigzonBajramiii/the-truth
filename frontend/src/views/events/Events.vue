<template>
  <div class="event-container">
    <div v-for="event in eventsList" :key="event._id" class="event-item">
      <div class="event-content">
        {{ event.name }}
        {{ event.desc }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  background-color: aliceblue;
  margin-top: 58px;
  padding: 20px;
  flex-direction: column;
}

.event-item {
  width: 400px;
  height: 100px;
  background-color: white;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.event-content {
  padding: 30px;
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
