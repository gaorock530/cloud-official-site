<template>
  <header>
    <div><img src="assets/header/logo.png" /></div>
    <nav>
      <router-link to="/"><li>首页</li></router-link>
      <router-link to="/news"><li>新闻动态</li></router-link>
      <router-link to="/productlist"><li>产品</li></router-link>
      <router-link to="/solution"><li>解决方案</li></router-link>
      <router-link to="/support"><li>文档中心</li></router-link>
      <router-link to="/"><li>关于我们</li></router-link>
    </nav>
    <ul class="utils">
      <router-link to="/notice"><li>公告</li></router-link>
      <router-link to="/login"><li>登陆</li></router-link>
    </ul>
  </header>
</template>

<script>

</script>


<style lang="scss">

header {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  height: var(--header-height);
  background-color: var(--primary-color) ;
  color: #fff;
  z-index: 999;
  padding: 0 1rem;

  img {
    height: 30px;
    object-fit: contain;
  }

  li {
    display: inline-block;
    padding: 0 0.5rem;
    margin: 0 1rem;
    font-size: 1.1rem;
  }

  nav {
    padding: 0 2rem;
    flex: 1;
  }

}

</style>
