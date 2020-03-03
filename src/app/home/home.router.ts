import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    children:[
        {
            path:'profile',
            loadChildren:() => import('../pages/profile/profile.module').then(
                m => m.ProfilePageModule)
        },
        {
            path:'workout',
            loadChildren:() => import('../pages/workout/workout.module').then(
                m => m.WorkoutPageModule)
        },
        {
            path:'applicationPage',
            loadChildren:() => import('../pages/application-page/application-page.module').then(
                m => m.ApplicationPagePageModule)
        }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter{}