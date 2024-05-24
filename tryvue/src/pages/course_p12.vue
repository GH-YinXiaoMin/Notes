<template>
    <h1>事件传参</h1>
    <button type="button"  @click="change_color">点击变色</button>
    <p>{{ count }}</p>

</template>

<script>
export default {
    data() {
        return {
            count: 0,
            count1: 0,
            colors:["color:blue","color:red","color:green"]
        }
    },
    methods: {
        add() {
            this.count1++
        },
        change_color(e) {
            this.count++;
            this.count%=3
            e.target.style=this.colors[this.count];
        }
    }
}
</script>