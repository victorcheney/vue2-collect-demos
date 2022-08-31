<template>
  <div id="app">
    <div id="nav" class="border-b p-4 text-center">
      <router-link to="/">{{ $t('header.home') }}</router-link>
      |
      <router-link to="/echartmap">{{ $t('header.map') }}</router-link>
      |
      <router-link to="/amap">{{ $t('header.amap') }}</router-link>
      |
      <router-link to="/extensionamap">{{
        $t('header.extensionamap')
      }}</router-link>
      <button class="float-right" @click="changeLang">{{ langText }}</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    langText() {
      return this.$i18n.locale === 'zh' ? '英文' : '中文'
    },
  },
  mounted() {
    this.$i18n.local = 'en'
  },
  methods: {
    changeLang() {
      this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh'
    },
  },
}
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(100% - 57px);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
