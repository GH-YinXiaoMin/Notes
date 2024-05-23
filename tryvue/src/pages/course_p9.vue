<template>
    <h1>列表渲染</h1>
    <div style="background-color: antiquewhite;">list: ["图片1", "图片2", "图片3"]
        <p v-for="(one,index) in data.list">{{ one }}---{{ index }}</p>
    </div>

    <div style="background-color: brown;">
        <div v-for="one in data.result">
            <p>id: {{ one.id }}
            </p>
            <img :src="one.url" width="100px" height="100px" alt="">
            
        </div>
    </div>

    <div>
        <p v-for="(value,key,index) of data.obj">{{ value }}--{{ key }}--{{ index }}</p>
    </div>
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