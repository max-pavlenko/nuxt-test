<template>
  <div class="form-control">
    <label :for="label">{{ label }}</label>
    <input @input="updateValue" :type="type" :autocomplete="autocomplete" :id="label" :value="inputValue" required />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
    autocomplete: {
      type: String,
      required: false,
      default: 'off',
    }
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue;
    }
  },
  data() {
    return {
      inputValue: this.value
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 10px;
}
</style>
