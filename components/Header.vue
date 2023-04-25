<template>
  <header>
    <NuxtLink to='/'>
      <img class="logo" src="https://www.artmajeur.com/medias/hd/a/l/alexalex/artwork/10272646_the-dark-side.jpg" alt="logo">
    </NuxtLink>
    <nav class="navigation">
      <ul class="navigation-list">
        <li>
          <NuxtLink to='/'>
            Projects
          </NuxtLink>
        </li>
        <li>
          <button v-on:click="handleAuth">
            {{ authState }}
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Header",
  computed: {
    ...mapGetters({
      isAuth: "authentication/isAuthenticated"
    }),
    authState() {
      return this.isAuth ? 'Logout' : 'Log in';
    }
  },
  methods: {
    ...mapActions({
      logout: 'authentication/logout',
    }),
    handleAuth() { // @ts-ignore
      if (this.isAuth) {
        this.logout();
      }
      // @ts-ignore
      this.$router.push('/auth/log-in');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #444;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(3px);
}

.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.navigation-list {
  display: flex;
  gap: 25px;
  align-items: center;
}

.navigation {
  display: flex;
  align-items: center;
}
</style>
