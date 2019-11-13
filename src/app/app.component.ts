import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  items: string[] = [];
  newItem = '';

  constructor(private todoService: TodoService) {}

  async ngOnInit() {
    this.items = await this.todoService.fetchItems();
  }

  listItemSelected(itemToBeRemoved: string) {
    this.items = this.items.filter((item) => item !== itemToBeRemoved);
  }

  addItem() {
    this.items.push(this.newItem);
    this.newItem = '';
  }
}
