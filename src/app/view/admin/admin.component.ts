import {Component, Injectable, OnInit} from '@angular/core';
import {MenuService} from '../shared/slide-bar/app.menu.service';
import {PrimeNGConfig} from 'primeng/api';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent {

  overlayMenuActive: boolean;
  overlayMenuActive2: boolean;

  staticMenuDesktopInactive: boolean;

  staticMenuMobileActive: boolean;
  staticMenuMobileActive2: boolean;

  layoutMenuScroller: HTMLDivElement;

  menuClick: boolean;

  userMenuClick: boolean;

  notificationMenuClick: boolean;
  notificationMenuClick2: boolean;

  rightMenuClick: boolean;

  resetMenu: boolean;

  menuHoverActive: boolean;

  topbarUserMenuActive: boolean;
  topbarUserMenuActive2: boolean;

  topbarNotificationMenuActive: boolean;
  topbarNotificationMenuActive2: boolean;
  topbarNotificationMenuActive3: boolean;

  rightPanelMenuActive: boolean;

  configActive: boolean;

  configClick: boolean;

  profileClick: boolean;

  inlineUserMenuActive = false;

  constructor(private menuService: MenuService, private primengConfig: PrimeNGConfig, public app: AppComponent) {
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

  onMenuButtonClick(event) {
    this.menuClick = true;
    this.topbarUserMenuActive = false;
    this.topbarNotificationMenuActive = false;
    this.rightPanelMenuActive = false;

    if (this.isOverlay()) {
      this.overlayMenuActive = !this.overlayMenuActive;
    }

    if (this.isDesktop()) {
      this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
    } else {
      this.staticMenuMobileActive = !this.staticMenuMobileActive;
      if (this.staticMenuMobileActive) {
        this.blockBodyScroll();
      } else {
        this.unblockBodyScroll();
      }
    }

    event.preventDefault();
  }

  onMenuClick(event) {
    this.menuClick = true;
    this.resetMenu = false;
  }

  onTopbarUserMenuButtonClick(event) {
    this.userMenuClick = true;
    this.topbarUserMenuActive = !this.topbarUserMenuActive;
    this.topbarUserMenuActive2 = !this.topbarUserMenuActive2;

    this.hideOverlayMenu();

    event.preventDefault();
  }

  onTopbarNotificationMenuButtonClick2(event) {
    this.notificationMenuClick2 = true;
    this.topbarNotificationMenuActive2 = !this.topbarNotificationMenuActive2;

    this.hideOverlayMenu2();

    event.preventDefault();
  }

  onTopbarNotificationMenuButtonClick(event) {
    this.notificationMenuClick = true;
    this.topbarNotificationMenuActive = !this.topbarNotificationMenuActive;

    this.hideOverlayMenu();

    event.preventDefault();
  }

  onRightMenuClick(event) {
    this.rightMenuClick = true;
    this.rightPanelMenuActive = !this.rightPanelMenuActive;

    this.hideOverlayMenu();

    event.preventDefault();
  }

  onProfileClick(event) {
    this.profileClick = true;
    this.inlineUserMenuActive = !this.inlineUserMenuActive;
  }



  isHorizontal() {
    return this.app.layoutMode === 'horizontal';
  }

  isSlim() {
    return this.app.layoutMode === 'slim';
  }

  isOverlay() {
    return this.app.layoutMode === 'overlay';
  }

  isStatic() {
    return this.app.layoutMode === 'static';
  }

  isMobile() {
    return window.innerWidth < 1025;
  }

  isDesktop() {
    return window.innerWidth > 896;
  }

  isTablet() {
    const width = window.innerWidth;
    return width <= 1024 && width > 640;
  }

  hideOverlayMenu() {
    this.overlayMenuActive = false;
    this.staticMenuMobileActive = false;
  }

  hideOverlayMenu2() {
    this.overlayMenuActive2 = false;
    this.staticMenuMobileActive2 = false;
  }

  blockBodyScroll(): void {
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');
    } else {
      document.body.className += ' blocked-scroll';
    }
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


