import Highcharts from 'highcharts'
import numeral from 'numeral'

export default function chartScript(id, data, lastMatch) {

    const chartSeries = []
    data.forEach(e => {
        chartSeries.push({
            name: e.name,
            data: e.results.slice(0, lastMatch)
        })
    })

    const chartOptionsProfit = {
        time: {
            useUTC: false
        },
        chart: {
            type: 'line',
            height: '570px'
        },
        title: {
            text: ''
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        yAxis: {
            title: {
                text: 'Potencia [kW]'
            },
            visible: true,
        },
        tooltip: {
            formatter() {
                return (
                    this.series.name +
                    ': <b>' +
                    numeral(this.y).format('0,0') +
                    '</b> kW'
                ) // Ajuste centavos a pesos
            }
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            }
        },
        series: chartSeries
    }
    Highcharts.chart(id, chartOptionsProfit)
}
