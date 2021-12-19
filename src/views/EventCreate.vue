<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>

    <p>This Event was created by {{ user.id }}</p>

    <p>There are {{ catLength }} categories</p>

    <p>{{ getEventById(2) }}</p>

    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getEventById']),
    // getEvent() {
    //   return this.$store.getters.getEventById;
    // },
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapState(['user', 'categories']),
  },
};
</script>

<style></style>
