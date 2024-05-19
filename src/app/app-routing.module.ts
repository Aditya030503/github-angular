import { Component, NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
import { SearchPageComponent } from "./components/search-page/search-page.component";



const routes:Routes=[
    {path:'navbar',component:NavbarComponent},
    {path:'user/:id',component:UserDetailsComponent},
    {path:'search',component:SearchPageComponent},
   
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}