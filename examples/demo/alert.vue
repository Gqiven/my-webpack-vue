<template>
  <div>
    <div title="basicUsage">
      <button @click="showAlert">showAlert</button>
    </div>

    <div title="customConfig">
      <button @click="showCustomAlert">showCustomAlert</button>
    </div>
  </div>
</template>

<script>
//如果使用Alert()，则需要这么引用
import Alert from '../../packages/alert'

export default {
  methods: {
    showAlert() {
      Alert('Alert');
    },

    showCustomAlert() {
      this.$alert({
        message: 'CustomAlert',
        duration: 1000
      });
    }
  }
};
</script>

<style lang="less">
.demo-notify {
  .van-button {
    margin-left: 15px;
  }
}
</style>
