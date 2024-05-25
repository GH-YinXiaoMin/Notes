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
      <router-link to="/course_p11">P11 内联事件处理器</router-link>
      <br />
      <router-link to="/course_p12">P12 事件传参</router-link>
      <br />
      <router-link to="/course_p13">P13 事件修饰符</router-link>
      <br />
      <router-link to="/course_p14">P14 数组变化侦听</router-link>
      <br />
      <router-link to="/course_p15">P15 计算属性</router-link>
      <br />
      <router-link to="/course_p16">course_p16</router-link>
      <br />
      <router-link to="/course_p17">course_p17</router-link>
      <br />
      <router-link to="/course_p18">course_p18</router-link>
      <br />
      <router-link to="/course_p19">course_p19</router-link>
      <br />
      <router-link to="/course_p20">course_p20</router-link>
      <br />
      <router-link to="/course_p21">course_p21</router-link>
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
