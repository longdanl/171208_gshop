<template>
    <div id="app">
      <router-view/><!--显示路由组件-->
      <FooterGuide v-show="$route.meta.showFooter"/><!--当前路由是否显示FooterGuide-->
    </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
    components:{
      FooterGuide
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height:100%
    background:#f5f5f5
</style>
