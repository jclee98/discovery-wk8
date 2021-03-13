<template>
    <div>
        <ul>
            <li v-for="(order, index) in datapacket[0]" v-bind:key="index">
                <p>{{order.name}}: {{order.quantity}}</p>
                <input v-bind:id="index" type="number" placeholder= 0 min="0" max="10" v-model="update[index]">
            </li><br>
            <button v-on:click="updateOrder()">Update Order</button>
        </ul>
    </div>
</template>


<script>
import database from '../firebase.js'
export default {
    data(){
        return{
            id: [],
            datapacket: [],
            update: {
                0:0,
                1:0,
                2:0,
                3:0,
                4:0,
                5:0
            },
        }
    },
    methods:{
        fetchItems: function(){
            database.collection('orders').doc(this.id[0]).get().then((SnapShot)=>{
                this.datapacket.push(SnapShot.data())
            })
        },
        
        updateOrder: function(){
            var copy = {}            
            for (var i=0; i<6; i++){
                copy[i] = this.datapacket[0][i]
            }
            for (var j=0; j<6; j++){
                copy[j].quantity = this.update[j] 
            }
            var parsedobj = JSON.parse(JSON.stringify(copy))
            console.log(parsedobj)
            database.collection('orders').doc(this.id[0]).set(copy).then(()=> this.$router.push({ name: "Orders"}));
        }
    },
    created(){
        this.id.push(this.$route.params.id),
        this.fetchItems()
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    text-align: left;
}
button {
  width: 80px;
  height: 40px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
input{
    width: 100px;
}
</style>