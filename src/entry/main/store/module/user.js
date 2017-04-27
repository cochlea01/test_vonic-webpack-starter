export default {
    state:{
        userName:'爱佛什',
        lineOfCredit:2000,
        bankCardNum:'6222 3100 2572 1190',
        borrowTimes:100,
        loanMoney:5000,
        loanDays:10,
        repayMoney:5200,
        name:'',
        idcard:''
    },
    getters:{

    },
    mutations:{
        increment(state,n){
            state.lineOfCredit += n;
        },
        updateName(state,value){
            state.name = value;
        },
        updateIdcard(state,value){
            state.idcard = value;
        }
    },
    actions:{
        incrementAsync({commit}){
            setTimeout(function(){
                commit('increment',100)
            },1000)
        }
    }
}