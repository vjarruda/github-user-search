import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../services/github.service';
import { User } from '../../models/user.model';
import { Repo } from '../../models/repo.model';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUsers, faHeart, faBuilding, faLocationDot, faEnvelope, faLink, faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
 username = '';

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private github = inject(GithubService);
  faUsers = faUsers;
  faHeart = faHeart;
  faBuilding = faBuilding;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faLink = faLink;
  faTwitter = faTwitter;
  faArrowLeft = faArrowLeft;
  faStar = faStar;

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
          this.repos = repos
            .sort((a, b) => b.stargazers_count - a.stargazers_count)

        },
      });
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }

  getRelativeTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const rtf = new Intl.RelativeTimeFormat('pt-BR', { numeric: 'auto' });

    if (days > 0) return rtf.format(-days, 'day');
    if (hours > 0) return rtf.format(-hours, 'hour');
    if (minutes > 0) return rtf.format(-minutes, 'minute');
    return rtf.format(-seconds, 'second');
  }

  openProfile(url: string) {
  window.open(url, '_blank');
}
}
