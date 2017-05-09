<template>
    <div class="von-input-wrapper" @touchend="pick">
        <label class="item item-borderless item-input von-input">
            <div class="hairline-top"></div>
            <span class="input-label">{{label}}</span>
            <input type="text" disabled :placeholder="placeholder" v-model="text" style="background:#fff;">
            <div class="hairline-bottom"></div>
        </label>
        <span class="input-clear"></span>
    </div>
</template>
<script>
    //导入重置的样式文件
    require('asset/scss/reset/picker.scss')
    import Picker from 'better-picker'
    
    export default{
        data(){
            return {
                picker:null
            }
        },
        props:{
            label:String,
            placeholder:String,
            list:Array,
            selectedIndex:{
                type:Array,
                required:false
            },
            text:String,
            level:{
                type:Number,
                required:false,
                default:1
            },
            ifRelated:{
                type:Boolean,
                required:false,
                default:false
            }
        },
        methods:{
            pick(){
                if(this.picker)this.picker.show();
            }
        },
        computed:{
            indexs(){
                var indexs;
                if(this.selectedIndex==null){
                    indexs = [];
                    for(var i=0;i<this.level;i++){
                        indexs[i] = 0;
                    }
                    return indexs;
                }
                return selectedIndex;
            }
        },
        mounted(){
            if(this.picker==null){
                var vm = this;
                this.picker = new Picker({
                    data: vm.list,
                    selectedIndex: vm.indexs,
                });
                this.picker.on('picker.select', function (selectedVal, selectedIndex) {
                    var text = '';
                    for(var i=0;i<vm.list.length;i++){
                        if(i!=0)text+=' ';
                        text += vm.list[i][selectedIndex[i]].text;
                    }
                    vm.$emit('pick',selectedVal,text);
                })
                this.picker.on('picker.change', function (index, selectedIndex) {
                    changeList(index,selectedIndex);
                });

                function changeList(index,selectedIndex){
                    if(index>vm.level-1)return;
                    var parent = vm.list[index];
                    vm.picker.refillColumn(index+1,parent[selectedIndex].children)
                    changeList(index+1,0);
                }
            }

            
        }
    }
</script>
<style lang="scss" scoped>

</style>