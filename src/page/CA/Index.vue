<template>
    <article class="page has-navbar" v-nav="{title:'认证中心',showBackButton:true}">
        <div class="page-content">
            <section class="CA-status">
                <md-button class="button button-assertive button-block">
                    审核中
                </md-button>
            </section>
            <section class="CA-info">
                <div class="amount">
                    <p class="title">信用额度</p>
                    <p class="text">1000元</p>
                </div>
                <div class="detail">
                    <router-link to="/CA/personal"><p><i>T</i><span>个人信息</span></p></router-link>
                    <p class="center" @click="goIdCard()"><i>T</i><span>身份证信息</span></p>
                    <router-link to="/CA/bankcard"><p class="center"><i>T</i><span>银行卡信息</span></p></router-link>
                    <p><i>T</i><span>运营商认证</span></p>
                </div>
            </section>
        </div>
    </article>
</template>
<script>
    export default{
        methods:{
            goIdCard(){
                this.$router.push('/ca/idcard')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../asset/scss/mixin/export.scss';
    .page-content{
        background: #ddd;
    }
    .CA-status{
        margin-top: 30px;
        .button{
            width:60%;
            margin: 0 auto;
        }
    }
    .CA-info{
        position: relative;

        .amount{
            position: absolute;
            width:300px;
            height:300px;
            border-radius:150px;
            border: 20px solid #000;
            text-align:center;
            top: 10px;
            left: -120px;
            .title{
                position: absolute;
                top: 100px;
                left: 120px;
            }
            .text{
                position: absolute;
                top: 120px;
                left: 120px;
            }
        }
        .detail{
            position: absolute;
            top: 40px;
            left: 200px;
            p{
                margin-bottom: 50px;
                background: #fff;
                line-height: 24px;
                font-size: 10px;
                text-align: center;
                width: 100px;
                &.center{
                    margin-left: 10px;
                }
            }
        }
    }
</style>