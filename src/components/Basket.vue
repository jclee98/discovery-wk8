<template>
  <div id="app">
        <br><br>
        <p>Menu: </p>
        <ul>
            <li v-for="item in itemsSelected" v-bind:key="item.name">
                <p>{{item[0]}} x {{item[1]}}</p>
            </li>
        </ul>
        <button v-on:click="findTotal(); sendOrder()" >Add Order</button>
        <div id="total" v-show="check">
            <p>Subtotal: ${{total}}</p>
            <p>Grand Total: ${{gst}}</p>
        </div>
  </div>
</template>

<script>
import database from '../firebase.js'
export default {
    data(){
        return{
            total:0,
            check:false,
            arr:[]
        }
    },
    props:{
        itemsSelected:{
            type: Array
        }
    },
    methods:{
        findTotal: function(){
            this.check = false;
            this.total = 0;
            for (let i = 0; i<this.itemsSelected.length; i++){
                var price = this.itemsSelected[i][2];
                var count = this.itemsSelected[i][1];
                this.total += price*count;
                this.check = true;
            }
        },
        sendOrder: function(){
            //var count = 0;
            var order = {}
            order[0] = {name: 'Prawn omelette', quantity: 0}
            order[1] = {name: 'Dry Beef Hor Fun', quantity: 0}
            order[2] = {name: 'Sambal KangKung', quantity: 0}
            order[3] = {name: 'Pork Fried Rice', quantity: 0}
            order[4] = {name: 'Mapo Tofu', quantity: 0}
            order[5] = {name: 'Cereal Prawn', quantity: 0}
            for (var item of this.itemsSelected){
                for (var i = 0; i < Object.keys(order).length; i++){
                    if (order[i].name == item[0]){
                        order[i].quantity = item[1];
                    }
                }
                //order[count] = {name: item[0], quantity: item[1]};
                //count++;
            }
            database.collection('orders').add(order).then(()=> location.reload());
        }
    },
    computed:{
        gst: function(){
            var a = this.total*1.07;
            var c = a.toFixed(2);
            return c;
        }
    }
}
</script>

<style>
button {
  width: 80px;
  height: 40px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>