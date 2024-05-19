import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  username!:string
  userRepos:any
   userLang:any;
   value:any=[];
 
  // @Input( {alias:"userlange"}) languge:any;
  @Input({ alias:"userlannge"}) languge:any;
   constructor(private active:ActivatedRoute,private gitupservice:ApiService,private route:Router){}
 
   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   //  this.active.params.subscribe(params=>{
   //    this.username=params['id'];
   //    console.log("params =",this.username);
      
   //  })
 //  console.log("languge==",this.languge.split("/").at(-2).replaceAll(" ","-"));
 //  console.log("languge==",this.languge.split("/").at(-1).replaceAll(" ","-"));
  
  this.username=this.languge.split("/").at(-1).replaceAll(" ","-");
 // console.log("languge===",this.languge);
 
 
   this.gitupservice.getLang(this.languge.split("/").at(-2).replaceAll(" ","-"),this.languge.split("/").at(-1).replaceAll(" ","-")).subscribe({
     complete:()=>{console.log("successsful done lang");
     },
     error:()=>{
 
       alert("you have a worng repo lang!");
       // this.route.navigate(['search']);
     },
     next:(data :any=[])=>{
 
        this.userLang=data;
        console.log(this.userLang);
       //  this.value.push(this.userLang);
       //  console.log("value",this.value);
        Object.keys(this.userLang).forEach((i)=>{
         // console.log(i);
         this.value.push(i);
         
 
         
        })
        console.log("value",this.value);
        
      
        
       
  
     }
   })
 }
 
 
}
