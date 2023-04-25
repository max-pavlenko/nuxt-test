<template>
  <Modal v-if="!!project" :on-submit="handleSubmit" header-text="Edit company">
    <template v-slot:formBody>
      <Input @input="handleNameChange" :value="name" label="Name" />
    </template>

    <template v-slot:formActions>
      <Button :on-click="onClose">Cancel</Button>
      <Button type="submit">Submit</Button>
    </template>
  </Modal>
</template>

<script>
import Modal from '~/components/modals/Modal.vue';
import Input from '~/components/ui/Input.vue';
import Button from '~/components/ui/Button.vue';
import { mapActions } from 'vuex';

export default {
  name: "EditCompanyModal",
  components: {Button, Input, Modal},
  props: {
    project: {
      type: Object,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
  },
  data(){
    return {
      name: this.project?.name || '',
    }
  },
  methods: {
    ...mapActions({
      getProjects: 'projects/getProjects',
      updateProjectName: 'projects/updateProjectName',
    }),
    async handleSubmit(){
      this.onClose();
      await this.updateProjectName({id: this.project.id, project: {name: this.name}});
    },
    handleNameChange(newName){
      this.name = newName;
    },
  },

};
</script>

<style scoped>

</style>
