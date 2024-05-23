<template>
    <h1>属性绑定</h1>
    <div v-bind:style="color_blue">蓝色</div>
    <div :style="color_red">红色</div>
    <div v-bind:style="color_green">绿色</div>
    <div :class="class_01">Class01</div>
    <button :disabled="isbtndisadbled">不可点击的按钮</button>
    <br/>
    <button :disabled="btndisadbled">可点击的按钮</button>
    <br/>
    <div v-bind="bindObject">多个属性使用类绑定</div>
</template>

<script>
export default {
    data() {
        return {
            color_blue: "color:blue",
            color_red: "color:red",
            color_green: "color:green",
            class_01: "class01",
            isbtndisadbled:true,
            btndisadbled:false,
            bindObject:{
                class:"class02",
                style:"color:red"
            }


        }
    }
}
</script>
<style>
.class01 {
    font-size: 100px;
    color: rgb(242, 131, 131);
}
.class02{
    font-size: 50px;
}
</style>
