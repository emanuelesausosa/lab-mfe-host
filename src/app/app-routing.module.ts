import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LayoutComponent} from "./layout/layout.component";
import {CallbackComponent} from "./core/callback/callback.component";
import { LabMfeOneModule } from "./lab-mfe-one/lab-mfe-one.module"

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "coco",
        redirectTo: "/home",
        pathMatch: "full"
      },
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "mfe-1",
        loadChildren: () => LabMfeOneModule
      }, {
        path: "cb",
        component: CallbackComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
