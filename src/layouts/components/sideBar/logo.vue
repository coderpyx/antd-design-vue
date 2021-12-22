<template>
  <router-link to="/index" class="logo-wrapper">
    <div class="logo">
        <img v-show="TOGGLE_OPEN" class="logoImgT" src="@/assets/logo/logo.png" alt="">
        <img v-show="!TOGGLE_OPEN" class="logoImgO" src="@/assets/logo/logo1.png" alt="">
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'logo',
  computed:{
    TOGGLE_OPEN () {
      return this.$store.state.setting.open
    }
  }
};
</script>
<style lang="scss" scoped>
.logo-wrapper {
  width: 256px;
  height: 54px;
  padding-left:12px !important;
  padding-bottom:5px !important;
  background-color: #fff;
}
.logo {
  width: 100%;
  height: 54px;
  position: relative;
  .logoImgT {
    position: absolute;
    top: -20px;
    left: 18px;
    width: 200px;
    height: 94px;
  }

  .logoImgO {
    position: absolute;
    top: 0;
    left: 0;
    width: 54px;
    height: 54px;
  }
}
</style>
