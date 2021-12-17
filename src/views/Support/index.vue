<template>
  <Main>
    <section class="top">
      <div class="container">
        <h1>文档中心</h1>
        <form class="input-wrapper" @submit.prevent="onSearch">
          <input type="text" v-model="searchText" placeholder="请输入关键字，如云主机" />
          <el-icon class="search-icon" @click="onSearch"><search /></el-icon>
        </form>
      </div>
    </section>
    <div class="main-section container">
      <el-affix :offset="80" class="aside">
        <aside>
          <h1>产品文档</h1>
          <li :class="{active: idx === cateActiveId}" v-for="(cate, idx) in productsData" :key="idx" @click="onCateActiveChange(idx)">{{cate.cate}}</li>
        </aside>
      </el-affix>
      <div class="content">
        <ul class="card-title">
          <li v-for="(cate, idx) in productsData" :key="idx" :id="cate.id">
            <div class="title">
              <img :src="cate.svg" :alt="cate.cate">
              <h1>{{cate.cate}}</h1>
            </div>
            <ul class="card-section">
              <el-row :gutter="20">
                <el-col :xs="24" :sm="12" :md="6" v-for="(item, i) in cate.sub" :key="i">
                  <router-link :to="`/docs${cate.to}${item.to}`">
                    <li>
                      <div class="product-title">
                        <h3>{{item.name}} {{item.ab?`(${item.ab})`:null}}</h3>
                      </div>
                    </li>
                  </router-link>
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
import productsData from '@/data/products.js'

export default {
  components: { Main, Search },
  data() {
    return {
      productsData: productsData,
      searchText: '',
      cateActiveId: 0,
    };
  },
  methods: {
    onCateActiveChange(idx) {
      this.cateActiveId = idx
      const topElement = document.getElementById(productsData[idx].id)
      topElement.scrollIntoView({block: "center", behavior: "smooth"})
      // API request here
    },
    onSearch() {
      if (!this.searchText) return
      // search API request here
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  background-image: url("/assets/support/bg1.png");
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
        cursor: pointer;
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
        cursor: pointer;
        &.active {
          color: var(--primary-color);
          border-left: 2px solid var(--primary-color);
          background-color: #e8f2f2;
        }
        &:hover {
          color: var(--primary-color);
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
          cursor: pointer;

          &:hover {
            color: var(--primary-color);
          }

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

</style>
