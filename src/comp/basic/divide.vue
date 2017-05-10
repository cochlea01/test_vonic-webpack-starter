<template>
    <div :style="{
        background:color,
        height,
        width
    }"></div>
</template>
<script>
    export default{
        props:{
            color:{
                default:'#e8e8e8'
            },
            height:{
                default:'1px'
            },
            width:{
                default:'100%'
            }
        }
    }
</script>