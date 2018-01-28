export default {
    add(state,n){
        state.count += n;
    },
    reduce(state){
        state.count -= 1;
    }
}
