<template>
  <div>
    <h1>Event Listing</h1>

    <router-link :to="{ name: 'event-show', params: { id: id } }">
      Show Event #{{ id }}
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 1,
    };
  },
};
</script>

<style lang="sass"></style>
