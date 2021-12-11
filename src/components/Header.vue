<template>
  <header>header</header>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      a: 1
    }
  }
}

</script>


<style lang="scss">

header {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  height: var(--header-height);
  background-color: #159592;
  color: #fff
}

</style>
