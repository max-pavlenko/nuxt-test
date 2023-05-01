<template>
  <button class="btn-wrapper" v-on:click="onClick(project, $event)">
    <figure class="card">
      <figcaption class="project-info">
        <img class="project-photo" :src="project.logo_url" alt="Project logo"/>
        <h3 class="project-title truncate">{{ truncatedProjectName }}</h3>
      </figcaption>
      <strong :class="`${projectStatusClass} project-status`">{{ projectStatusText }}</strong>

      <div class="dates">
        <DateDescription :data="timeThisWeek"/>
        <DateDescription :data="thisMonth"/>
        <DateDescription :data="total"/>
      </div>
    </figure>
  </button>
</template>

<script>
import DateDescription from '~/components/DateDescription.vue';

export default {
  components: {DateDescription},
  props: {
    project: {
      type: Object,
      required: true
    },
    onClick: {
      type: Function,
      required: true,
    }
  },
  computed: {
    projectStatusClass() {
      return this.project.is_active === 1 ? 'active' : 'disabled';
    },
    projectStatusText() {
      return this.projectStatusClass.toUpperCase();
    },
    timeThisWeek() {
      return {description: 'time this week', time: '00:00:00'};
    },
    thisMonth() {
      return {description: 'this month', time: '00:00:00'};
    },
    total() {
      return {description: 'total', time: '00:00:00'};
    },
    truncatedProjectName(){
      return this.project.name.length > 30 ? this.project.name.length.slice(0,30) + '...' : this.project.name;
    }
  },
};
</script>

<style scoped>
.card {
  padding: 15px;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.project-photo {
  width: 120px;
  aspect-ratio: 16/9;
  align-self: stretch;
}

.project-title {
  font-weight: bold;
  font-size: 17px;
}

.project-status {
  font-size: 22px;
  align-self: center;
}

.project-info {
  display: flex;
  align-items: center;
  gap: 25px;
  flex-basis: 30%;
}

.active {
  color: forestgreen;
}

.disabled {
  color: coral;
}

.dates {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.btn-wrapper {
  width: 100%;
}
</style>
