

<template>
  <div class="d-flex justify-content-center align-items-center">
    {{$t('_status')}}:
    
    
    <div v-for="detail in listCards">
      <Status-component :status_label=detail.status_label />
    </div>

  </div>
</template>

<script>

  import StatusComponent from "../components/Status-component.vue";


  export default {
    name: "PrimeVueStatus",
    components: {StatusComponent},
    data(){
        return{
            listCards:[]
        }
    },
    beforeMount() {
        //Invocar API
        this.listCards = [{ status_label: '_active' }, { status_label: '_suspended' }, { status_label: '_inactive' }]
    }



  }
</script>

<style scoped>
.d-flex {
  display: flex !important;
}
.justify-content-center {
  justify-content: space-between !important;
  padding-bottom: 25px;
  padding-top: 25px;
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
