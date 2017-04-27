<template>
    <div class="info">
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
            <span>已借款{{borrowTimes}}次</span>
        </section>
    </div>
</template>
<script>
    import {mapState,mapGetters} from 'vuex'

    export default{
        computed:{
            ...mapState(['user']),
            ...mapGetters(['borrowTimes'])
        },
        methods:{
            increment(){
                this.$store.dispatch('incrementAsync')
            }
        }
    }
</script>
<style scoped lang="scss">
    .info{
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
</style>