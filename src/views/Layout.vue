<template>
  <el-container>
    <progress-bar progress="20" />
    <el-aside :width="isSidebarOpened ? '64px' : '240px'" :class="isSidebarOpened ? 'fold' : 'unfold'">
      <div class="logo-wrapper">
        <span class="logo"></span>
        <!-- <span class="logo-text">Monster</span> -->
      </div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :router="true"
        :default-active="$route.path"
        :collapse="isSidebarOpened"
        :collapse-transition="false"
        @open="handleOpen"
        @close="handleClose"
      >
        <!-- background-color="#563d7c"
        text-color="#fff"
        active-text-color="#ffd04b" -->
        <el-submenu v-for="category in menuList" :index="category.path" :key="category.name">
          <template slot="title">
            <i :class="category.icon"></i>
            <span>{{ category.name }}</span>
          </template>

          <el-menu-item v-for="item in category.children" :index="item.path" :key="item.name">
            {{ item.name }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <span class="fold-wrapper" @click="toggleFoldHandler">
          <i :class="isSidebarOpened ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
        </span>

        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item v-for="item in breadCrumb" :key="item" v-if="item">
            {{ item }}
          </el-breadcrumb-item>
        </el-breadcrumb>

        <div class="avatar-wrapper">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
        <div class="category-wrapper">
          <router-link :to="`/examples/${item}/`" v-for="item of categoryList" :key="item">
            {{ item }}
          </router-link>
        </div>
      </el-header>

      <el-main>
        <el-card class="example-wrapper">
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>

    <!-- <el-footer>footer</el-footer> -->
  </el-container>
</template>
<script>
import ProgressBar from '@/components/progress-bar';
import { mapState } from 'vuex';

console.log(123, ProgressBar);
export default {
  components: { ProgressBar },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      menuList: (state) => state.menuList,
      categoryList: (state) => state.categoryList,
      isSidebarOpened: (state) => state.app.sidebar.opened,
      path: (state) => state.route.path
    }),
    breadCrumb() {
      // console.log(this.route.split('/'));
      return this.path.split('/');
    }
  },
  watch: {
    route(val, oldVal) {
      if (val !== oldVal) {
        console.log('rr', route);
      }
    }
  },

  methods: {
    toggleFoldHandler() {
      this.$store.commit('app/TOGGLE_SIDEBAR');
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
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
    margin: 40px 0 40px 30px;

    .logo {
      float: left;
      width: 60px;
      height: 60px;
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
  }
}
.example-wrapper {
  // background: #fff;
  min-height: 100%;

  /deep/ blockquote {
    margin-left: 2px;
    padding-left: 16px;
    border-left: 4px solid #563d7c;
    margin-bottom: 40px;
  }
}
</style>
