<template>

  <div class="d-flex justify-content-center align-items-center">
    Status:
    <pv-radiobutton v-model="status" inputId="status1" name="status" value="Active" />
    <label for="status1" class="ms-2 me-3">Active</label>
    <pv-radiobutton v-model="status" inputId="status2" name="status" value="Suspended" />
    <label for="status2" class="ms-2 me-3">Suspended</label>
    <pv-radiobutton v-model="status" inputId="status3" name="status" value="Inactive" />
    <label for="status3" class="ms-2">Inactive</label>
  </div>
</template>

<script>
export default {
  name: "PrimeVueStatus",
  data() {
    return {
      status: "Active",
    };
  },
};
</script>

<style scoped>
.d-flex {
  display: flex !important;
}
.justify-content-center {
  justify-content: center !important;
}
.align-items-center {
  align-items: center !important;
}
.mx-2 {
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important;
}
.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
</style>
