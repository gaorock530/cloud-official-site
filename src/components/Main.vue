<template>
  <main>
    <slot></slot>
  </main>
</template>

<style scoped>
main {
  position: relative;
  z-index: 0;
  padding-top: var(--header-height);
}
</style>
