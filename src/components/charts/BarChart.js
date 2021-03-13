import {Bar} from 'vue-chartjs'
import database from '../../firebase.js'

export default{
    extends: Bar,
    data: function () {
        return {
            results: [0,0,0,0,0,0],
            results2: [],
            datacollection: {
                labels: ['Prawn omelette', 'Dry Beef Hor Fun', 'Sambal KangKung', 'Pork Fried Rice', 'Mapo Tofu', 'Cereal Prawn'],
                datasets: [{
                    label: 'Number of dish',
                    data: [],
                    backgroundColor: ['#0b6e00', '#006ca2', '#ff3333', '#d60001', '#f87979', '#f10979']
                  }]
            },
            options: {
                scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true,
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						}
					}]
				},
                legend: { display: false },
                title: {
                  display: true,
                  text: 'Total number of each dish'
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
      },
      methods: {

        fetchItems: function () {
            database.collection('orders').get().then((SnapShot) =>{
                SnapShot.forEach(doc =>{
                    for (var i=0; i<6; i++){
                        //this.datacollection.results[i] += doc.data()[i].quantity 
                        this.results2.push(parseInt(doc.data()[i].quantity, 10))
                    }
                    
                    
                    //this.datacollection.datasets[0].data = this.datacollection.results
                })
                //console.log(this.results2)
                for (var j=0; j<this.results2.length; j+=6){
                    this.results[0] += this.results2[j]
                    this.results[1] += this.results2[j+1]
                    this.results[2] += this.results2[j+2]
                    this.results[3] += this.results2[j+3]
                    this.results[4] += this.results2[j+4]
                    this.results[5] += this.results2[j+5]
                }
                //console.log(this.results)
                this.datacollection.datasets[0].data = this.results
                this.renderChart(this.datacollection,this.options)
            })
        }
      },
      created () {
        this.fetchItems()
      }
}