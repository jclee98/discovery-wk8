import {Line} from 'vue-chartjs'
import axios from 'axios'

export default{
    extends:Line,
    data: function () {
        return {
            results: [],
            datacollection: {
                labels: [],
                datasets: [{ 
                    label: "west", 
                    data: [],
                    fill: false,
                    backgroundColor: '#0b6e00',
                    borderColor: '#0b6e00'
                },
                { 
                    label: "national", 
                    data: [],
                    fill: false,
                    borderColor: '#2196f3',
                    backgroundColor: '#2196f3'
                },
                { 
                    label: "east", 
                    data: [],
                    fill: false,
                    borderColor: '#008080',
                    backgroundColor: '#008080'
                },
                { 
                    label: "central", 
                    data: [],
                    fill: false,
                    borderColor: '#E3319D',
                    backgroundColor: '#E3319D'
                },
                { 
                    label: "south", 
                    data: [],
                    fill: false,
                    borderColor: '#FBB117',
                    backgroundColor: '#FBB117'
                },
                { 
                    label: "north", 
                    data: [],
                    fill: false,
                    borderColor: '#DC381F',
                    backgroundColor: '#DC381F'
                }]
            },
            options: {
                legend: { display: true },
                title: {
                  display: true,
                  text: 'PSI Twenty Four Hourly (By Region)'
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    methods:{
        fetchItems: function () {
            axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`).then(response=>{
                this.results=response.data.items
                //console.log(this.results)
                for(let key in this.results){
                    this.datacollection.labels.push(this.results[key]['timestamp'])
                    this.datacollection.datasets[0].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['west'])
                    this.datacollection.datasets[1].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['national'])
                    this.datacollection.datasets[2].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['east'])
                    this.datacollection.datasets[3].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['central'])
                    this.datacollection.datasets[4].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['south'])
                    this.datacollection.datasets[5].data.push(this.results[key]['readings']['psi_twenty_four_hourly']['north'])
                }
                this.renderChart(this.datacollection,this.options)
                //console.log(this.results[0])
            })
        }
    },
    created () {
        this.fetchItems()
    }
}