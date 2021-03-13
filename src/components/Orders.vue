<template>
    <div>
        <ul>
            <li v-for="order in orders" v-bind:key="order.name">
                <div v-for="dish in order[1]" v-bind:key="dish.name">
                    <p>{{dish.name}}: {{dish.quantity}} </p>
                </div>
                <button v-bind:id="order[0]" v-on:click="deleteItem($event)">Delete</button>
                <button v-bind:id="order[0]" v-on:click="route(order[0])">Modify</button>
            </li>
        </ul>
    </div>
</template>



<script>
import database from '../firebase.js'
export default {
    data(){
        return{
            orders: [],
            test: []
        }
    },
    props:{
        itemsSelected:{
            type: Array
        }
    },
    methods:{
        fetchItems: function(){
            database.collection('orders').get().then((SnapShot)=>{
                SnapShot.forEach(doc =>{
                    this.orders.push([doc.id, doc.data()])
                    this.test.push(doc.data())
                })
            })
        },
        deleteItem: function(event){
            let doc_id = event.target.getAttribute("id");
            database.collection('orders').doc(doc_id).delete().then(() => {
                var filteredOrders = this.orders.filter((orderf) => orderf[0]!==doc_id);
                this.orders = filteredOrders
            });
        },
        route: function(event){
            this.$router.push({ name: "Modify", params: {id: event} });
        }
    },
    created(){
        this.fetchItems()
    }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;

  
}


button {
  width: 65px;
  height: 30px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
}
</style>
