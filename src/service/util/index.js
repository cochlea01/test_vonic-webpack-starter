export default{
    rem(){
        var width = window.innerWidth/10;
        if(width>54)width=54;
        document.querySelector('html').style.fontSize=width+'px';
    }
}