export default {
    addAction(context){
        setTimeout(()=>{
            context.commit('reduce')
        },3000)
        console.log('我比reduce提前执行')
    },
    reduceAction({context}){
        commit('reduce')
    }
}
