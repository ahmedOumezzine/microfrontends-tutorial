import { Component, OnDestroy, signal } from '@angular/core';

export const profiles = {
  Nadia: {
    name: 'Nadia QA',
    role: 'Specialiste tests de contrats',
    tests: 18,
  },
  Omar: {
    name: 'Omar Build',
    role: 'Responsable integration continue',
    tests: 24,
  },
  Lina: {
    name: 'Lina UI',
    role: 'Specialiste tests visuels',
    tests: 15,
  },
};

export const profile = profiles.Nadia;

@Component({
  selector: 'profile-root',
  standalone: true,
  template: `
    <div class="card">
      <div class="card-header"><h2 class="h4 mb-0">Profil</h2></div>
      <div class="card-body">
        <h3 class="h5">{{ selectedProfile().name }}</h3>
        <p>{{ selectedProfile().role }}</p>
        <span class="badge text-bg-secondary">{{ selectedProfile().tests }} tests</span>
      </div>
    </div>
  `,
})
export class ProfileComponent implements OnDestroy {
  selectedProfile = signal(profile);

  private readonly selectProfile = ((event: CustomEvent<{ author: keyof typeof profiles }>) => {
    this.selectedProfile.set(profiles[event.detail.author] || profile);
  }) as EventListener;

  constructor() {
    window.addEventListener('social:post-selected', this.selectProfile);
  }

  ngOnDestroy() {
    window.removeEventListener('social:post-selected', this.selectProfile);
  }
}
