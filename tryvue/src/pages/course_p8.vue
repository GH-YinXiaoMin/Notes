<template>
    <h1>条件渲染</h1>
    <div v-if="data.flag1">if1_Content</div>
    <div v-else>if1_else_Content</div>

    <div v-if="data.flag2">if2_Content</div>
    <div v-else>if2_else_Content</div>

    <input id="inputBox01"><input type="submit" @click="inputContent" value="提交">

    <div v-if="input_length < 3">输入内容长度  <  3</div>
    <div v-if="input_length === 3">输入内容长度   ===  3</div>
    <div v-if="input_length > 3">输入内容长度   >   3</div>

    <div v-show="data.flag3">真</div>
    <p>v-if 销毁重建   v-show display</p>

</template>

<script setup>
import { ref } from 'vue'

const input_length = ref(0)
function inputContent() {
    input_length.value = document.getElementById("inputBox01").value.length
    console.log(document.getElementById("inputBox01").value.length);
}
const data = {
    flag1: true,
    flag2: false,
    flag3:true
}


</script>