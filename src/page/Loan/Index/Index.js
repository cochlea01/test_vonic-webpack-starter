import loanLine from 'comp/loan/line.vue'
import {mapState} from 'vuex'

var data = {
    moneyIndex:0,
    dayIndex:0,
    popshow:false
};

var vm = {
    data(){
        return data;
    },
    mounted(){

    },
    components:{
        loanLine
    },
    computed:{
        ...mapState(['user'])
    },
    methods:{
        loan(){
            this.$router.push('/loan/cacenter')
        },
        changeMoney(i){
            this.moneyIndex = i;
        },
        changeDay(i){
            this.dayIndex = i;
        },
        openPop(){
            this.popshow = true;
        },
        closePop(){
            this.popshow = false;
        }
    },
    beforeRouteEnter(to,from,next){
        $storage('user','hello')
        next();
    }
}

export default vm;