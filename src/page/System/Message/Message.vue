<template>
    <div>
        <button-bar theme="energized" :tab-items="promotions" :tab-index="promotionIndex" :on-tab-click="index => promotionIndex = index"></button-bar>
        <div class="page">
            <!--系统消息-->
            <div class="page-content" v-show="promotionIndex==0">
                多么痛的领悟
            </div>
            <!--平台活动-->
            <div class="page-content" v-show="promotionIndex==1">
                多好的活动
            </div>
        </div>
    </div>
</template>
<script src="./Message.js"></script>
<style lang="scss" scoped src="./Message.scss"></style>