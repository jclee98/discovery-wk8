<template>
  <div>
      <button v-on:click="neg_check"> - </button>
        {{count}}
      <button v-on:click="pos_check"> + </button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            count:0
        }
    },
    methods:{
        pos_check: function(){
            if (this.count<10){
                this.count++;
            }else{
                alert('You cannot buy more than 10 items.');
            }
            this.$emit('counter', this.item, this.count);
        },
        neg_check: function(){
            if (this.count>0){
                this.count--;
            }
            this.$emit('counter', this.item, this.count);
        }
    },
    props:{
        item:{
            type:Object
        }
    }
}
</script>

<style scoped>
    button {
        font-family: 'Avenir',
        Helvetica, Arial, sans-serif;
        text-align: center;
        color: rgba(224, 69, 230, 0.659);
        font-size:30px;
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: aquamarine;
        border-radius: 20px;
        
    }
</style>