import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

@ViewChild('lineChart') private chartRef!: ElementRef;
  chart: any;

  ngOnInit(): void {
    // Data will be loaded here
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const canvas = this.chartRef.nativeElement.getContext('2d');
    
    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Patient Admissions',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
          {
            label: 'Patient Discharges',
            data: [28, 48, 40, 69, 36, 37, 31],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Patients'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Hospital Patient Flow',
            font: {
              size: 16
            }
          },
          legend: {
            position: 'top'
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        }
      }
    });
  }
}