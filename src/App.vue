<template>
  <h1> 泰拉瑞亚种子生成计算器 </h1>
  <p>
    <el-link href="https://github.com/tymian-sunny/terraria-computer" target="_blank" style="font-size: medium;">
      <img style="width: 28px;" src="https://img.icons8.com/?size=100&id=106562&format=png&color=000000" alt="">
      项目以开源至GitHub,点此前往
    </el-link>
  </p>
  <el-row>
    <el-col :span="6">
      <menus style="margin: 20px 0px 0px 20px;" v-if="true" :is-collapse="isCollapse" @update-collapse="updateCollapse"
        @update-select-component="updateSelectComponent" />
    </el-col>
    <el-col :span="18">

      <home v-if="selectComponent == mainComponents[0]" />
      <farm v-if="selectComponent == mainComponents[1]" />
    </el-col>
  </el-row>


</template>

<script lang="ts" setup>

import { ref } from 'vue'
import home from './components/home.vue'
import farm from './components/farm.vue'
import menus from './components/menu.vue'

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
const mainComponents = ['home', 'farm'];
// 当前选中的组件
const selectComponent = ref(mainComponents[0]);

</script>

<style scoped></style>
