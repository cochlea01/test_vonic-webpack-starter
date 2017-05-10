var data = {
    list:[],
    list_max:9999
}

function test_add_list(){
    data.list.push({open:false})
}

var vm = {
    data(){
        return data;
    },
    beforeRouteEnter: (to, from, next) => {
        setTimeout(()=>{
            test_add_list();
            test_add_list();
            test_add_list();
            test_add_list();
            test_add_list();
            test_add_list();
            //如果只有现在的几条数据
            data.list_max = data.list.length;
            next();
        },1000)
    },
    mounted(){
        //手动设置样式
        var height = window.innerHeight-this.$refs.latest.clientHeight;
        this.$refs.list.style.height = height+'px';
    },
    methods:{
        toogleDetail(i){
            this.list[i].open=!this.list[i].open;
        },
        onInfinite(done){
            if(this.noMoreList){done();return;}
            setTimeout(()=>{
                test_add_list();
                test_add_list();
                test_add_list();
                if(this.list.length>=10){
                    this.list_max = this.list.length;
                }
                done();
            },1000)
        }
    },
    computed:{
        noMoreList(){
            return this.list.length>=this.list_max;
        }
    }
}

export default vm;