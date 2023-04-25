<template>
  <div class="wrapper">
      <div class="capitalize mr-auto">{{data.description}}</div>
      <time class="font-bold">{{data.time}}</time>
  </div>
</template>

<script>
export default {
  name: "DateDescription",
  props: {
    data: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style scoped>
  .wrapper{
    display: flex;
    gap: 15px;
  }
</style>
