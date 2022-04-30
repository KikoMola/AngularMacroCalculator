import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public doughnutChartLabels: string[] = [
    'Calorías',
    'Proteína',
    'Carbohidratos',
    'Grasa',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: ['#7DFF93', '#36A2EB', '#FFCE56', '#FF6384'],
        hoverBackgroundColor: '#E6E6E6',
        hoverBorderColor: '#E6E6E6',
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  addMeal(
    totalGrams: HTMLInputElement,
    totalCals: HTMLInputElement,
    proteinGrams: HTMLInputElement,
    fatGrams: HTMLInputElement,
    carbGrams: HTMLInputElement
  ) {
    this.doughnutChartData.datasets[0].data[0] =
      parseInt(totalCals.value) * (parseInt(totalGrams.value) / 100);
    this.doughnutChartData.datasets[0].data[1] =
      parseInt(proteinGrams.value) * (parseInt(totalGrams.value) / 100);
    this.doughnutChartData.datasets[0].data[2] =
      parseInt(carbGrams.value) * (parseInt(totalGrams.value) / 100);
    this.doughnutChartData.datasets[0].data[3] =
      parseInt(fatGrams.value) * (parseInt(totalGrams.value) / 100);
    this.chart?.chart?.update();
    totalGrams.value = '';
    totalCals.value = '';
    proteinGrams.value = '';
    fatGrams.value = '';
    carbGrams.value = '';
    return false;
  }
}
