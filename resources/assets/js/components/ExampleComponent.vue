<template>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>   
</template>

<script>
    export default {
        data(){
            return {
                visible:false
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
