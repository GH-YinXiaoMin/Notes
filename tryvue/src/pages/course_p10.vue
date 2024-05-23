<template>
    <h1>通过key管理状态</h1>
    <p v-for="one in data.result" :key="one.id">{{ one.url }}</p>
</template>

<script setup>

const data = {
    list: ["图片1", "图片2", "图片3"],
    result: [
        {
            id: "p1",
            url: "https://img1.qunarzz.com/travel/poi/1503/98/2309cd3dd2c889.png"
        },
        {
            id: "p2",
            url: "https://img1.qunarzz.com/travel/poi/1503/7e/07cdb5affc0804.jpg"
        },
        {
            id: "p3",
            url: "https://img1.qunarzz.com/travel/poi/1503/8d/a3eb30519992e4.jpg"
        },
        {
            id: "p4",
            url: "https://img1.qunarzz.com/travel/poi/1503/25/5d6ed1953dcf33.jpg"
        },
    ],
    obj:{
        name:"张三",
        age:20,
        height:186
    }
}


</script>