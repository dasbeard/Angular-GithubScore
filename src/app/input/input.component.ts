import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  userExists: boolean = null;
  score: number = 0;
  userName: string;
  githubName: string = null;

  constructor(private _dataservice: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.userName = form.value.username;
    console.log(this.userName);


    this._dataservice.retrieveGithubUser(this.userName)
      .subscribe(
        user => {
          this.userExists = true;
          this.score = user.public_repos = user.followers;
          this.githubName = user.name;
          console.log(user);

          this.userName = null;
        },
        (response: Response) => this.userExists = false
      );
  }

}
