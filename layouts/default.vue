<template>
  <div>
    <Header />
    <main class="wrapper">
      <Nuxt/>
    </main>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import Header from "~/components/Header.vue";

export default Vue.extend({
  components: {Header}
})
</script>

<style scoped>
.wrapper {
  --header-height: 72px;
  background-color: #e8e8e8;
  min-height: calc(100vh - var(--header-height));
}

button {
  background-color: transparent;
}
</style>
