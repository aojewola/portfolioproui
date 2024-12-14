import { Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { DashboardComponent } from './dashboards/dashboard/dashboard.component';
import { StockListComponent } from './dashboards/stock-list/stock-list.component';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PorfolioSummaryComponent } from './dashboards/porfolio-summary/porfolio-summary.component';
import { StockFormComponent } from './dashboards/stock-form/stock-form.component';
import { RouteGuardService } from './services/router-guard.service';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]}, 
    { path: 'dashboard/:id', component: DashboardComponent, canActivate:[RouteGuardService]}, //route to the user's account dashboard
    { path: 'stocks', component: StockListComponent, canActivate:[RouteGuardService] }, // route to display list of stocks in the portfolio
    { path: 'add-stock', component: StockFormComponent, canActivate:[RouteGuardService] }, // route for adding new stock to the portfolio
    { path: 'summary', component: PorfolioSummaryComponent, canActivate:[RouteGuardService] }, // to display the total value of the portfolio


    { path: '**', component: ErrorComponent } // error handling route
];
