<template>
    <article class="page has-navbar" v-nav="{title:'个人信息',showBackButton:true}">
        <div class="page-content">

            <picker
                label="学历"
                placeholder="请选择您的学历"
                :list="educationList"
                :text="educationText"
                @pick="pickEducation"
            ></picker>
           
            <von-input 
                type="text" 
                v-model="address" 
                placeholder="请输入您的常用住址" 
                label="常用地址">
            </von-input>

            <router-link to="/CA/profession">
                <item>
                    职业信息
                </item>
            </router-link>
            <router-link to="/CA/emergency">
                <item>
                    紧急联系人
                </item>
            </router-link>

            <md-button class="button button-positive button-block">
                提交
            </md-button>

        </div>
    </article>
</template>
<script>
    import picker from 'comp/other/picker.vue'
    import educationList from 'service/config/picker/education.js'

    var data = {
        address:'',
        educationList,
        educationText:'',
        educationVal:null
    }

    export default{
        data(){
            return data;
        },
        components:{
            picker
        },
        methods:{
            pickEducation(valList,text){
                this.educationVal = valList[0];
                this.educationText = text;
            }
        }
    }
</script>
<style lang="scss" scoped>
    
</style>