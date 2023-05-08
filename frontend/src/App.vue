<template>
  <div>
    <Header></Header>

    <!-- router-view shfaq contentin qe e permbane nje view  -->
    <router-view />   
  </div>
</template>

<script>
import Header from '@/components/utilities/Header.vue'
export default {
  name: 'app-view',
  components: {
    Header
  }
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}


</style>
