<template>
    <div>
        <barchart></barchart>
        <api></api>
    </div>
</template>

<script>
import BarChart from './charts/BarChart.vue'
import api from './CallAPI.vue'

export default {
    components: {
        'barchart': BarChart,
        'api':api
    }
}
</script>