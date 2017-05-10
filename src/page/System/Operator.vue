<template>
    <article class="page has-navbar" v-nav="{title:'运营商验证'}">
        <div class="page-content">
            <div class="status">
                <span class="active">授权</span>
                <i>------</i>
                <span>认证</span>
                <i>------</i>
                <span>完成</span>
            </div>
            <div class="divide"></div>
            <von-input
                type="text"
                label="手机号码"
                v-model="phone"
            ></von-input>
            <von-input
                type="text"
                label="服务密码"
                v-model="pwd"
                placeholder="请输入您手机号的服务密码"
            ></von-input>
            <div class="protocol">
                <input type="checkbox" v-model="agree">我同意<span>《借款服务与隐私协议》</span>
            </div>
            <md-button class="md-button button button-positive button-block">下一步</md-button>
            <div class="hint">
                温馨提示：
                <br>1、请授权本人实名认证手机号
                <br>2、登录成功后将受到运营商短信通知，无需回复
            </div>
        </div>
    </article>
</template>
<script>
    var data = {
        phone:'17625216086',
        pwd:'',
        agree:true
    }
    export default{
        data(){
            return data;
        }
    }
</script>
<style lang="scss" scoped>
    .status{
        line-height: 50px;
        text-align:center;
        &:after{
            content:'';
            display:block;
            clear:both;
        }
        span{
            float:left;
            width:20%;
            &.active{
                color: red;
            }
        }
        i{
            float:left;
            width:20%;
        }
    }
    .divide{
        height:1px;
        background: #ddd;
    }
    .protocol{
        line-height: 50px;
        text-align:center;
        input[type="checkbox"]{
            position:relative;
            top:3px;
        }
        span{
            color:red;
        }
    }
    .hint{
        padding-left:20px;
    }
</style>