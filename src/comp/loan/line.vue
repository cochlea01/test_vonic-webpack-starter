<template>
    <section style="height:56px" v-if="items&&items.length>0">
        <h4 class="title">{{title}}</h4>
        <div class="money">
            <p class="line"></p>
            <ul class="points">
                <li v-for="(item,i) in items">
                    <i class="point" :class="index == i?'selected':''"></i>
                    <span>{{item}}</span>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    export default{
        props:{
            title:String,
            items:Array,
            index:Number
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../asset/scss/mixin/export.scss';
    .title{
        text-align:center;
        font-size: 12px;
    }
    .money{
        width: 80%;
        margin: 0 auto;
        position: relative;
        .line{
            width: 100%;
            height: 4px;
            background: #000;
        }
        .points{
            position: absolute;
            top:-2px;
            @include flex;
            @include justify(space-between,justify);
            width: 100%;
            text-align: center;
            li{
                position: relative;
                .point{
                    display: block;
                    width: 8px;
                    height: 8px;
                    background: blue;
                    border-radius: 4px;
                    &.selected{
                        background: red;
                    }
                    
                }
                span{
                    position:absolute;
                    left:-0.5em;
                }
            }
            
        }
    }
</style>