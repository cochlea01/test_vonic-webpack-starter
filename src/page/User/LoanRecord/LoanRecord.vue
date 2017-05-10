<template>
    <div class="page">
        <div class="page-content">
            <section class="latest" ref="latest">
                <h2 class="status">未还款</h2>
                <div class="main">
                    <div class="left">
                        <img :src="require('asset/img/user/record@3x.png')" alt="">
                    </div>
                    <div class="center">
                        <p class="money">￥<span>501</span></p>
                        <p class="text">还款金额</p>
                    </div>
                    <div class="right">
                        <p class="info">借款金额<span class="money">￥500</span></p>
                        <p class="info">到账金额<span class="money">￥476</span></p>
                        <p class="info">借款日期<span class="date">2017.02.12</span></p>
                        <p class="info">还款日器<span class="date">2017.03.19</span></p>
                        <p class="privilege">
                            <span class="active"><i></i>红包</span>
                            <span><i></i>免息券</span>
                        </p>
                    </div>
                </div>
            </section>
            <section class="list" ref="list">
                <h3 class="bill_nums">历史账单，共3笔</h3>
                <scroll :on-infinite="onInfinite">
                    <div v-for="item,i in list" class="bill" :class="[item.open?'open':'']">
                        <div class="breif">
                            <div class="num">
                                <span class="money"><i></i>1315</span>
                                <span class="date">2016-11-26</span>
                            </div>
                            <div class="status">
                                已还款<i @click="toogleDetail(i)"></i>
                            </div>
                        </div>
                        <x-divide class="divide"></x-divide>
                        <div class="detail">
                            <p>
                                <span>借款金额</span>
                                <span>￥500</span>
                                <span>还款日期</span>
                                <span>2017.01.19</span>
                                <span class="icon" :class="[i == 1?'used':'']"><i></i>红包</span>
                            </p>
                            <p>
                                <span>到账金额</span>
                                <span>￥500</span>
                                <span>还款日期</span>
                                <span>2017.01.19</span>
                                <span class="icon" :class="[i == 2?'used':'']"><i></i>免息券</span>
                            </p>
                        </div>
                    </div>

                    <div v-if="noMoreList" slot="infinite" class="text-center">没有更多数据</div>
                </scroll>
            </section>
        </div>
    </div>
</template>
<script src="./LoanRecord.js"></script>
<style lang="scss" scoped src="./LoanRecord.scss"></style>