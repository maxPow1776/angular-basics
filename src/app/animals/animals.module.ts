import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AnimalComponent } from './components/animal/animal.component'
import { ListComponent } from './components/list/list.component'
import { InfoComponent } from './components/info/info.component'
import { FormComponent } from './components/form/form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EditPageComponent } from './components/edit-page/edit-page.component'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { NotificationComponent } from './components/notification/notification.component'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { environment } from 'src/environments/environment'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { appReducers } from './store/reducers/app.reducers'
import { AnimalEffects } from './store/effects/animal.effects'

@NgModule({
    declarations: [
        AnimalComponent,
        ListComponent,
        InfoComponent,
        FormComponent,
        EditPageComponent,
        NotificationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers),
        EffectsModule.forRoot([AnimalEffects]),
        StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    exports: [
        AnimalComponent,
        ListComponent
    ]
})
export class AnimalsModule { }