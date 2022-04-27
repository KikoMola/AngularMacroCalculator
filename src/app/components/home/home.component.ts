import { Component, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  gramosProtes: number = 0;
  gramosCarbos: number = 0;
  gramosGrasas: number = 0;

  public doughnutChartLabels: string[] = [ 'Proteína', 'Carbohidratos', 'Grasa' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ this.gramosProtes, this.gramosCarbos, this.gramosGrasas ] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  addMeal(gramosTotales: HTMLInputElement, gramosProteina: HTMLInputElement, gramosCarbohidratos: HTMLInputElement, gramosGrasa: HTMLInputElement) {
    this.gramosProtes = gramosProteina.valueAsNumber;
    this.gramosCarbos = gramosCarbohidratos.valueAsNumber;
    this.gramosGrasas = gramosGrasa.valueAsNumber;
    gramosTotales.value = ''
    gramosProteina.value = ''
    gramosCarbohidratos.value = ''
    gramosGrasa.value = ''
    gramosTotales.focus()  
    this.chart?.chart?.update();    
    return false;
  }

}
