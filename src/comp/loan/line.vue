<template>
    <section style="height:56px" v-if="items&&items.length>0">
        <h4 class="title">{{title}}</h4>
        <div class="money">
            <p ref="line" class="line"></p>
            <p ref="eLine" :class="{active:isActive}" class="eLine"></p>
            <ul class="points">
                <li v-for="(item,i) in items" @touchstart="start(i,$event)">
                    <i class="point" :class="index == i?'selected':''"></i>
                    <span :style="{left:setLeft(item)}">{{item}}</span>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    export default{
        data(){
            return {
                isActive:false,
                startX:0,
                startWidth:null,
                maxWidth:null
            }
        },
        props:{
            title:String,
            items:Array,
            index:Number
        },
        mounted(){
            this.setWidth(this.index);
            this.maxWidth=this.$refs.line.clientWidth;
        },
        methods:{
            //设置数字位置
            setLeft(item){
                var length = (item+'').length;
                return -3*length+'px';
            },
            setWidth(i){
                this.$refs.eLine.style.width = (i)/(this.items.length-1) *100 +'%';
                this.startWidth = this.$refs.eLine.clientWidth;
            },
            start(i,event){
                this.startX = event.touches[0].clientX;
                this.isActive = true;
                this.setWidth(i);
                var vm = this;
                var move=(e)=>{
                    var touches = e.touches;
                    if(touches.length>1)return;
                    var clientX = touches[0].clientX;
                    var width = vm.startWidth+clientX-vm.startX;
                    if(width<0)width=0;   
                    if(width>vm.maxWidth)width = vm.maxWidth;            
                    vm.$refs.eLine.style.width = width +'px';
                }
                var end=(e)=>{
                    var width = vm.$refs.eLine.clientWidth;
                    var piceWidth = vm.maxWidth/(vm.items.length-1);
                    var i = Math.round(width/piceWidth);
                    vm.$emit('change',i);
                    vm.setWidth(i);
                    vm.isActive = false;
                    document.removeEventListener('touchmove',move);
                    document.removeEventListener('touchend',end);
                }
                document.addEventListener('touchmove',move);
                document.addEventListener('touchend',end);
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../asset/scss/mixin/export.scss';
    .title{
        text-align:center;
        @include font_sn_gnl;
        margin:0 0 $pt20 0;
    }
    .money{
        width: 90%;
        margin: 0 auto;
        position: relative;
        .line{
            width: 100%;
            height: 2px;
            background: #d1d1d1;
        }
        .eLine{
            position: absolute;
            top: 0;
            left: 0;
            width: 20%;
            height: 2px;
            background: $energized;
            &.active:after{
                content:'';
                position:absolute;
                border-radius: 50%;
                right: -5px;
                top: -5px;
                width: 12px;
                height: 12px;
                background: $energized;
            }
        }
        .eLine.active ~ .points .point.selected{
            opacity:0;
        }
        .points{
            position: absolute;
            top:-1px;
            @include flex;
            @include justify(space-between,justify);
            width: 100%;
            text-align: center;
            li{
                position: relative;
                .point{
                    display: block;
                    width: 6px;
                    height: 6px;
                    background: blue;
                    border-radius: 50%;
                    position:relative;
                    top:-1px;
                    &.selected{
                        background: $energized;
                        opacity:1;
                    }
                    opacity:0;
                    &:after{
                        position: absolute;
                        top: -12px;
                        right: -12px;
                        bottom: -12px;
                        left: -12px;
                        content: ' ';
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