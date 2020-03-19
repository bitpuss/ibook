<template>
  <div id="app">
    <div class="container is-fluid">
      <navbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import Navbar from './views/layout/Navbar.vue';

export default {
  components: { Navbar },
  data() {
    return {};
  },
};

</script>
<style lang="scss">
</style>
