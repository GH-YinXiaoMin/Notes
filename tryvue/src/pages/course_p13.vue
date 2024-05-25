<template>
    <h1>事件修饰符</h1>
    <div>
        阻止默认事件，使用a标签的跳转行为作为例子
        <br>
        更多时间修饰符可查询官方文档
        <br>
        1.使用方法中调用组织默认事件方法<br>
        <a @click="a_click_event_1" href="https://www.baidu.com">a1</a>
<br>
        2.使用方法中调用组织默认事件方法<br>
        <a @click.prevent="a_click_event_2" href="https://www.baidu.com">a2</a>
        <br>
        <br>

        3.阻止事件冒泡
        <br>
        当点击子组件触发子组件的点击事件的同时，父组件的点击事件也会被触发
        <br>
        <div @click="click_div" style="width: 50px; height: 50px; background-color: gray;">
            <p style="background-color: blue;" @click="click_p">标签</p>
        </div>
        <br>
        <br>
        在方法中使用stopPropagation可以停止事件的冒泡
        <br>
        <div @click="click_div" style="width: 50px; height: 50px;background-color: gray;">
            <p style="background-color: blue;" @click="click_p_stop">标签</p>
        </div>
        <br>
        <br>
        使用 事件修饰符stop 同样可以停止事件的冒泡
        <br>
        <div @click="click_div" style="width: 50px; height: 50px; background-color: gray;">
            <p style="background-color: blue;" @click.stop="click_p">标签</p>
        </div>

    </div>

</template>

<script>

export default {
    data() {
        return {
            count: 0,
            count1: 0,
            colors:["color:blue","color:red","color:green"],
            show_color:"",
            show_color2:""
        }
    },
    methods: {
        a_click_event_1(e){
            e.preventDefault();
            console.log("点击链接1");
        },
        a_click_event_2(e){
            console.log("点击链接2");
        },
        click_div(){
            console.log("div");
        },
        click_p(){
            console.log("p");
        },
        click_p_stop(e){
            console.log("p");
            e.stopPropagation();
        }
    }
}
</script>