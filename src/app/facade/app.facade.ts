import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AppApiService } from "../components/services/app.service";
import { ToastMessageComponent } from "../shared/components/toast-message/toast-message.component";

@Injectable()
export class AppFacade  {
    
  constructor(private appApi: AppApiService,private _snackBar: MatSnackBar) {
  }
  getlocation(IPaddress:any){    
    return this.appApi.getlocationAPI(IPaddress).then(response => {
        if (response) {   
                return response;
        }
    },error=>{
        this.ShowToastMessage(error?.error?.error?.title, "danger");
    });
  }
  fetchexchangedata(){    
    return this.appApi.fetchexchangedataAPI().then(response => {
        if (response) {   
                return response;
        }
    },error=>{
        this.ShowToastMessage(error?.error?.error?.title, "danger");
    });
  }
  getexchange(From,To){        
    return this.appApi.getexchangeAPI(From,To).then(response => {
        if (response) {   
                return response;
        }
    },error=>{
        this.ShowToastMessage(error?.error?.error?.title, "danger");
    });
  }
  /**
   * Method to show show toaster message in the application
   * @param  {string} Title Title of the toaster
   * @param  {string} status status of the toaster message to handle the class and timelimit
   */
   ShowToastMessage(Title: string, status: string) {
    this._snackBar.openFromComponent(ToastMessageComponent,
      {
        duration: status == 'info' ? 300000 : 3000,
        panelClass: [status, 'BottomNotification-Snackbar'],
        horizontalPosition:  'center' ,
        verticalPosition: 'bottom',
        data: {
          title: Title,
          status: status
        }
      });
  }

}