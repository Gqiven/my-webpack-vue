<template>
  <transition name="alert-fade">
    <div v-show="value" class="alert-wrap">
      <div class="alert-content">{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'notify',
  props: {
    message: [String, Number]
  },
  data() {
    return {
      value: true
    }
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
  .alert-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .alert-content {
    color: #ffffff;
    max-width: 80%;
    padding: 10px 15px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>


