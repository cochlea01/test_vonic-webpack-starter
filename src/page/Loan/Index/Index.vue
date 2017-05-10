<template>
    <div class="page">
        <div class="page-content">

            <!--个人信息一览-->
            <div class="person_info">
                <img :src="require('asset/img/index/card@3x.png')" alt="" class="bg">
                <ul class="level">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <section class="main">
                    <div class="title">
                        <p>
                            <span>个人信息</span>
                            <br/>
                            <span>INFORMATION CARD</span>
                        </p>
                    </div>
                    <div class="credit">
                        信用额度:<span>￥{{user.lineOfCredit}}</span>
                    </div>
                </section>
                <section class="aside">
                    <span>{{user.bankCardNum}}</span>
                    <span>已借款{{user.borrowTimes}}次</span>
                </section>
            </div>

            <!--选择金额和期限-->
            <div class="action_loan">
                <loan-line
                    title="选择借款金额（元）"
                    :items="[0,500,1000,1500,3000,5000]"
                    :index="moneyIndex"
                    @change="changeMoney"
                    class="money_line"
                ></loan-line>
                <loan-line
                    title="选择借款期限（天）"
                    :items="[0,5,10,15]"
                    :index="dayIndex"
                    @change="changeDay"
                    class="day_line"
                ></loan-line>
            </div>

            <!--费用信息-->
            <ul class="loan_info">
                <li class="choose">
                    选择优惠券：<a href="javascript:void(0)" @click="openPop">点击使用优惠券</a>
                </li>
                <x-divide></x-divide>
                <li class="loan">
                    <span>借款金额：500元</span>
                    <span>借款期限：7天</span>
                </li>
                <x-divide></x-divide>
                <template v-if="moneyIndex!=0&&dayIndex!=0">
                    <li class="expense" >
                        <span>审核费：10元</span>
                        <span>管理费：10元</span>
                        <span>服务费：18元</span>
                        <span>利息：11元</span>
                    </li>
                    <x-divide></x-divide>
                </template>
                
                <li class="repayment">
                    还款金额：524元 <span>（已优惠：1元）</span>
                </li>
            </ul>
            <md-button class="button button-balanced button-block" @click.native="loan()">
                立即申请借款
            </md-button>

            <x-popup
                :show='popshow'>
                <div class="popup_privilege">
                    <div class="close" @click="closePop"><img :src="require('asset/img/index/cancel@3x.png')"></div>
                    <p class="title">随行贷</p>
                    <h3 class="slogan"><span>春暖花开</span><span>含包贷放</span></h3>
                    <div class="main">
                        <div class="tab">
                            <span class="active">红包券</span> 
                            <span>免息券</span>
                        </div>
                        <ul class="plist">
                            <li v-for="item in [1,2,3]">
                                <img :src="require('asset/img/index/giftCoupons@3x.png')" alt="">
                                <div class="limit">
                                    ￥<span>1.0</span>
                                </div>
                                <div class="desc">
                                    <h3>红包券</h3>
                                    <p>有效期：2017.05.10</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </x-popup>
        </div>
    </div>
</template>
<script src="./Index.js"></script>
<style lang="scss" scoped src="./Index.scss"></style>
