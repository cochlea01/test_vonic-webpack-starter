<template>
    <article class="page has-navbar" v-nav="{title:'紧急联系人'}">
        <div class="page-content">
            <von-input
                type="text"
                label="亲属关系"
                placeholder="请输入亲属关系"
                v-model="kinsfolkRelation"
            ></von-input>
            <von-input
                type="text"
                label="联系方式"
                placeholder="请输入联系方式"
                v-model="kinsfolkConcat"
            ></von-input>
            <div style="height:40px;"></div>
            <von-input
                type="text"
                label="社会关系"
                placeholder="请输入社会关系"
                v-model="socialRelation"
            ></von-input>
            <von-input
                type="text"
                label="联系方式"
                placeholder="请输入联系方式"
                v-model="socialConcat"
            ></von-input>
            <md-button class="md-button button button-positive button-block">
                确定
            </md-button>
        </div>
    </article>
</template>
<script>
    var data = {
        kinsfolkRelation:'',
        kinsfolkConcat:'',
        socialRelation:'',
        socialConcat:''
    }
    export default{
        data(){
            return data;
        }
    }
</script>
<style lang="scss" scoped>
    
</style>