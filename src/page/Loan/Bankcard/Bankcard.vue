<template>
    <article class="page">
        <div class="page-content">
            <von-input
                type="text"
                label="客户姓名"
                placeholder="请输入客户姓名"
                v-model="clientName"
            ></von-input>
            <picker
                label="银行名称"
                placeholder="请选择银行名称"
                :list="bankList"
                :text="bankName"
                @pick="pickBank"
            ></picker>
            <von-input
                type="text"
                label="银行卡号"
                placeholder="请输入银行卡号"
                v-model="cardNum"
            ></von-input>
            <picker
                label="开户省市"
                placeholder="请选择开户省市"
                :list="cityList"
                :text="cityName"
                @pick="pickCity"
                :level="3"
                :isRelated="true"
            ></picker>
            <von-input
                type="text"
                label="预留手机号"
                placeholder="请输入预留手机号"
                v-model="bankPhone"
            ></von-input>
            <md-button class="md-button button button-positive button-block">提交</md-button>
        </div>
    </article>
</template>
<script src="./Bankcard.js"></script>
<style lang="scss" scoped src="./Bankcard.scss"></style>