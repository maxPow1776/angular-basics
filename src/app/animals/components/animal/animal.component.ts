import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { DeleteAnimal } from '../../store/actions/animal.actions'
import { IAppState } from '../../store/state/app.state'
import { IAnimal } from './animal'

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.less']
})
export class AnimalComponent {
  @Input() animal!: IAnimal
  isOpen: boolean = true

  constructor(private _store: Store<IAppState>) {}

  delete() {
    this._store.dispatch(new DeleteAnimal(this.animal._id))
  }
}
