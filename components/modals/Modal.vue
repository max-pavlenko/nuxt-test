<template>
  <div :style="`display: ${isVisible ? 'flex' : 'none'}`" class="modal" role="dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="font-[600] underline underline-offset-2">{{ headerText }}</h3>
        <button v-if="onClose != null" aria-label="Close modal dialog" class="close-button" @click="closeModal">X</button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="onSubmit">
          <slot name="formBody" />
          <div class="form-actions">
            <slot name="formActions" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    headerText: {
      type: String,
      required: true,
    },
    onSubmit: {
      type: Function,
      required: true,
    },
    onClose: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      isVisible: true
    }
  },
  methods: {
    closeModal(){
      this.isVisible = false;
      this.onClose();
    }
  }
};
</script>

<style>
.modal {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-body {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 10px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>
