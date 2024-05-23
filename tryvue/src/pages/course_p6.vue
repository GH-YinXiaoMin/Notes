<template>
    <h1>模板语法</h1>
    <p>{{ msg }}</p>
    <p>数字：{{ number }}</p>
    <p>数字是否为 10 {{ number == 10 ? "Yes" : "No" }}</p>
    <p>数字是2的倍数吗 {{ number % 2 == 0 ? "Yes" : "No" }}</p>
    <p>字符串反转 {{ msg.split("").reverse().join("-") }}</p>
    <p>渲染html：
    <p v-html="html_txt"></p>
    </p>

</template>

<script>
export default {
    data() {
        return {
            msg: "神奇的Vue",
            number: 10,
            html_txt: '<a href="https://www.baidu.com">百度</a>'
        }
    }
}
</script>