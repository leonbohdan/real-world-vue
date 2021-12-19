<template>
  <div>
    <h1>Event Listing</h1>

    <event-card v-for="event in events" :key="event.id" :event="event" />

    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
      >
        Prev Page
      </router-link>
    </template>

    <span v-if="page != 1 && isLastPage">|</span>

    <router-link
      v-if="isLastPage"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
    >
      Next Page
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventCard from '@/components/EventCard.vue';

export default {
  data() {
    return {
      perPage: 3,
    };
  },
  components: {
    EventCard,
  },
  computed: {
    ...mapState(['events', 'eventsTotal']),
    page() {
      // What page we're currently on
      return parseInt(this.$route.query.page) || 1;
    },
    isLastPage() {
      return this.eventsTotal > this.page * this.perPage;
    },
  },
  methods: {
    fetchEvents() {
      this.$store.dispatch('fetchEvents', {
        perPage: this.perPage, // <-- How many items to display per page
        page: this.page, // <-- What page we're on
      });
    },
  },
  created() {
    this.fetchEvents();
  },
};
</script>

<style lang="sass"></style>
