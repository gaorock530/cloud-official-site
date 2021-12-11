<template>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
main {
  position: relative;
  z-index: 0;
  min-height: 100vh;
  padding-top: var(--header-height);
}
</style>
