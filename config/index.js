module.exports = {
  dev: {
    env: require('./dev.env.js')
  },
  build: {
    env: require('./prod.env.js')
  }
}