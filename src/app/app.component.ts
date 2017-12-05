import { Component } from '@angular/core';
import { MealComponent } from './meals';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	menulist: boolean = false;
	warning: string ="";
   meals : MealComponent[] =[];
   editm: string="";
   editD: string="";
   editC: number;

  

 		AddnewMeal(MealName: string, desc: string, calories:number){
 			
 			if(MealName!="" && desc!="" && calories>0){
 				this.menulist= true;
 				this.meals.push(new MealComponent(MealName, desc, calories));
 			}else{
 				this.warning="JEEZZ!! FILL IN ALL THE FORM INPUTS";
 			}
     }
     
     delete(position: number ){
       console.log(position);
       this.meals.splice(position,1);
     }

     editmeal(index: number){
       
       this.editm=this.meals[index].name;
       this.editD=this.meals[index].description;
       this.editC=this.meals[index].calorie;
       console.log(this.meals[index]);
     }

  }






































  // AddnewMeal(){

  // 	if(typeof this.newMealname =="undefined" 
  // 		|| typeof this.newDetails =="undefined" || typeof this.newCalories =="undefined."){
  // 		this.warning="JEEZZ!! FILL IN ALL THE FORM INPUTS";
  // 	}else{
  // 		this.menulist = true;
  // 		   this.newMealCollection={
		// 	   	  	name:this.newMealname,
		// 	  		description:this.newDetails,
		// 	  		calories:this.newCalories
		// 	   };
  // 		this.meals.push(this.newMealCollection);

  // 	this.inputMealValue=null;
  // 	this.inputDetailsValue=null;
  // 	this.inputCaloriesValue=null;
  // 	this.newMealCollection={};
  // 	}

