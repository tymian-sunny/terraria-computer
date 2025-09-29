<template>
  <el-container>
    <el-header>
      <div>
        <h1>泰拉瑞亚种子生成器</h1>
        <p>
          <el-link href="https://github.com/tymian-sunny/terraria-computer" target="_blank" style="font-size: medium;">
            <img style="width: 28px;" src="https://img.icons8.com/?size=100&id=106562&format=png&color=000000" alt="">
            项目以开源至GitHub,点此前往
          </el-link>
      </p>
      </div>
    </el-header>
    <el-container style="width: 100%;">
      <el-aside :width="isCollapse ? '84px' : '200px'" style="transition: width 0.3s;">

        <menus style="margin: 20px 0px 0px 20px;" v-if="true" :is-collapse="isCollapse"
          @update-collapse="updateCollapse" @update-select-component="updateSelectComponent" />
      </el-aside>
      <el-main>

        <home v-if="selectComponent == mainComponents[0]" />
        <farm v-if="selectComponent == mainComponents[1]" />
        <brush_monster_field v-if="selectComponent == mainComponents[2]" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import home from './components/home.vue'
import farm from './components/farm.vue'
import menus from './components/menu.vue'
import brush_monster_field from './components/brush_monster_field.vue'

const isCollapse = ref(true)

// 监听 
const updateSelectComponent = (value: number) => {
  selectComponent.value = mainComponents[value];
}

// 监听 Sidebar 发出的更新事件
const updateCollapse = (value: boolean) => {
  isCollapse.value = value
}

// 所有主要的组件
const mainComponents = ['home', 'farm', 'brush'];
// 当前选中的组件
const selectComponent = ref(mainComponents[0]);

</script>

<style scoped>
.el-header{
  height: auto !important;
  line-height: normal;
}
.el-container {
  display: flex;
}

.el-main {
  overflow: visible;
  flex: 1;
  width: 100%;
}

.el-aside {
  overflow: hidden;
}
</style>
