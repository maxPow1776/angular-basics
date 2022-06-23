import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Store } from '@ngrx/store'
import { ListComponent } from './list.component'

describe('ListComponent', () => {
    let component: ListComponent
    let fixture: ComponentFixture<ListComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ListComponent ],
            providers: [ { provide: Store, useValue: { pipe: () => {} } } ],
        })
        fixture = TestBed.createComponent(ListComponent)
        component = fixture.componentInstance
    })

    it('should be created', () => {
        expect(component).toBeDefined()
    })
})