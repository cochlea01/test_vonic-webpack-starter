<template>
    <div class="page has-navbar">
        <div class="page-content">
    
            <!--导航栏-->
            <von-header theme="light">
                <button class="button button-icon ion-ios-arrow-back"
                        slot="left"></button>
                <span slot="title">现金贷</span>
                <button class="button button-icon ion-navicon"
                        slot="right"></button>
            </von-header>
    
            <!--个人信息一览-->
            <div class="person-info">
                <section class="main">
                    <div>
                        <img :src="require('asset/img/dev/u73.png')" alt="" style="float:left;">
                        <p>
                            <span>{{user.userName}}</span>
                            <br/>
                            <span>Centurion Card</span>
                        </p>
                    </div>
                    <div @click="increment">
                        信用额度:<span>￥{{user.lineOfCredit}}</span>
                    </div>
                </section>
                <div class="divide"></div>
                <section class="aside">
                    <span>{{user.bankCardNum}}</span>
                    <span>已借款{{user.borrowTimes}}次</span>
                </section>
            </div>

            <!--个人借钱信息-->
            <table class="person-loan-info">
                <tr>
                    <td>{{user.loanMoney}}<br/>借款金额</td>
                    <td>{{user.loanDays}}天<br/>借款期限</td>
                    <td>{{user.repayMoney}}元<br/>还款金额</td>
                </tr>
            </table>

            <!--借款操作-->
            <div class="action-loan">
                <loan-line
                    title="借款金额（元）"
                    :items="[0,500,1000]"
                    :index="0"
                ></loan-line>
                <loan-line
                    title="借款期限（天）"
                    :items="[1,5,20,100]"
                    :index="0"
                ></loan-line>
                <md-button class="button button-energized button-block">
                    选择优惠券
                </md-button>
                <ul class="expense">
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
                <md-button class="button button-assertive button-block" @click.native="loan()">
                    立即申请借款
                </md-button>
            </div>
    
        </div>
    </div>
</template>
<script>
    import loanLine from 'comp/loan/line.vue'

    import {mapState} from 'vuex'

    export default{
        data:function(){
            return {
                
            }
        },
        components:{
            loanLine
        },
        computed:{
            ...mapState(['user'])
        },
        methods:{
            increment(){
                this.$store.dispatch('incrementAsync')
            },
            loan(){
                this.$router.push('/CA')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../asset/scss/mixin/flex.scss';
    //个人信息一览
    .person-info{
        margin: 10px 10px;
        border: 1px solid #ccc;
        border-radius: 10px;
        .main{
            padding: 10px 10px;
            img{
                width:42px;
                height:42px;
                margin-right: 10px;
            }
        }
        .aside{
            padding: 10px 10px;

            span:last-child{
                float: right;
            }
        }
        .divide{
            height: 1px;
            background: #ccc;
            width: 100%;
        }
    }
    //个人借钱信息
    .person-loan-info{
        td{
            width:1%;
            border: 1px solid #ccc;
            text-align: center;
        }
    }
    /**借款操作 */
    .action-loan{
        .expense{
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
    }
    
</style>
