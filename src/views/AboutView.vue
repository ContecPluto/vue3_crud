<template>
  <div class="about">
    <h1>{{ count }}</h1>


    <div class="row w-50 mx-auto">
      <b-button class="col mx-2" size="lg" variant="primary" @click="increases">+</b-button>
      <b-button class="col mx-2" size="lg" variant="primary" @click="decrease">-</b-button>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increases() {
      this.$data.count++
    },
    decrease() {
      this.$data.count--
    }
  }
}
</script>