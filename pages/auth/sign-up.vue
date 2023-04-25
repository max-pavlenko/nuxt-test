<template>
  <SignupForm/>
</template>

<script>
import SignupForm from '~/components/forms/SignupForm.vue';

export default {
  name: "sign-up",
  middleware: ['clearAuthError'],
  components: {SignupForm}
};
</script>

<style scoped>

</style>
