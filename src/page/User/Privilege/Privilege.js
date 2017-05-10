var data = {
    promotions: ["红包券", "免息券"],
    promotionIndex: 0,
    packetList:[1,2,3,4,5,6,7],
    interestList:[1,2,3,4,5,6,7,8],
    packetMax:10,
    interestMax:10,
    securitiesImg:require('asset/img/user/securities@3x.png'),
    alreadyImg:require('asset/img/user/already@3x.png'),
    expiredImg:require('asset/img/user/expired@3x.png')
}

var vm = {
    data(){
        return data;
    },
    methods:{
        loadMorePacket(){
            
        }
    },
    computed:{
        noMorePacket(){
            return this.packetList.length >= this.packetMax;
        }
    }
}

export default vm;