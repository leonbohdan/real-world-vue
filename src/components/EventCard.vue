<template>
  <router-link
    :to="{ name: 'event-show', params: { id: event.id } }"
    class="event-link"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} {{ event.date }} </span>

      <h4 class="title">{{ event.title }}</h4>

      <base-icon name="users" />
      <span>{{ event.attendees.length }} attendings</span>
    </div>
  </router-link>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
export default {
  components: { BaseIcon },
  data() {
    return {
      event: {
        id: 1,
        title: 'Park Cleanup',
        time: '6:00',
        date: 'Mon Aug 14, 2021',
        attendees: [
          {
            id: 'qewe34',
            name: 'Bohdan Leonets',
          },
          {
            id: 'qefggh34',
            name: 'Gregg Pollack',
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
