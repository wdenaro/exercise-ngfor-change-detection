import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headingText = 'Exercise – ngFor Change Detection';
  courses = [
    { name: 'Comparative History of Organized Crime', location: 'Williams College' },
    { name: 'The Amazing World of Bubbles', location: 'Cal-Tech' },
    { name: 'The Anthropology of Computing:', location: 'MIT' },
    { name: 'Philosophy and Star Trek', location: 'Georgetown' },
    { name: 'Underwater Basket Weaving', location: 'Reed College' }
  ];

  onAdd() {
    this.courses.push({ name: 'New Course', location: 'College/University' });
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
