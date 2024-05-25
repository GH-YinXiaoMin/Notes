<template>
    <h1>事件传参</h1>
    <button type="button"  @click="change_color">点击变色</button>
    <p>{{ count }}</p>
    <div>
        <button  v-for="(item,index) in colors" type="button"  @click="log_value2(item)">{{ item }}</button>
    </div>
    <p id="msg_show">{{ show_color  }}</p>
    <br/><br/>
    <div>
        传递参数同时传递事件信息打印到控制台<br/>
        <button  v-for="(item,index) in colors" type="button"  @click="log_value($event,item)">{{ item }}</button>
    </div>
    <p id="msg_show2">{{ show_color2  }}</p>

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
        add() {
            this.count1++
        },
        change_color(e) {
            this.count++;
            this.count%=3
            e.target.style=this.colors[this.count];
        },
        log_value2(msg){
            console.log(msg);
            this.show_color=msg;
        },
        log_value(e,msg){
            console.log(msg);
            console.log(e);
            this.show_color2=msg;
        }
    }
}
</script>