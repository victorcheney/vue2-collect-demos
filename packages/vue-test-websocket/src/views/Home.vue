<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  created() {
    this.$socket.registerCallback('seller', this.getData)
  },
  mounted() {
    console.log('000')
    const msg = {
      action: 'GET_DATA',
      socketType: 'seller',
      chartName: 'seller',
      value: '',
    }
    this.$socket.send(msg)
  },
  methods: {
    getData(data) {
      console.log(data)
    },
  },
}
</script>
