import { Component } from '@angular/core';
import { Hero } from './heroes/hero';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { HeroService } from './heroes/hero.service';
@Component({
  selector: 'my-app',
  templateUrl:'app/app.html',
  // styleUrls: ['style.css'],
  directives: [HeroDetailComponent],
  providers:[HeroService],
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; };
  constructor(private heroService: HeroService) { }
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
}
