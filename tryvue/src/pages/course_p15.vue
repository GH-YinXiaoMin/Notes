<template>
    <h1>计算属性</h1>
    <div>
        判断数组中是否有内容
        <br><br>
        1.在模板方法中使用 三元运算符
        <br>
        <p >{{ numbers.length>0?"Yes":"No" }}</p>
        <br>
        2.使用函数返回内容放入模板中
        <br>
        <p>{{ numbers_empty() }}</p>
        <br>
        3.使用计算属性放入模板
        <br>
        <p>{{ numbers_empty_compute }}</p>
        <br>
        tips:使用计算属性时，其缓存机制保证当依赖属性不发生变化时不重复执行方法
    </div>

</template>

<script>

export default {
    data() {
        return {
            numbers:[1,2,3]
        }
    },
    computed:{
        numbers_empty_compute(){
            return this.numbers.length>0?"Yes":"No" 
        }
    },
    methods: {
        numbers_empty(){
            return this.numbers.length>0?"Yes":"No" 
        }
    }
}
</script>