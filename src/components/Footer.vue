<template>
  <footer>
    <div class="container">
      <ul class="upper">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" v-for="item in upperData" :key="item.t">
            <div class="item">
              <router-link to="/" class="card">
                <img :src="item.icon" />
                <h3>{{item.t}}</h3>
              </router-link>
              <p>{{item.p}}</p>
            </div>
          </el-col>
        </el-row>
      </ul>
      <!-- <div class="lower">
        <ul>
          <router-link to="/"><li>产品</li></router-link>
          <router-link to="/"><li>网络</li></router-link>
          <router-link to="/"><li>计算</li></router-link>
          <router-link to="/"><li>存储</li></router-link>
          <router-link to="/"><li>中间件</li></router-link>
          <router-link to="/"><li>数据库</li></router-link>
          <router-link to="/"><li>监控与运维</li></router-link>
        </ul>
        <ul>
          <router-link to="/"><li>解决方案</li></router-link>
          <router-link to="/"><li>数据中台解决方案</li></router-link>
          <router-link to="/"><li>技术中台解决方案</li></router-link>
          <router-link to="/"><li>安全中台解决方案</li></router-link>
        </ul>
        <ul>
          <router-link to="/"><li>新闻动态</li></router-link>
          <router-link to="/"><li>XXXXXXXX</li></router-link>
          <router-link to="/"><li>XXXXXXXX</li></router-link>
          <router-link to="/"><li>XXXXXXXX</li></router-link>
        </ul>
        <ul>
          <router-link to="/"><li>关于XXX</li></router-link>
          <router-link to="/"><li>XXXXXXXX</li></router-link>
          <router-link to="/"><li>XXXXXXXX</li></router-link>
          <router-link to="/"><li>XXXXXXXX</li></router-link>
        </ul>
      </div> -->
    </div>

  </footer>
</template>

<script>
export default {
  data() {
    return {
      upperData: [
        {icon: '/assets/footer/zhuanjia.png', t: '专家服务', p: '技术专家为您打造全周期专业服务'},
        {icon: '/assets/footer/phone.png', t: '联系我们', p: '欢迎致电 XXX-XXXXXX'},
        {icon: '/assets/footer/doc.png', t: '文档教程', p: '提供全面的文档、新手教程'},
        {icon: '/assets/footer/sugg.png', t: '建议反馈', p: '欢迎反馈您的建议'}
      ]
    }
  }
}

</script>

<style lang="scss">
footer {
  position: relative;
  background-color: #252a34;
  color: #fff;
  padding: 5rem 0;
  z-index: 0;
  .upper {
    // border-bottom: 1px solid #fff;
    text-align: center;
    padding: 2rem 0;

    .item {
      padding: 1rem 0;
    }

    .card {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-bottom: 1rem;
      img {
        height: 14px;
        object-fit: contain;
      }
      h3 {
        padding: 0 0.5rem;
      }
    }

  }
  .lower {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    ul {
      padding: 1rem 0;
      li {
        padding: 0.4rem 0;
      }
    }
  }
}
</style>
