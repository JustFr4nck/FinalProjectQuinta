import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-my-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, CommonModule],
  templateUrl: './my-navbar.html',
})
export class MyNavbar {
  isMenuOpen = false;
}
