<template>
  <div v-if="true"></div>
</template>

<script>
export default {
  props: {
    propName: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      quote: 'Single quotes',
    };
  },
};
</script>

<style></style>
