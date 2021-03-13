<template>
   <div>
        <header>
            <h1>{{ msg }}</h1>
            <ul v-if="this.$route.path !== '/modify'">
                <li><router-link to="/" exact>List</router-link></li>
                <li><router-link to="/orders" exact>Orders</router-link></li>
                <li><router-link to="/dashboard" exact>DashBoard</router-link></li>
            </ul>
        </header>
    </div>
  
</template>

<script>
export default {
  
  data(){
    return{
        msg: 'Yummy ZiChar'
        }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
    background:rgb(122, 63, 100);
    border-style: solid;
    border-color:black;
    border-width: 2px;
    height: 95px;
    text-align: top;
    font-family: Avenir, Helvetica, Arial, sans-serif;
}
h1{
    color:ivory;
    text-align: center;
    vertical-align: middle;
    line-height: 35px; 
}
a{
    color: rgb(0, 0, 0);
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
.router-link-active{
    background: rgb(87, 5, 104);
    color: rgb(247, 247, 247);
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  list-style: none;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
  
}
</style>