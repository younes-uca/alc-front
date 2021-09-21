import { Component, OnInit } from '@angular/core';
import {MenuService} from '../shared/slide-bar/app.menu.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent{
  overlayMenuActive: boolean;


  staticMenuDesktopInactive: boolean;

  staticMenuMobileActive: boolean;

  menuClick: boolean;

  userMenuClick: boolean;

  notificationMenuClick: boolean;
  notificationMenuClick2: boolean;

  rightMenuClick: boolean;

  menuHoverActive: boolean;

  topbarUserMenuActive: boolean;

  topbarNotificationMenuActive: boolean;
  topbarNotificationMenuActive2: boolean;

  rightPanelMenuActive: boolean;

  configActive: boolean;

  configClick: boolean;

  profileClick: boolean;

  inlineUserMenuActive = false;

  constructor(private menuService: MenuService, public app: AppComponent) {
  }

  onLayoutClick() {
    if (!this.userMenuClick) {
      this.topbarUserMenuActive = false;
    }

    if (!this.notificationMenuClick) {
      this.topbarNotificationMenuActive = false;
    }
    if (!this.notificationMenuClick2) {
      this.topbarNotificationMenuActive2 = false;
    }
    if (!this.rightMenuClick) {
      this.rightPanelMenuActive = false;
    }

    if (!this.profileClick && this.isSlim()) {
      this.inlineUserMenuActive = false;
    }

    if (!this.menuClick) {
      if (this.isHorizontal() || this.isSlim()) {
        this.menuService.reset();
      }

      if (this.overlayMenuActive || this.staticMenuMobileActive) {
        this.hideOverlayMenu();
      }

      this.menuHoverActive = false;
      this.unblockBodyScroll();
    }

    if (this.configActive && !this.configClick) {
      this.configActive = false;
    }

    this.configClick = false;
    this.userMenuClick = false;
    this.rightMenuClick = false;
    this.notificationMenuClick = false;
    this.notificationMenuClick2 = false;
    this.menuClick = false;
    this.profileClick = false;
  }



  isHorizontal() {
    return this.app.layoutMode === 'horizontal';
  }

  isSlim() {
    return this.app.layoutMode === 'slim';
  }



  hideOverlayMenu() {
    this.overlayMenuActive = false;
    this.staticMenuMobileActive = false;
  }



  unblockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');
    } else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
          'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
}


