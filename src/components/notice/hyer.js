export default{
    install(Vue,options){
        Vue.prototype.hyer = function(){
            console.log('msg');

        }
    }
}
