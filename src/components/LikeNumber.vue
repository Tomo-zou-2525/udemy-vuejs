<template>
  <div>
    <p>いいね{{num}}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 5
    };
  },
  methods: {
    increment() {
      this.num += 1;
    }
  }
};
</script>

<style>
div {
  border: 1px solid red;
}
</style>
