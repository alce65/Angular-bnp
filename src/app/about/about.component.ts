import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'bnp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }

  getAll() {
    this.userService.readAll().subscribe(
      data => console.log(data)
    );
  }

  add() {
      this.userService.create( {
        id: null, user: 'Luis', correo: ''
      }).subscribe(
        data => console.log(data)
      );
    }

    update() {
      this.userService.update(2, {
        id: 2, user: 'Luis', correo: 'luis@sample.com'
      }).subscribe(
        data => console.log(data)
      );
    }
 
    delete() {
      this.userService.delete(1).subscribe(
        data => console.log(data)
      );
    }

}
