import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  gProtein: number = 0;
  gCarbs: number = 0;
  gFat: number = 0;

  public doughnutChartLabels: string[] = [ 'Proteína', 'Carbohidratos', 'Grasa' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ this.gProtein, this.gCarbs, this.gFat ] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  addMeal(totalGrams: HTMLInputElement, proteinGrams: HTMLInputElement, fatGrams: HTMLInputElement, carbGrams: HTMLInputElement) {
    this.doughnutChartData.datasets[0].data[0] = parseInt(proteinGrams.value);
    this.doughnutChartData.datasets[0].data[1] = parseInt(carbGrams.value);
    this.doughnutChartData.datasets[0].data[2] = parseInt(fatGrams.value);
    this.chart?.chart?.update();
    totalGrams.value = ''
    proteinGrams.value = ''
    fatGrams.value = ''
    carbGrams.value = ''
    totalGrams.focus()
        
    return false;
  }

}
