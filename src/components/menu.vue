<template>
  <el-col :span="12">
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
      @close="handleClose" @mouseenter="$emit('update-collapse', false)" @mouseleave="$emit('update-collapse', true)">
      <el-menu-item index="1" @click="$emit('update-selectComponent', 0)">
        <el-icon><icon-menu /></el-icon>
        <span>种子生成计算器</span>
      </el-menu-item>
      <el-menu-item index="2" @click="$emit('update-selectComponent', 1)">
        <el-icon><icon-menu /></el-icon>
        <span>草药农场</span>
      </el-menu-item>
      <el-menu-item index="3" @click="$emit('update-selectComponent', 2)">
        <el-icon>
          <document />
        </el-icon>
        <span>岛牌刷怪场</span>
      </el-menu-item>
      <el-menu-item index="4" @click="$emit('update-selectComponent', 3)">
        <el-icon>
          <setting />
        </el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script lang="ts" setup>

import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

defineProps<{
  isCollapse: boolean
}>()

const emit = defineEmits<{
  (e: 'update-collapse', value: boolean): void
  (e: 'update-selectComponent', value: number): void
}>()

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: auto;
}

.el-menu-vertical-demo.el-menu--collapse {
  width: 64px;
  /* Default collapsed width for Element Plus */
  height: auto;
}
</style>