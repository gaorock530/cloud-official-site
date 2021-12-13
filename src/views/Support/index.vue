<template>
  <Main>
    <section class="top">
      <div class="container">
        <h1>文档中心</h1>
        <div class="input-wrapper">
          <input type="text" v-model="searchText" placeholder="请输入关键字，如云主机" />
          <el-icon class="search-icon"><search /></el-icon>
        </div>
      </div>
    </section>
    <div class="main-section container">
      <el-affix :offset="80" class="aside">
        <aside>
          <h1>产品文档</h1>
          <li :class="{active: item.active}" v-for="item in asideList" :key="item.t"> {{item.t}}</li>
        </aside>
      </el-affix>
      <div class="content">
        <ul class="card-title">
          <li v-for="(title, idx) in asideList" :key="title">
            <div class="title">
              <img :src="title.img" :alt="title.t">
              <h1>{{title.t}}</h1>
            </div>
            <ul class="card-section">
              <el-row :gutter="20">
                <el-col :xs="12" :sm="8" :md="6" v-for="(item, i) in lastSecData[idx]" :key="i">
                  <li>
                    <div class="product-title">
                      <h3>{{item.t}}</h3>
                      <div class="tag" v-if="item.tag">{{item.tag}}</div>
                    </div>
                    <p>{{item.p}}</p>
                  </li>
                </el-col>
              </el-row>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </Main>
</template>

<script>
import Main from "@/components/Main.vue";
import { Search } from '@element-plus/icons-vue'

export default {
  components: { Main, Search },
  data() {
    return {
      searchText: '',
      bgText: [{ h: "文档中心" }],
      asideList: [
        { t: "计算", img: 'assets/support/logo5.png', active: true },
        { t: "网络", img: 'assets/support/logo2.png' },
        { t: "存储", img: 'assets/support/logo3.png' },
        { t: "数据库", img: 'assets/support/logo4.png' },
        { t: "互联网中间件", img: 'assets/support/logo5.png' },
      ],
      lastSecData: [
        [
          { t: "云服务（CVM）"  },
          { t: "裸金属（TKE)"},
          { t: "弹性伸缩(AS)"},
          { t: "容器服务(BMS)" },
        ],
        [
          { t: "专线接入（DC）"  },
          { t: "负载均衡（CLB)"},
          { t: "私有网络(VPC)"},
        ],
        [
          { t: "云硬盘（CBS）"  },
          { t: "对象存储（CSP)"},
          { t: "文件存储(CFS)"},
        ],
        [
          { t: "分布式数据库（TDSQL）"  },
          { t: "弹性缓存数据库（Redis)"},
          { t: "分布式文件存储（MongoDB）"},
        ],
        [
          { t: "消息队列（CKafka）"  },
          { t: "API网关（APIGW)"},
          { t: "微服务框架（TSF)"},
          { t: "分布式事务（DTF)"},
        ]
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.top {
  background-image: url("assets/support/bg1.png");
  height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10rem 1rem 0 1rem;
    color: #fff;

    h1 {
      font-size: 3rem;
      padding-bottom: 1rem;
    }

    .input-wrapper {
      width: 100%;
      max-width: 600px;
      display: flex;
      align-items: center;
      height: 41px;
      border-radius: 5px;
      overflow: hidden;

      input {
        flex: 1;
        height: 100%;
        border: none;
        outline: none;
        padding: 0 2rem;
        vertical-align: center;
      }
      .search-icon {
        vertical-align: center;
        font-size: 1.4rem;
        color: #fff;
        background-color: var(--primary-color);
        height: 100%;
        width: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .top-title {
    .top-title-big {
      font-size: 40px;
      font-family: Source Han Sans CN, Source Han Sans CN-Bold;
      font-weight: 700;
    }
    .top-title-little {
      margin-top: 15px;
      font-size: 16px;
      font-family: Source Han Sans CN, Source Han Sans CN-Regular;
      font-weight: 400;
    }
  }
}

.main-section {
  display: flex;
  padding: 3rem 0;

  .aside {
    flex: 1;
    max-width: 243px;
    min-width: 140px;

    aside {
      background-color: #f5f7f8;

      h1 {
        padding: 1rem 2rem;
      }

      li {
        padding: 1rem 2rem;
        font-size: 1.2rem;

        &.active {
          color: var(--primary-color);
          border-left: 2px solid var(--primary-color);
          background-color: #e8f2f2;
        }
      }
    }
  }



  .content {
    flex: 3;
    padding: 0 1rem 0 3rem;

    .card-title {

      .title {
        display: flex;
        align-items: center;
        padding: 1rem 0;

        img {
          width: 20px;
          height: 20px;
          object-fit: contain;
        }
        h1 {
          position: relative;
          padding: 0 1rem;
        }
      }


      .card-section {
        padding: 1rem 0;

        li {
          margin: 10px 0;
          padding: 2rem;
          box-shadow: 0 0 10px rgba(#000, 0.1);

          .product-title {
            display: flex;
            align-items: center;

            h3 {
              padding-bottom: 0.2rem;
              font-size: 1.2rem;
            }
            .tag {
              position: relative;
              top: -2px;
              margin-left: 0.5rem;
              padding: 0 0.2rem;
              background-color: red;
              color: #fff;
            }
          }
          p {
            color: #666;
          }
        }
      }
    }

  }

}









.bg1 {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 33.4rem;
  color: #ffffff;
  font-size: 30px;
}
.sec2 {
  height: auto;
  li{
      margin-left:2rem;
      margin-bottom: 1.8rem;
      font-size: 16px;
color: #252934;
  }
}
.blockList {
  width: 220px;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 3px 6px 0px #f0f3f5;
}
.grid-content {
  width: 220px;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 3px 6px 0px #f0f3f5;
}
</style>
