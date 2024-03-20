const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/osint-ip-web/" : "/",
  transpileDependencies: true
})
