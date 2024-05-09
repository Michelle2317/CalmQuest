import { Bar } from "react-chartjs-2";
import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
} from 'chart.js';
import { useState, useEffect } from "react";

ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
)

export default function StressChart() {
        const [chartData, setChartData] = useState({
                datasets: []
        });
        const [chartOptions, setChartOptions] = useState({});

        useEffect(() => {
                setChartData({
                        labels: ["65 years and over", "50 to 64 years", "35 to 49 years", "12 to 17 years", "12 to 17 years"],
                        datasets: [
                                {
                                        label: '2020',
                                        data: [665100, 1648600, 2005000, 1952300, 289600],
                                        borderColor: '#000000',
                                        backgroundColor: '#FAE033',
                                        barThickness: 8
                                },
                                {
                                        label: '2021',
                                        data: [715900, 1657000, 2039200, 1844500, 348500],
                                        borderColor: 'rgb(53, 162, 235)',
                                        backgroundColor: '#49962E',
                                        barThickness: 8
                                },
                                {
                                        label: '2022',
                                        data: [796800, 1871700, 2134600, 1978600, 390100],
                                        borderColor: 'rgb(53, 162, 235)',
                                        backgroundColor: '#B37F4D',
                                        barThickness: 8

                                }
                        ]
                })    
                setChartOptions({
                        indexAxis: 'y',
                        aspectRatio: 0.9,
                        plugins: {
                                legend: {
                                        position: 'top',
                                },
                                title: {
                                        display: true,
                                        text: 'Perceived life stress, by age group'
                                },
                                maintainAspectRatio: false,
                                responsive: true,
                                },
                        scales: {
                                y: {
                                        display: true,
                                        title: {
                                                display: true,
                                                text: "Age"
                                        },
                                        ticks: {
                                                autoSkip: false,
                                        },

                                },
                                x: {
                                        display: true,
                                        title: {
                                                display: true,
                                                text: "Number of people",
                                        },
                                        ticks: {
                                                autoSkip: false,
                                                min: 0,
                                                max: 2500000
                                        },

                                }
                                },
                },
        )     
        }, [])

        return (
                <>
                        <div>
                                <Bar data={chartData} options={chartOptions} style={{width: "1500px", height: "2000px"}}/>
                        </div>
                </>
        )
}
