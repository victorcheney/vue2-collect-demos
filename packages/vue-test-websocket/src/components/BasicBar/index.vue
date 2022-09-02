<template>
  <div class="v-bar">
    <BaseChart :options="options"></BaseChart>
  </div>
</template>

<script>
export default {
  name: 'BasicBar',
  props: {
    widget: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {}
  },
  computed: {
    options() {
      return this.widget ? this.widget.config : {}
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  beforeDestroy() {},
}
</script>

<style scoped>
.class_name {
  height: 100%;
}
</style>
