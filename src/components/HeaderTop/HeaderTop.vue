<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title_text ellipsis">{{ title }}</span>
    <slot name="right"></slot>
  </header>
</template>
<script>
export default {
    props:{//接受声明属性
      title:String
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top 0
    width 100%
    height 45px
    .header_title_text
      font-size 20px
      color #fff
      display block
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      width 50%
      text-align center
</style>
