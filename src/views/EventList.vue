<template>
  <div>
    <h1>Event Listing</h1>

    <event-card v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import EventCard from '@/components/EventCard.vue';

export default {
  data() {
    return {};
  },
  components: {
    EventCard,
  },
  computed: {
    ...mapState(['events']),
  },
  methods: {
    fetchEvents() {
      this.$store.dispatch('fetchEvents');
    },
  },
  created() {
    this.fetchEvents();
  },
};
</script>

<style lang="sass"></style>
