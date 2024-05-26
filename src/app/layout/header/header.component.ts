import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  heroHeight = 0;
  drawerBodyStyle = {
    background: '#bf4547',
    color: 'white',
    'list-style': 'none',
  };
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
  navigateToSection(id: string) {
    window.location.href = `${window.location.origin}${id}`;
  }
  //navigation

  /*  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Element with ID '${sectionId}' not found.`);
    }
  } */
}
