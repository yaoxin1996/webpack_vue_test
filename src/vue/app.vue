<template>
    <div>
        <h1>{{message}}</h1>
        <child></child>
    </div>
</template>

<script>
    import child from "./child.vue";
    export default {
        name: "app",
        components: {
          child
        },
        data () {
            return {
                message: 'hello world!!!'
            }
        }
    }
</script>

<style scoped>

</style>
