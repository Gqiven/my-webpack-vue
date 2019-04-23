<template>
  <div>
    <p>{{hours}}:{{minuets}}:{{seconds}}</p>
  </div>
</template>

<script>
export default {
  name: 'countDown',
  props: {
    endTime: Number
  },
  data() {
    let _now = new Date();
    return {
      currentTime: _now.getTime(),
      timecount: null
    }
  },
  computed: {
    hours() {
      let _hours = Math.floor((this.endTime - this.currentTime) / 60 / 60 / 1000);
      return this.padString(_hours);
    },
    minuets() {
      let _minuets = Math.floor(((this.endTime - this.currentTime) % (60 * 60 * 1000)) / 60 / 1000);
      return this.padString(_minuets);
    },
    seconds() {
      let _seconds = Math.floor(((this.endTime - this.currentTime) % (60 * 60 * 1000) % (60 * 1000)) / 1000);
      return this.padString(_seconds);
    }
  },
  created() {
    this.setCheckTime();
  },
  methods: {
    setCheckTime() {
      if(this.currentTime < this.endTime) {
        //倒计时进行中
        this.timecount = setTimeout(() => {
          this.currentTime += 1000;
          //递归调用setTimeout 替代setIntervel，优化性能
          this.setCheckTime();
        }, 1000)
      }else {
        //倒计时结束，当前时间大于计时结束时间
        clearTimeout(this.timecount)
      }
    },
    padString(time) {
      //padStart 补零
      return String.prototype.padStart.call(time, 2, '0');
    }
  }
}
</script>

