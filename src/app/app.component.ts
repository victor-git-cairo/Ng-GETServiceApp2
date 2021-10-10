import { Component } from '@angular/core';

import { GitHubService } from './githubservice.service';
import { repos } from './repos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: string = "victor-git-cairo";
  repos: repos[] = [];

  loading: boolean = false;
  errorMessage:string = "";
  
  constructor(private gitHubService: GitHubService){}

  getRepos() {
    this.loading = true; 
    this.errorMessage = "";
    this.gitHubService.getRepos(this.user)
    .subscribe((data)=> {
      console.log("Respnse received");
      console.log(data);
      this.repos = data;
    },
    (error) => {
      console.error("Request failure");
      this.errorMessage = error;
      this.loading = false;
    },
    () => {
      console.error('Request complete');
      this.loading = false;
    })
  }
}
