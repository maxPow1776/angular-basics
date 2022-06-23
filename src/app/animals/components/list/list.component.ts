import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { GetAnimals, GetAnimalsWithoutCats } from '../../store/actions/animal.actions'
import { selectAnimalList } from '../../store/selectors/animal.selector'
import { IAppState } from '../../store/state/app.state'
import { AnimalService } from '../../services/animal.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  providers: [AnimalService]
})
export class ListComponent implements OnInit {
  animals$ = this._store.pipe(select(selectAnimalList))
  withCats: boolean = true

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetAnimals())
  }

  filterCats = () => {
    !this.withCats ? this._store.dispatch(new GetAnimals()) : this._store.dispatch(new GetAnimalsWithoutCats()) 
    this.withCats = !this.withCats
  }
}
