import { Component, OnInit } from '@angular/core';
import { AppFacade } from 'src/app/facade/app.facade';

@Component({
  selector: 'app-location-fetch',
  templateUrl: './location-fetch.component.html',
  styleUrls: ['./location-fetch.component.scss']
})
export class LocationFetchComponent implements OnInit {
  IPaddress:string|null=null;
  displayedColumns: string[] = ['No', 'Title', 'Value'];
  dataSource:any=[];
  constructor(private AppFacade:AppFacade) { }

  ngOnInit(): void {
  }
  getlocation(){
    this.AppFacade.getlocation(this.IPaddress).then(response=>{
      let keynames=this.objKeys(response);
      let datalist=[];
      keynames?.forEach((datas:any,index:number)=>{
        datalist.push({no:index+1,title:datas,value:response[datas]});
      })
      this.dataSource=datalist;
    })
  }
  objKeys(list:any){
    return Object.keys(list);
  }
}
