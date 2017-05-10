import picker from 'comp/other/picker.vue'
import cityList from 'service/config/picker/city.js'
import bankList from 'service/config/picker/bank.js'
var data = {
    clientName:'',
    cityList,
    bankList,
    bankName:'',
    bankVal:null,
    cardNum:'',
    cityName:'',
    cityVal:null,
    bankPhone:''
}
export default{
    data(){
        return data;
    },
    methods:{
        pickBank(valList,text){
            this.bankName = text;
            this.bankVal =valList[0];
        },
        pickCity(valList,text){
            this.cityName = text;
            this.cityVal = valList;
        }
    },
    components:{
        picker
    }
}