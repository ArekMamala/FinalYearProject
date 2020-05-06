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
        },
        {
            path:'workouts',
            loadChildren:() => import('../pages/workouts/workouts.module').then(
                m => m.WorkoutsPageModule)
        },
        {
            path:'meals',
            loadChildren:() => import('../meals/meals.module').then(
                m => m.MealsPageModule)
        },
        {
            path:'day1',
            loadChildren:() => import('../day1/day1.module').then(
                m => m.Day1PageModule)
        },
        {
            path:'day2',
            loadChildren:() => import('../day2/day2.module').then(
                m => m.Day2PageModule)
        },
        {
            path:'day3',
            loadChildren:() => import('../day3/day3.module').then(
                m => m.Day3PageModule)
        },
        {
            path:'day4',
            loadChildren:() => import('../day4/day4.module').then(
                m => m.Day4PageModule)
        },
        {
            path:'day5',
            loadChildren:() => import('../day5/day5.module').then(
                m => m.Day5PageModule)
        },
        {
            path:'day6',
            loadChildren:() => import('../day6/day6.module').then(
                m => m.Day6PageModule)
        },
        {
            path:'day7',
            loadChildren:() => import('../day7/day7.module').then(
                m => m.Day7PageModule)
        },
        {
            path:'mealday1',
            loadChildren:() => import('../mealday1/mealday1.module').then(
                m => m.Mealday1PageModule)
        },
        {
            path:'mealday2',
            loadChildren:() => import('../mealday2/mealday2.module').then(
                m => m.Mealday2PageModule)
        },
        {
            path:'mealday3',
            loadChildren:() => import('../mealday3/mealday3.module').then(
                m => m.Mealday3PageModule)
        },
        {
            path:'mealday4',
            loadChildren:() => import('../mealday4/mealday4.module').then(
                m => m.Mealday4PageModule)
        },
        {
            path:'mealday5',
            loadChildren:() => import('../mealday5/mealday5.module').then(
                m => m.Mealday5PageModule)
        },
        {
            path:'mealday6',
            loadChildren:() => import('../mealday6/mealday6.module').then(
                m => m.Mealday6PageModule)
        },
        {
            path:'mealday7',
            loadChildren:() => import('../mealday7/mealday7.module').then(
                m => m.Mealday7PageModule)
        }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRouter{}