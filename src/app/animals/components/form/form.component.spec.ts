import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { FormComponent } from './form.component'

class RouterStub {
    navigate(path: string[]) { }
}

describe('FormComponent', () => {
    let component: FormComponent
    let fixture: ComponentFixture<FormComponent>

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FormComponent],
            providers: [
                { provide: Router, useClass: RouterStub },
                { provide: Store, useValue: { pipe: () => {} } }
            ],
        })
        fixture = TestBed.createComponent(FormComponent)
        component = fixture.componentInstance
    })

    it('should be created', () => {
        expect(component).toBeDefined()
    })

    it('should create form with 7 controls', () => {
        component.ngOnInit()
        expect(component.form.contains('type')).toBeTruthy()
        expect(component.form.contains('name')).toBeTruthy()
        expect(component.form.contains('age')).toBeTruthy()
        expect(component.form.contains('city')).toBeTruthy()
        expect(component.form.contains('price')).toBeTruthy()
        expect(component.form.contains('color')).toBeTruthy()
        expect(component.form.contains('favoriteFood')).toBeTruthy()
    })

    it('should mark TYPE as invalid if value is EMPTY', () => {
        component.ngOnInit()
        const control = component.form.get('type')
        control?.setValue('')
        expect(control?.valid).toBeFalsy()
    })

    it('should mark TYPE as invalid if value LENGTH LESS than 3', () => {
        component.ngOnInit()
        const control = component.form.get('type')
        control?.setValue('')
        expect(control?.valid).toBeFalsy()
    })

    it('should mark NAME as invalid if value is EMPTY', () => {
        component.ngOnInit()
        const control = component.form.get('name')
        control?.setValue('')
        expect(control?.valid).toBeFalsy()
    })

    it('should mark NAME as invalid if value LENGTH GREATER than 30', () => {
        component.ngOnInit()
        const control = component.form.get('name')
        control?.setValue('biggest name in the world biggest name in the world')
        expect(control?.valid).toBeFalsy()
    })

    it('should mark AGE as invalid if value NOT NUMBER', () => {
        component.ngOnInit()
        const control = component.form.get('age')
        control?.setValue('not number')
        expect(control?.valid).toBeFalsy()
    })

    it('should mark PRICE as invalid if value NOT NUMBER', () => {
        component.ngOnInit()
        const control = component.form.get('price')
        control?.setValue('not number')
        expect(control?.valid).toBeFalsy()
    })

    it('should activate SEND button if not empty required fields', () => {
        component.ngOnInit()
        component.form.get('type')!.setValue('Type From Tests')
        component.form.get('name')!.setValue('Name From Tests')
        const sendButton = fixture.debugElement.query(By.css('#send-button')).nativeElement
        expect(sendButton.disabled).toBeFalsy()
    })
})