<template>
  <div>
    <h1>Create Event, {{ user.name }}</h1>

    <p>This Event was created by {{ user.id }}</p>

    <ul>
      <li v-for="(category, index) in categories" :key="index">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  // computed: {
  //   userName() {
  //     return this.$store.state.user.name;
  //   },
  //   userId() {
  //     return this.$store.state.user.id;
  //   },
  // },
  // computed: mapState({
  //   user: 'user',
  //   categories: 'categories',
  // }),
  // computed: mapState(['user', 'categories']),
  computed: {
    localComputed() {
      return true;
    },
    ...mapState(['user', 'categories']),
  },
};
</script>

<style></style>
