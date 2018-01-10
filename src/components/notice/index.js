/**
 * @author : wenhao.huang
 * @date   : 2018/1/10
 */

import alert from './alert.vue';

const notify = {
    install:function(Vue,options){
        Vue.prototype.$alert = function(options){
            let alertTpl = Vue.extend(alert);
            let $vm = new alertTpl();

            let tpl = $vm.$mount().$el;
            document.body.appendChild(tpl);

            if(typeof options === 'string'){
                $vm.text = options;
            }
            else if(typeof options === 'object'){
                Object.assign($vm,options);
            }

            $vm.show = true;
            setTimeout(function(){
                $vm.show = false;
            },$vm.delay || 1500);
        }
        console.log('notify');
    }
};
export default notify;
