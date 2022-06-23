import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngrx/store'
import { AddAnimal } from '../../store/actions/animal.actions'
import { IAppState } from '../../store/state/app.state'
import { IAnimal } from '../animal/animal'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit{
  form!: FormGroup

  constructor(
    private router: Router,
    private _store: Store<IAppState>
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      type: new FormControl('', [Validators.required, Validators.minLength(3)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      age: new FormControl('', Validators.pattern('[0-9]*')),
      city: new FormControl(''),
      price: new FormControl('', Validators.pattern('^[0-9]*[.,]?[0-9]+$')),
      color: new FormControl(''),
      favoriteFood: new FormControl('')
    })
  }

  send() {
    if (this.form.valid) {
      const animal: IAnimal = { ...this.form.value }
      if (animal.favoriteFood)
        animal.favoriteFood = animal.favoriteFood!.toString().split(', ')
      this._store.dispatch(new AddAnimal(animal))
      this.form.reset()
      this.router.navigate([''])
    }
  }
}
