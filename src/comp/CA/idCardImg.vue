<template>
    <section class="photo">
        <div class="desc">
            身份证：
            <br>{{desc}}
        </div>
        <div class="main">
            <img :src="img" alt="点击选择照片" @touchend="selectId">
            <input ref="file" type="file" alt="" capture="camera" accept="image/*" hidden @change="imgChange">
        </div>
    </section>
</template>
<script>
    export default{
        data(){
            return {
            }
        },
        props:{
            desc:String,
            img:null
        },
        methods:{
            selectId(e){
                e.preventDefault();
                this.$refs.file.click();
                return false;
            },
            imgChange(e){
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)return; 
                var file = files[0];
                if(typeof FileReader==='undefined'){
                    $dialog.alert({
                        content:'您的浏览器不支持图片上传'
                    });
                    return false;
                }
                var vm = this;
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e){
                    vm.$emit('pick',e.target.result);
                }
            }
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
            }
        }
    }
</style>