<template>
    <h1>内联事件处理器</h1>
    <button type="button" @click="count++">点击自增</button>
    <p @change="showchange">{{ count }}</p>
    <button  @click="add">点击自增(函数式)</button>
    <p @change="showchange">{{ count1 }}</p>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            count1: 0
        }
    },
    methods: {
        add(){
            this.count1++
        }
    }
}
</script>