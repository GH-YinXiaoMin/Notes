<template>
    <h1>数组变化侦听</h1>
    <div>
        <button @click="add_time">Add Now 1</button>
        <p v-for="time in times">{{ time }}</p>
        <br>
        <button @click="add_time2">Add Now 2</button>
        <p v-for="time in times2">{{ time }}</p>
        <br>
        <button @click="concat2">Concat</button>
        <p v-for="time in times3">{{ time }}</p>
        <br>
        tips:concat的本质是将被“合并”的数组追加到使用concat数组末尾
    </div>

</template>

<script>

export default {
    data() {
        return {
            times:[],
            times2:[],
            times3:[]
        }
    },
    methods: {
        add_time(){
            this.times.push(new Date().getTime())
        },
        add_time2(){
            this.times2.push(new Date().getTime())
        },
        concat2(){
            this.times3=this.times2.concat(this.times)
        }
    }
}
</script>