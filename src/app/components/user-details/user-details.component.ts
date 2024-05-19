import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  username!:string;
  userDetail:any;
  userRepos:any;
  userLang:any;
  itemsPerPage:any;


  imgurl! : string;
  name !: string;
  bio !: string;
  followers! : number;
  company! : string;
  location! : string;
  twitter!:string;
  fullname!:string;
  loader=true;

  constructor(private active:ActivatedRoute,private gitupservice:ApiService,private route:Router){}

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.active.params.subscribe(params=>{
    this.username=params['id'];
    console.log("params =",this.username);
    
  })
  this.gitupservice.getUser(this.username).subscribe({
    complete:()=>{console.log("successsful done");
    this.loader=false;
    },
    error:()=>{

      alert("you have a worng username!");
      this.route.navigate(['search']);
    },
    next:(data :any=[])=>{
      this.userDetail=data;
      console.log(this.userDetail);
      this.bio = this.userDetail.bio;
      this.company = this.userDetail.company;
      this.followers = this.userDetail.followers;
      this.imgurl = this.userDetail.avatar_url;
      this.location = this.userDetail.location;
      this.name = this.userDetail.name;
      this.twitter=this.userDetail.twitter_username;

      
 
    }
  })
  this.gitupservice.getRepo(this.username).subscribe({
    complete:()=>{console.log("successsful done repo");
    },
    error:()=>{

      // alert("you have a worng username!");
      this.route.navigate(['search']);
    },
    next:(data :any=[])=>{

       this.userRepos=data;
       console.log(this.userRepos);
       this.fullname=this.userRepos[0].full_name;
       console.log(this.fullname);
       
      
 
    }
  })
  
  

  

 }

//  psize=5;

 currentPage=1
}
