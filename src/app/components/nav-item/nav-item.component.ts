import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() path = ''
  @Input() name = ''
  @Input() icon = ''
  @Input() notifications = 0

  route(path: string) {
    this.router.navigate([path])
  }

  constructor(
    private router: Router
  ) {}
}
