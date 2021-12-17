<template>
  <div class="iframe">
    <iframe
      :src="redirect"
      width="100%"
      height="100%"
    ></iframe>
  </div>
</template>

<script>
import { tcecloudUrl as url } from '@/data/redirect'

export default {
  computed: {
    redirect() {
      const {cate, sub} = this.$route.params
      const redirect = `${url}/${cate}/${sub}`
      console.log({redirect})
      return redirect
    }
  },
  beforeCreate() {
    document.querySelector('body').classList.add('no-footer')
  },
  beforeUnmount() {
    document.querySelector('body').classList.remove('no-footer')
  }
}

</script>

<style scoped>
  .iframe {
    width: 100%;
    height: 100vh;
  }

  iframe {
    object-fit: contain;
  }

</style>
