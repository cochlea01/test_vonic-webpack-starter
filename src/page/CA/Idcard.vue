<template>
    <article class="page has-navbar" v-nav="{title:'身份证信息'}">
        <div class="page-content">

            <von-input 
                type="text" 
                v-model="name" 
                placeholder="请输入您的姓名" 
                label="您的姓名">
            </von-input>

            <von-input 
                type="text" 
                v-model="idcard" 
                placeholder="请输入您的身份证号码" 
                label="身份证号">
            </von-input>

            <id-card-img
                desc="正面照"
                :img = "frontImage"
                @pick = "pickFront"
            ></id-card-img>

            <id-card-img
                desc="反面照"
                :img = "backImage"
                @pick = "pickBack"
            ></id-card-img>

            <md-button class="button button-positive button-block">
                认证
            </md-button>

        </div>
    </article>
</template>
<script>
    import {mapState} from 'vuex'
    import idCardImg from 'comp/CA/idCardImg.vue'
    var defaultImage = require('asset/img/ca/id.png');
    export default{
        data(){
            return {
                frontImage:defaultImage,
                backImage:defaultImage
            }
        },
        methods:{
            pickFront(result){
                this.frontImage = result;
            },
            pickBack(result){
                this.backImage = result;
            }
        },
        computed:{
            name:{
                get(){
                    return this.$store.state.user.name
                },
                set(value){
                    this.$store.commit('updateName',value)
                }
            },
            idcard:{
                get(){
                    return this.$store.state.user.idcard
                },
                set(value){
                    this.$store.commit('updateIdcard',value)
                }
            }
        },
        components:{
            idCardImg
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../asset/scss/mixin/export.scss';
    .photo{
        padding: 14px;
        &:after{
            display:block;
            content:'';
            clear:both;
        }
        .desc{
            float: left;
            width: 120px;
            height: 90px;
            @include flex;
            @include align(center,center);
        }
        .main{
            img{
                width: 148px;
                height: 90px;
            }
        }
    }
</style>