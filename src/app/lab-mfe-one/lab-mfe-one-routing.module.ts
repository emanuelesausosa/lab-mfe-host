import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LabMfeOneComponent } from "./lab-mfe-one.component";

const routes: Routes = [{
    path: "",
    component: LabMfeOneComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LabMfeOneRoutingModule {}