import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navGroup, paths } from 'src/app/constants/route';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  menuItems = paths.filter(o => !o.group)
  otherMenuItems = paths.filter(o => o.group == navGroup.OTHER_INFORMATION)
  settingMenuItems = paths.filter(o => o.group == navGroup.SETTINGS)

  constructor(
    private router: ActivatedRoute,
    private r: Router
  ) {
    this.r.events.subscribe((segs) => { console.log(segs) });
  }
}
