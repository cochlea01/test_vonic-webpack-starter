<template>
    <div>
        <slot></slot>
        <md-button class="button button-energized button-block">
            选择优惠券
        </md-button>
        <ul>
            <li>
                信息审核费：10元
            </li>
            <li>
                管理费：10元
            </li>
            <li>
                服务费：8元
            </li>
            <li>
                利息：1元
            </li>
        </ul>
        <md-button class="button button-assertive button-block" @click.native="getLocation()">
            立即申请借款
        </md-button>
    </div>
</template>
<script>
    export default{
        methods:{
            getLocation(){
                navigator.geolocation.getCurrentPosition(function(position){
                    alert(position.coords.latitude);
                })
            }
        }
    }
</script>
<style scoped lang="scss">
    @import '../../asset/scss/mixin/flex.scss';
    ul{
        border-top:1px dashed #ccc;
        border-bottom:1px dashed #ccc;
        padding: 10px 0;
        @include flex;
        @include justify(space-around,center);
        li{
            font-size:10px;
            border-right:1px solid #ccc;
            padding:0 3px;

            &:last-child{
                border:none;
            }
        }
    }
</style>