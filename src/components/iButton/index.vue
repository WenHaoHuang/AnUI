<template>
    <button class="btn" :class="[classType,classPlain,classRound]">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "iButton",
        data(){
            return {
                classType:'',
                classPlain:'',
                classRound:''
            }
        },
        props:{
            type:{
                type:String,
                default:''
            },
            plain:{
                type:String,
                default:''
            },
            round:{
                type:String,
                default:''
            },
            disabled:{
                type:Boolean,
                default:false
            },
            size:{
                type:String,
                default:''
            }
        }
    }
</script>

<style lang="scss">
    @import "~assets/css/mixin";
    .btn{
        line-height:1;
        cursor:pointer;
        background-color:$white;
    }
</style>
