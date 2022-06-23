import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { Subscription } from 'rxjs'
import { GetAnimal, UpdateAnimal } from '../../store/actions/animal.actions'
import { selectSelectedAnimal } from '../../store/selectors/animal.selector'
import { IAppState } from '../../store/state/app.state'
import { IAnimal } from '../animal/animal'

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.less']
})
export class EditPageComponent implements OnInit, OnDestroy {
  animal$ = this._store.pipe(select(selectSelectedAnimal))
  form!: FormGroup
  private subscriptions: Subscription[] = []

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private _store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this._store.dispatch(new GetAnimal(this._route.snapshot.params['id']))
    this.subscriptions.push(
      this.animal$.subscribe((animal: IAnimal | null) => {
        if (animal) {
          this.form = new FormGroup({
            type: new FormControl(animal.type, [Validators.required, Validators.minLength(3)]),
            name: new FormControl(animal.name, [Validators.required, Validators.maxLength(30)]),
            age: new FormControl(animal.age, Validators.pattern('[0-9]*')),
            city: new FormControl(animal.city),
            price: new FormControl(animal.price, Validators.pattern('^[0-9]*[.,]?[0-9]+$')),
            color: new FormControl(animal.color),
            favoriteFood: new FormControl(animal.favoriteFood)
          })
        }
      })
    )
  }

  done() {
    if (this.form.valid) {
      const animal: IAnimal = { ...this.form.value, id: this._route.snapshot.params['id'] }
      if (animal.favoriteFood)
        animal.favoriteFood = animal.favoriteFood!.toString().split(', ')
      this._store.dispatch(new UpdateAnimal({id: this._route.snapshot.params['id'], animal}))
      this.form.reset()
      this.router.navigate([''])
    }
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }
}
