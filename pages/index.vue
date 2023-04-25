<template>
  <section class="page-content">
    <ul>
      <li :key="project.id" v-for="project in (storeProjects)">
        <ProjectCard :project="project" :on-click="handleProjectClick"/>
      </li>
    </ul>
    <EditCompanyModal :onClose="handleCloseModal" v-if="selectedProject != null" :project="selectedProject"/>
  </section>
</template>

<script lang="ts">
import ProjectCard from "~/components/ProjectCard.vue";
import {Project} from "~/models/Project";
import EditCompanyModal from "~/components/modals/EditCompanyModal.vue";
import apiClient from "~/api/axios/axios";
import {Context} from "@nuxt/types";
import {mapGetters} from "vuex";

interface IProjectMethods {
  handleProjectClick(project: Project): void;

  handleCloseModal(): void;

  selectedProject: Project | null;
}

export default {
  layout: 'default',
  middleware: ['checkAuth'],
  components: {EditCompanyModal, ProjectCard},
  async asyncData({store}: Context) {
    try {
      const {data: {projects}} = await apiClient.get<{ projects: Project[] }>('/projects-manage');
      store.commit('projects/setProjects', projects);
      return {projects}
    } catch (error) {
      console.error('Failed to fetch projects: ', error);
    }
  },
  data() {
    return {
      selectedProject: null,
      projects: [],
    }
  },
  computed: {
    ...mapGetters({
      storeProjects: "projects/projects",
    }),

  },
  methods: {
    handleProjectClick(project: Project) {
      this.selectedProject = project;
    },
    handleCloseModal() {
      this.selectedProject = null;
    }
  } as IProjectMethods,
  head() {
    return {
      title: 'Company Projects',
      meta: [
        {hid: 'description', name: 'description', content: 'Company Projects'},
      ],
    }
  },
}
</script>

<style scoped>
.page-content {
  width: 100%;
  padding: 15px;
  max-width: 1024px;
  margin-inline: auto;
}
</style>
