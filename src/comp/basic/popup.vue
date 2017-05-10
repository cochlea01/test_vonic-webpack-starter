<template>
    <div class="popup" :class="{active:show}">
        <article class="popup_body">
            <slot></slot>
        </article>
    </div>
</template>
<script>
    export default{
        props:{
            show:{
                default:false
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../asset/scss/mixin/export.scss';
    .popup{
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        width:100%;
        height:100%;
        -webkit-transition: all .2s linear;
        transition: all .2s linear;
        background: #000;
        @include flex;
        @include justify(center,center);
        @include align(center,center);
        z-index:-1;
        background: rgba(0,0,0,0);
        &.active{
            z-index:99;
            background: rgba(0,0,0,0.3);
            .popup_body{
                transform:scale(1);
            }
        }
        .popup_body{
            width: $pt300;
            transform: scale(0);
            transition:all 0.3s ease-in-out;
        }
    }
</style>