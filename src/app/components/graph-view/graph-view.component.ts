import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { interval, Subscription } from 'rxjs';
import { AppFacade } from 'src/app/facade/app.facade';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  tooltip:ApexTooltip;
};

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent implements OnInit,OnDestroy {
  chartOptions: Partial<ChartOptions>;
  Exchangerate:any=null;
  From:any=null;
  To:any=null;
  ConvertedData=null;
  intervalPeriod: number=15;
  minutes: number;
  mySubscription: Subscription;
  progresstype:ProgressBarMode='indeterminate';
  Progressvalue=0;
  constructor(private AppFacade:AppFacade) {     
    this.chartOptions = {
      series: [
      ],
      chart: {
        height: 350,
        type: "line"
      },
      title: {
        text: "Live exchange rates"
      },
      xaxis: {
        categories: []
      },
      tooltip: {
        enabled: true,
        shared: true, 
        x: {
            show: false,
            formatter: undefined,
        },
        y: {},
      }
    }; 
    this.mySubscription= interval(5000).subscribe((x =>{ 
      this.fetchexchangedata();
    }));
  }
  ngOnInit(): void {
  }
  fetchexchangedata(){
    this.AppFacade.fetchexchangedata().then(response=>{
      if(response){
        this.chartOptions.series=[];
        if(this.progresstype=='indeterminate')
        {
          this.progresstype='determinate';
          this.Progressvalue=100;
        }
        let Modifyseries=!this.Exchangerate?true:false;
        if(!this.Exchangerate)
        this.Exchangerate=response?.rates;
        this.Loadgraph(response,Modifyseries);
      }
    })
  }
  objKeys(list:any){
    return Object.keys(list);
  }
  getexchange(){
    this.ConvertedData=null;
    this.AppFacade.getexchange(this.toUppercase(this.From),this.toUppercase(this.To)).then(response=>{
      this.ConvertedData=response;
    })
  }
  Loadgraph(response,Modifyseries=true){    
    let keynames=Object.keys(response?.rates)
    let Seriesdata=[];
    keynames?.forEach((datas:any)=>{
      let values=response?.rates[datas]?.value ? response?.rates[datas]?.value:response?.rates[datas]
      Seriesdata.push(values)
    })
    if(Modifyseries){
      this.chartOptions.xaxis.categories=keynames;
      this.chartOptions.series=[{
        name: "Live exchange rates",
        data: Seriesdata
      }];  
    }else{
      this.chartOptions.series=[{
        name: "Live exchange rates",
        data: Seriesdata
      }];  
    }
    this.chartOptions.tooltip.y= {
          formatter: (seriesName: any, opts: any)=>{
            let keyname=keynames[opts?.dataPointIndex];
            let defdata=response?.rates[keyname];
            return defdata? defdata?.name+ ' : '+ defdata?.unit+' '+defdata?.value :seriesName;
          },
          title: {
            formatter: (seriesName: any) => {
              return ''
            }
          }, 
    }
  }
  toUppercase(data:string){
    return data?.toUpperCase();
  }
  clearconvert(){
    this.ConvertedData=null;
  }
  ngOnDestroy(){
    this.mySubscription?.unsubscribe();
  }
}
