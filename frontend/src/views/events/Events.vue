<template>
  <div>
    <div v-if="loading" class="loading" v-loading="loading"></div>
    <div v-if="!loading">
      <div class="search_event">
        <h3 class="events">Events</h3>
        <el-input placeholder="Search events" v-model="search"></el-input>
      </div>
      <div v-for="event in filteredEvents" :key="event._id">
        <div class="event-content">
          <div>
            <router-link :to="{ name: 'event', params: { id: event._id } }">
              <h3 class="event-name">{{ event.name }}</h3>
              <p>Date: {{ event.date1 }}</p>
              <p>Time: {{ event.date2 }}</p>
            </router-link>
          </div>

          <div v-if="user?.role?.admin" class="controls">
            <el-button type="warning" @click="editEventsHandler(event._id)"
              >Edit</el-button
            >
            <el-button type="danger" @click="deleteEvent(event._id)"
              >Delete</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventsService from "@/services/events/EventsService.js";
import { mapState } from "vuex";
export default {
  name: "events-view",
  data() {
    return {
      eventsList: null,
      search: "",
      loading: false,
    };
  },
  methods: {
    async getEventsList() {
      try {
        this.loading = true;
        const events = await EventsService.getEvents();
        this.eventsList = await events?.data;
        this.loading = false;
      } catch (error) {
        console.log(error);
      }
    },
    async editEventsHandler(id) {
      this.$router.push({ name: "editEvent", params: { id: id } });
    },
    async deleteEvent(id) {
      if (confirm("Are you sure you want to delete this event?")) {
        console.log(id);
        await EventsService.deleteEvent(id);
        this.eventsList = this.eventsList.filter((item) => item._id !== id);
      }
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.users.user,
    }),
    filteredEvents() {
      if (this.search) {
        return this.eventsList?.filter((item) =>
          item?.name.toLowerCase().includes(this.search)
        );
      }
      return this.eventsList;
    },
  },
  beforeMount() {
    this.getEventsList();
  },
};
</script>

<style scoped>
.loading {
  margin: auto auto;
  height: 600px;
}
.search_event {
  display: flex;
  align-items: center;
  gap: 32px;
  margin: 0 auto;
  width: 80%;
  margin-bottom: 22px;
}

.event-content {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 80%;
  padding: 18px;
  border-radius: 6px;
  margin: 0 auto;
  margin-bottom: 14px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
}

.event-content a {
  text-decoration: none;
  color: #000;
}
.event-name {
  margin-bottom: 22px;
}

.event-content p {
  margin-bottom: 10px;
}

.events {
  text-align: center;
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
</style>
