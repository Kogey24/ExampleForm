import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers =['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr.18', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  heroForm: any;
  onSubmit() {this.submitted = true};

  newHero() {
    this.model = new Hero (42,'','');
  }
  
}
