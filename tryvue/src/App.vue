<template>
  <div style="display: flex;justify-content: flex-start;">
    <div>
      <router-link to="/">/</router-link>
      <br />
      <router-link to="/course_p6">P6 模板语法</router-link>
      <br />
      <router-link to="/course_p7">P7 属性绑定</router-link>
      <br />
      <router-link to="/course_p8">P8 条件渲染</router-link>
      <br />
      <router-link to="/course_p9">P9 列表渲染</router-link>
      <br />
      <router-link to="/course_p10">P10 通过key管理状态</router-link>
      <br />
      <router-link to="/course_p11">course_p11</router-link>
      <br />
      <router-link to="/course_p12">course_p12</router-link>
      <br />
      <router-link to="/course_p13">course_p13</router-link>
      <br />
      <router-link to="/course_p14">course_p14</router-link>
      <br />
      <router-link to="/course_p15">course_p15</router-link>
    </div>

    <div style="background-color: azure;">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
