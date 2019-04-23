<template>
  <div>
    <p>countDown</p>
    <template v-if="timeList.length > 0">
      <count-down v-for="item in timeList"
        :endTime="item" :key="item">
      </count-down>
    </template>
  </div>
</template>

<script>
import countDown from '../../packages/countDown/app.vue'

export default {
  components: {
    countDown
  },
  data() {
    return {
      timeList: []
    }
  },
  created() {
    //timeList 假定是服务器返回的，多个计时器的结束时间列表
    //设置一下
    let _time = new Date();
    _time = _time.getTime();
    this.timeList = [
      _time + 60 * 60 * 2 * 1000,
      _time + 60 * 60 * 3 * 1000,
    ]
  }
}
</script>

