<template>
    <div>
        <button-bar theme="energized" :tab-items="promotions" :tab-index="promotionIndex" :on-tab-click="index => promotionIndex = index"></button-bar>
        <div class="page">
            <scroll class="page-content packet" :on-infinite="loadMorePacket" v-show="promotionIndex == 0">
                <ul class="list">
                    <li class="securities" v-for="item in packetList">
                        <img :src="securitiesImg" alt="">
                        <div class="limit">
                            ￥<span>100</span>
                        </div>
                        <div class="detail">
                            <h3>签到抽奖</h3>
                            <p>仅限在财优优客户端使用</p>
                            <p>有效期：2015.03.10—2016.03.20</p>
                        </div>
                    </li>
                    <!--
                    <li class="already">
                        <img :src="alreadyImg" alt="">
                        <div class="limit">
                            ￥<span>100</span>
                        </div>
                        <div class="detail">
                            <h3>签到抽奖</h3>
                            <p>仅限在财优优客户端使用</p>
                            <p>有效期：2015.03.10—2016.03.20</p>
                        </div>
                    </li>
                    <li class="expired">
                        <img :src="expiredImg" alt="">
                        <div class="limit">
                            ￥<span>100</span>
                        </div>
                        <div class="detail">
                            <h3>签到抽奖</h3>
                            <p>仅限在财优优客户端使用</p>
                            <p>有效期：2015.03.10—2016.03.20</p>
                        </div>
                    </li>
                    -->
                    <div v-if="noMorePacket" slot="infinite" class="text-center">没有更多数据</div>
                </ul>
            </scroll>
            <scroll class="page-content interest" v-show="promotionIndex == 1">
                <ul class="list">
                    <li class="securities">
                        <img :src="securitiesImg" alt="">
                        <div class="limit">
                            ￥<span>100</span>
                        </div>
                        <div class="detail">
                            <h3>签到抽奖</h3>
                            <p>仅限在财优优客户端使用</p>
                            <p>有效期：2015.03.10—2016.03.20</p>
                        </div>
                    </li>
                    <li class="already">
                        <img :src="alreadyImg" alt="">
                        <div class="limit">
                            ￥<span>100</span>
                        </div>
                        <div class="detail">
                            <h3>签到抽奖</h3>
                            <p>仅限在财优优客户端使用</p>
                            <p>有效期：2015.03.10—2016.03.20</p>
                        </div>
                    </li>
                    <li class="expired">
                        <img :src="expiredImg" alt="">
                        <div class="limit">
                            ￥<span>100</span>
                        </div>
                        <div class="detail">
                            <h3>签到抽奖</h3>
                            <p>仅限在财优优客户端使用</p>
                            <p>有效期：2015.03.10—2016.03.20</p>
                        </div>
                    </li>
                </ul>
            </scroll>
        </div>
    </div>
</template>
<script src="./Privilege.js"></script>
<style lang="scss" scoped src="./Privilege.scss"></style>