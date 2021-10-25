<template>
    <div>
        <h3>{{msg}}</h3>
        <h3>吃汉堡</h3>
    </div>
</template>

<script>
    export default {
        name: "child",
        data () {
            return {
                msg: '你好，世界'
            }
        }
    }
</script>

<style scoped>

</style>
