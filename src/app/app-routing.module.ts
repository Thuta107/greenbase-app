import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { paths } from './constants/route';

const routes: Routes = paths.map(o => ({ path: o.path, component: o.component }))

// [
//   { path: '', component: SettingsComponent },
//   { path: 'orders', component: SettingsComponent },
//   { path: 'products', component: SettingsComponent },
//   { path: 'categories', component: SettingsComponent },
//   { path: 'customers', component: SettingsComponent },
//   { path: 'reports', component: SettingsComponent },
//   { path: 'coupons', component: SettingsComponent },
//   { path: 'inbox', component: SettingsComponent },
//   { path: 'knowledge-base', component: SettingsComponent },
//   { path: 'product-updates', component: SettingsComponent },
//   { path: 'personal-settings', component: SettingsComponent },
//   { path: 'global-settings', component: SettingsComponent },
// ];

// paths.map(o => ({ path: o.path, component: o.component }))

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
