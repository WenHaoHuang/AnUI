/**
* @author : wenhao.huang
* @date   : 2018/1/10
*/

<template>
    <article class="page page-article page-wrap">
        <h2>Notice 通知</h2>
        <div class="section-content">
            <p>通用类通知。包含alart,dialog,message,notification,loading……</p>
        </div>
        <h3>alart</h3>
        <div class="section-content">
            <p>Toast类信息。</p>
            <div class="cells-button">
                <i-button @click.native="alertFn">默认黑色</i-button>
                <i-button @click.native="alertFn1">默认白色</i-button>
                <i-button type="primary" v-on:click.native="alertFn2">primary</i-button>
                <i-button type="success" v-on:click.native="alertFn3">success</i-button>
                <i-button type="warning" v-on:click.native="alertFn4">warning</i-button>
                <i-button type="primary" v-on:click.native="alertFn5">warning</i-button>
                <!--<i-button plain>默认按钮</i-button>
                <i-button round>默认按钮</i-button>
                <i-button type="primary">主要按钮</i-button>
                <i-button type="primary" plain>主要按钮</i-button>
                <i-button type="primary" round>主要按钮</i-button>
                <i-button type="success">成功按钮</i-button>
                <i-button type="success" plain>成功按钮</i-button>
                <i-button type="success" round>成功按钮</i-button>
                <i-button type="info">信息按钮</i-button>
                <i-button type="info" plain>信息按钮</i-button>
                <i-button type="info" round>信息按钮</i-button>
                <i-button type="warning">警告按钮</i-button>
                <i-button type="warning" plain>警告按钮</i-button>
                <i-button type="warning" round>警告按钮</i-button>
                <i-button type="danger">危险按钮</i-button>
                <i-button type="danger" plain>危险按钮</i-button>
                <i-button type="danger" round>危险按钮</i-button>-->
            </div>
        </div>
    </article>
</template>

<script>
    import iButton from 'components/iButton';
    export default {
        name: 'buttonItem',
        components:{
            iButton
        },
        data(){
            return {}
        },
        methods:{
            alertFn(){
                this.$alert('温馨提示温馨提示温馨提示');
            },
            alertFn1(){
                this.$alert({
                    type:'default',
                    text:'温馨提示温馨提示温馨提示'
                });
            },
            alertFn2(){
                this.$alert({
                    type:'info',
                    text:'温馨提示温馨提示温馨提示'
                });
            },
            alertFn3(){
                this.$alert({
                    type:'success',
                    text:'温馨提示温馨提示温馨提示',
                    showBg:true,
                    delay:3000
                });
            },
            alertFn4(){
                this.$alert({
                    type:'warning',
                    text:'温馨提示温馨提示温馨提示',
                    showBg:true
                });
            },
            alertFn5(){
                this.hyer('dafsfae')
            }
        }
    }
</script>

<style lang="scss">

</style>
