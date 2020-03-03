<template>
  <el-container>
    <progress-bar :progress="20" />
    <el-aside
      :width="isSidebarOpened ? '64px' : '240px'"
      :class="isSidebarOpened ? 'fold' : 'unfold'"
    >
      <div class="logo-wrapper">
        <router-link to="/">
          <span class="logo" />
          <!-- <span class="logo-text">Monster</span> -->
        </router-link>
      </div>
      <el-menu
        class="el-menu-vertical"
        :router="true"
        :default-active="path"
        :default-openeds="[curCateName]"
        :unique-opened="true"
        :collapse="isSidebarOpened"
        :collapse-transition="false"
        active-text-color="#f66"
      >
        <!-- background-color="#563d7c"
        text-color="#fff" -->
        <el-submenu
          v-for="category in menuList"
          :key="category.name"
          :index="category.name"
        >
          <template slot="title">
            <i :class="category.icon" />
            <span>{{ category.name }}</span>
          </template>

          <el-menu-item
            v-for="item in category.children"
            :key="item.name"
            :index="item.path"
          >
            {{ item.name }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <span
          class="fold-wrapper"
          @click="toggleFoldHandler"
        >
          <i :class="isSidebarOpened ? 'el-icon-s-unfold' : 'el-icon-s-fold'" />
        </span>

        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">
            Home
          </el-breadcrumb-item>
          <el-breadcrumb-item
            v-for="item in breadCrumb"
            :key="item"
          >
            <!--v-if="item"-->
            {{ item }}
          </el-breadcrumb-item>
        </el-breadcrumb>

        <div class="avatar-wrapper">
          <router-link to="/">
            <img src="~@/assets/logo.png">
            <router-link to="/examples/vue/svg-shape-transition" />
          </router-link>
        </div>
        <div class="category-wrapper">
          <router-link
            v-for="item of categoryList"
            :key="item"
            :to="`/examples/${item}/`"
          >
            {{ item }}
          </router-link>
        </div>
      </el-header>

      <el-main>
        <el-card class="example-wrapper">
          <router-view />
        </el-card>
      </el-main>
    </el-container>

    <!-- <el-footer>footer</el-footer> -->
  </el-container>
</template>
<script>
import ProgressBar from '@/components/progress-bar'
import { mapState } from 'vuex'

// console.log(123, ProgressBar);
export default {
  components: { ProgressBar },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      menuList: (state) => state.menuList,
      categoryList: (state) => state.categoryList,
      isSidebarOpened: (state) => state.app.sidebar.opened,
      path: (state) => state.route.path
    }),
    breadCrumb () {
      // console.log(this.route.split('/'));
      return this.path.split('/').filter((i) => i)
    },
    curCateName () {
      return this.breadCrumb[1]
    },
    curExamName () {
      return this.breadCrumb[2]
    }
  },
  watch: {
    route (val, oldVal) {
      if (val !== oldVal) {
        console.log('rr', this.path)
      }
    }
  },
  mounted () {
    console.log(11, this.breadCrumb, this.curCateName, this.curExamName)
  },

  methods: {
    toggleFoldHandler () {
      this.$store.commit('app/TOGGLE_SIDEBAR')
    }
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
  background: #fafafa;
}
.el-aside {
  height: 100%;
  background: #fff;
  transition: width 0.6s;

  .logo-wrapper {
    height: 60px;
    margin: 20px 0 0px 80px;
    transition: margin 1s ease-out;
    .logo {
      float: left;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: url('~@/assets/logo.png') no-repeat;
      background-size: contain;
    }
    .logo-text {
      float: left;

      width: 60px;
      height: 60px;
      line-height: 60px;
      margin-left: 20px;
      color: grey;
    }
  }
  &.fold .logo-wrapper {
    margin-left: 12px;
    .logo {
      width: 40px;
      height: 40px;
      transition: all 0.6s;
    }
  }
}
.el-menu {
  border-right: 0;
  .el-submenu {
    &.is-active {
      color: #f66;
    }
    .el-submenu__title {
      font-size: 16px;
    }
    .el-menu-item {
      height: 32px;
      line-height: 32px;
      color: #4f5959;
    }
  }
}
.el-header {
  background: #563d7c;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25), inset 0 -1px 5px rgba(0, 0, 0, 0.25);

  .fold-wrapper {
    float: left;
    color: #fff;
    font-size: 28px;
    margin-top: 12px;
    cursor: pointer;
  }

  .el-breadcrumb {
    float: left;
    margin-top: 24px;
    margin-left: 24px;
    /deep/ .el-breadcrumb__inner {
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
    /deep/ .el-breadcrumb__inner a,
    /deep/ .el-breadcrumb__inner.is-link {
      color: #fff;
    }
  }
  .category-wrapper {
    float: right;
    margin-top: 24px;
    margin-right: 24px;
    a {
      color: #fff;
      margin-right: 4px;
    }
  }

  .avatar-wrapper {
    float: right;
    margin-top: 10px;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
  }
}

.example-wrapper {
  // background: #fff;
  color: #273849;
  min-height: 100%;
  padding-left: 24px;

  /deep/ blockquote {
    font-weight: 500;
    color: #4f5959;
    margin-left: 2px;
    padding-left: 16px;
    border-left: 4px solid #563d7c;
    margin-bottom: 40px;
    line-height: 1.4;
  }
  /deep/ i {
    color: #f66;
  }

  /deep/ h1 {
    font-size: 1.4rem;
    font-weight: 500;
  }
  /deep/ h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  /deep/ input {
    border: 1px solid #563d7c;
  }
  /deep/ button {
    border: 1px solid #563d7c;
  }
}
@media screen and (max-width: 670px) {
  .el-header {
    .el-breadcrumb {
      // font-size: 12px;
      margin-top: -30px;
      margin-left: 38px;
      .el-breadcrumb__separator {
        margin: 0;
      }
    }
    .category-wrapper,
    .avatar-wrapper {
      display: none;
    }
  }

  .el-main {
    padding: 4px;
  }
  .example-wrapper {
    padding-left: 0px;
  }
}
</style>
