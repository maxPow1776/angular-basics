import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditPageComponent } from "./animals/components/edit-page/edit-page.component";
import { FormComponent } from "./animals/components/form/form.component";
import { ListComponent } from "./animals/components/list/list.component";
import { NotificationComponent } from "./animals/components/notification/notification.component";

const routes: Routes = [
    {path: '', component: ListComponent, children: [
        {path: 'create', component: FormComponent},
        {path: 'error', component: NotificationComponent}
    ]},
    {path: 'pet/:id', component: EditPageComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}