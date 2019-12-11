import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';
import { Observable } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Observable<Product[]>
  users: Observable<User[]>

  constructor(private UserService: UserService) { }

  ngOnInit() {
    this.users = this.UserService.getUsers();
  }

  logItem(item: User) {
    console.log(item);
  }
}