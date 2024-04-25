import styles from "./StressChart.module.css";
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
                                        borderColor: 'rgb(100, 162, 235)',
                                        backgroundColor: 'rgba(200, 80, 100, 0.7)'
                                },
                                {
                                        label: '2021',
                                        data: [715900, 1657000, 2039200, 1844500, 348500],
                                        borderColor: 'rgb(53, 162, 235)',
                                        backgroundColor: 'rgba(100, 200, 80, 0.7)'
                                },
                                {
                                        label: '2022',
                                        data: [796800, 1871700, 2134600, 1978600, 390100],
                                        borderColor: 'rgb(53, 162, 235)',
                                        backgroundColor: 'rgba(80, 100, 200, 0.7)'
                                }
                        ]
                })    
                setChartOptions({
                        indexAxis: 'y',
                        plugins: {
                                legend: {
                                        position: 'top',
                                },
                                title: {
                                        display: true,
                                        text: 'Perceived life stress, by age group'
                                },
                                maintainAspectRatio: false,
                                responsive: true
                        }
                })     
        })

        return (
                <>
                        <div>
                                <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "600px"}}/>
                        </div>
                </>
        )
}