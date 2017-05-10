<template>
    <article class="page has-navbar" v-nav="{title:'职业信息'}">
        <div class="page-content">

            <picker
                label="职业"
                placeholder="请选择你的职业"
                :list ="professionList"
                @pick ="pickProfession"
                :text="professionText"
            ></picker>

            <von-input 
                type="text" 
                v-model="income" 
                placeholder="请输入您的月收入" 
                label="月收入">
            </von-input>

            <von-input 
                type="text" 
                v-model="companyName" 
                placeholder="请输入您的单位名称" 
                label="单位名称">
            </von-input>

            <picker
                label="所在省市"
                placeholder="请选择你的职业"
                :list ="cityList"
                @pick ="pickCity"
                :text="cityText"
                :level="3"
                :ifRelated = "true"
            ></picker>

            <von-input 
                type="text" 
                v-model="companyAddress" 
                placeholder="请输入您的单位地址" 
                label="单位地址">
            </von-input>

            <md-button class="md-button button button-positive button-block">
                确定
            </md-button>

        </div>
    </article>
</template>
<script>
    import picker from 'comp/other/picker.vue'
    import professionList from 'service/config/picker/profession.js'
    import cityList from 'service/config/picker/city.js'

    var data = {
        professionList,
        professionText:'',
        professionVal:null,
        cityList,
        cityText:'',
        cityVal:null,
        income:'',
        companyName:'',
        companyAddress:''
    }

    export default{
        data(){
            return data
        },
        methods:{
            pickProfession(valList,text){
                this.professionText = text;
                this.professionVal = valList[0];
            },
            pickCity(valList,text){
                this.cityText = text;
                this.cityVal = valList;
            }
        },
        components:{
            picker
        }
    }
</script>
<style lang="scss" scoped>
    
</style>