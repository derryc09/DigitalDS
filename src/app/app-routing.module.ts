import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./screens/home-page/home-page.component";
import { PDPComponent } from "./screens/pdp/pdp.component";
import { GuidelinesComponent } from './screens/guidelines/guidelines.component';
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "pdp", component: PDPComponent },
  { path: "home", component: HomePageComponent },
  { path: "guidelines", component: GuidelinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
