<template>
    <article class="page">
        <div class="page-content">
            <section class="CA_status">
                <h3>信用额度：1000元</h3>
            </section>
            <section class="CA_info">
                <p class="personal active"><i class="type"></i><span>个人信息</span><i class="status"></i></p>
                <p class="idcard active"><i class="type"></i><span>身份证信息</span><i class="status"></i></p>
                <p class="bankcard"><i class="type"></i><span>银行卡信息</span><i class="status"></i></p>
                <p class="operator"><i class="type"></i><span>运营商认证</span><i class="status"></i></p>
            </section>
            <section class="CA_light">
                <img class="img" :src="require('asset/img/ca/light@3x.png')" alt="">
            </section>
        </div>
    </article>
</template>
<script src="./CACenter.js"></script>
<style lang="scss" scoped src="./CACenter.scss"></style>
