<template>
  <div class="box">
    <h1>组件展示</h1>
    <div class="main-content">
      <div class="category-list">
        <div v-for="item in list" :key="item.name">
          <router-link :to="item.path">{{item.name}}</router-link>
        </div>
      </div>
      <div class="components-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      message: 'hello world',
      list: [
        {
          name: 'Alert',
          path: '/alert'
        }
      ]
    }
  },
  beforeCreate() {

  }
}
</script>

<style lang="less">
  @import url('../src/less/init.less');
  .box {
    padding: 10px;
  }
  h1 {
    font-size: 20px;
    padding-left: 20px;
  }
  .main-content {
    display: flex;
    justify-content: flex-start;
  }
  .category-list {
    width: 10%;
    padding-left: 30px;
    margin-right: 10px;
    a {
      line-height: 30px;
    }
  }
  .components-content {
    width: 80%;
    padding: 10px;
    background-color: #eeeeee;
  }
</style>