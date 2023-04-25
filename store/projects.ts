import {AuthState, AuthStateObject} from "~/store/authentication";
import {ActionTree, MutationTree} from "vuex";
import {Project} from "~/models/Project";
import apiClient from "~/api/axios/axios";

export const state = () => ({
  projects: [],
})

export type ProjectsState = {
  projects: Project[],
};
export type ProjectsStateObject = { projects: ProjectsState };


export const getters = {
  projects: (state: ProjectsState) => state.projects,
}

export const mutations: MutationTree<ProjectsState> = {
  setProjects(state, projects: Project[]) {
    state.projects = projects;
  },
}

export const actions: ActionTree<ProjectsState, ProjectsStateObject> = {
  async updateProjectName({commit, state}, {id, project}: { project: APIProject, id: number }) {
    try {
      const {data} = await apiClient.post(`projects-manage/update?id=${id}`, project);
      const newProjects = [...state.projects]
      const indexOfOldProject = newProjects.findIndex(proj => id === proj.id);
      newProjects[indexOfOldProject] = data.project;

      commit('setProjects', newProjects)
    } catch (e) {
      console.log(e);
    }
  },

  async getProjects({commit}) {
    try {
      const {data: {projects}} = await apiClient.get<{ projects: Project[] }>('/projects-manage');
      commit('setProjects', projects)
    } catch (e) {
      console.log(e);
    }
  },
};
