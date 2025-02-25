import { Component } from '@angular/core';
import { Footer2Component } from "../footer2/footer2.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-adm',
  standalone: true,
  imports: [Footer2Component, RouterLink],
  templateUrl: './profile-adm.component.html',
  styleUrl: './profile-adm.component.css'
})
export class ProfileAdmComponent {

}
