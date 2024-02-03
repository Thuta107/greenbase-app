import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  languages = [
    { key: 'english', value: 'English' }, 
    { key: 'spanish', value: 'Spanish' }, 
    { key: 'portuguese', value: 'Portuguese' }, 
    { key: 'french', value: 'French' }
  ]
  
  timezones = ['GMT +2:00', 'GMT +3:00', 'GMT +4:00', 'GMT +5:00']
}
