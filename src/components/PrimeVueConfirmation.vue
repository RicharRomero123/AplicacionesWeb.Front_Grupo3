<template>
  <div class="code-wrapper">
    <pv-button class="my-button" :label="$t('_save')" @click="handleClick_Save()" />
    <pv-button
      class="my-button"
      :label="$t('_cancel')"
      severity="danger"
      @click="handleClick_Cancel()"
    />
  </div>
</template>

<script>
export default {
  name: 'PrimeVueCode',
  data() {
    return {
      value: ''
    }
  },
  components: {},
  methods: {
    handleClick_Save() {
      console.log('Forms Saved')
    },
    handleClick_Cancel() {
      console.log('Forms Canceled')
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.code-wrapper {
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.input-mask {
  margin-right: 10px;
}
.my-button {
  font-size: 1.2em;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px; /* Ajustar el margen izquierdo del botón */
}
.my-button:hover {
  background-color: #0062cc;
}
</style>
