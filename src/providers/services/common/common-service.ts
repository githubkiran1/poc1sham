import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class CommonServiceProvider {

  
  constructor(public httpClient: HttpClient, public http: Http) {
    //console.log('Hello CommonServiceProvider Provider');
  }

  fetchRespFromLocalJson(fileLoc) {
    console.log('start fetchRespFromLocalJson service');
      return new Promise(resolve => {
          this.http.get(fileLoc).subscribe(response => {
              var data = response.json();
              resolve(data.contents);
          });
      });
  }

  fetchDummyUserInfo() {
    var fileLoc : string = "assets/json/toldyauser.json";

    return this.fetchRespFromLocalJson(fileLoc);    
  }

  fetchAllCategories(){
	 var fileLoc : string = "assets/json/categories.json";
   
    return this.fetchRespFromLocalJson(fileLoc);  	
  }

  loadHomePageContents(userinfo : any){
    var fileLoc : string = "assets/json/homepagecontents.json";

    return this.fetchRespFromLocalJson(fileLoc);  
  }

  fetchAllLoginTypes(){
   var fileLoc : string = "assets/json/logintypes.json";
   
    return this.fetchRespFromLocalJson(fileLoc);  	
 	
  }

  fetchSubcategories(categoryCode){
  	
  }

  loadMyPredictionList(userinfo : any){
    var fileLoc : string = "assets/json/mylistinfo.json";

    return this.fetchRespFromLocalJson(fileLoc);    
  }

  checkAndUpdateSelCategories(userData, categories, copyToProfile){
    if(userData == undefined || 
      userData.categoryinterests == undefined || 
      userData.categoryinterests.length < 1){
      return;
    }  

    var selCategories = [];

    if(copyToProfile){
      userData.categoryinterests.splice(0, userData.categoryinterests.length);

      for(let category of categories){
        if(category.checked){
          userData.categoryinterests.push(category);  
        }
      }
        
    }
    else{
      for(let category of userData.categoryinterests){
        selCategories.push(category.code);  
      }

      for(let category of categories){
        if(selCategories.indexOf(category.code) != -1){
           category.checked = true;   
        }
      }    
    }
    
    console.log("CommonServiceProvider.checkAndUpdateSelCategories");
    console.log("userData.categoryinterests");
    console.log(userData.categoryinterests);
    console.log("categories");
    console.log(categories);
  }   

  private extractData(res: Response | any) {
    let body = res.json();
    return body || {};
  }

  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }


}
