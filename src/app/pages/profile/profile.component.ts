import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';
import { User } from '../../models/user.model';
import { Repo } from '../../models/repo.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent{
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private github = inject(GithubService);

  user: User | null = null;
  repos: Repo[] = [];

  constructor() {
    const username = this.route.snapshot.paramMap.get('username');
    

    if (username) {
      this.github.getUser(username).subscribe({
        next: (user) => (this.user = user),
        error: () => {
          alert('Usuário não encontrado');
          this.router.navigate(['/']);
        },
      });

      this.github.getRepos(username).subscribe({
        next: (repos) => {
          this.repos = repos.sort(
            (a, b) => b.stargazers_count - a.stargazers_count
          );
        },
      });
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
