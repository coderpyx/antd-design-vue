<template>
  <router-link to="/index" class="logo-wrapper">
    <div class="logo">
      <img src="../../../assets/logo/logo.png" alt="">
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'logo',
  data() {
    return {};
  },
  computed:{
    ...mapGetters(['setting/TOGGLE_OPEN'])
  },
  created() {
    // console.log(this.TOGGLE_OPEN);
    console.log(this.$store.state.setting.open);
  }
};
</script>
<style lang="scss" scoped>
.logo-wrapper {
  width: 256px;
  height: 70px;
  background-color: #fff;
}
.logo {
  width: 200px;
  height: 70px;
  img {
    width: 100%;
    height: 70px;
  }

}
</style>
