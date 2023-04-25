<template>
  <button :disabled="disabled" @click="onClick" :type="type" class="btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    onClick: {
      type: Function,
      required: false,
      default: ()=>{},
    },
    type: {
      type: String,
      required: false,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:disabled {
  cursor: not-allowed;
  background-color: #777;
}
</style>
