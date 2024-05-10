import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { Sayfa1Component } from './pages/sayfa1/sayfa1.component';

export const routes: Routes = [
    { path: "anasayfa", component: HomePageComponent },
    {path:"sayfa1",component: Sayfa1Component}
];
