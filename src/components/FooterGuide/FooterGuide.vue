<template>
    <div class="footer_guide">
      <span class="guide_item" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')"><!--判断 '/msite'===$route.path，true添加on属性-->
        <i class="iconfont icon-U"></i>
        <span>外卖</span>
      </span>
      <span class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索</span>
      </span>
      <span class="guide_item" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
        <i class="iconfont icon-dingdan"></i>
        <span>订单</span>
      </span>
      <span class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
        <i class="iconfont icon-geren"></i>
        <span>我的</span>
      </span>
    </div>
</template>
<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)//replace：替换；push:跳转
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex//Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为Flex布局。
    .guide_item
      display flex//块元素
      flex 1//当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%。所有项目的flex-grow属性都为1，则它们将等分剩余空间。flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
      text-align center
      flex-direction column//主轴为垂直方向，起点在上沿。
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
      .iconfont
        font-size 22px
        margin-top 2px
        margin-bottom 2px
</style>
