import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './pages/main/main.component';
import { HistoryPageComponent } from './pages/history/history.component';
import { _404PageComponent } from './pages/404/404.component';
import { NewsPageComponent } from './pages/news/news.component';
import { ConceptPageComponent } from './pages/concept/concept.component';
import { HamburgerToggleDirective } from './core/directive/hamburgerToggle.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { defaultSimpleModalOptions, SimpleModalModule } from 'ngx-simple-modal';
import { HistoryPopupComponent } from './components/historyPopup/historyPopup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    HistoryPageComponent,
    NewsPageComponent,
    ConceptPageComponent,
    _404PageComponent,
    HamburgerToggleDirective,
    HistoryPopupComponent,
  ],
  imports: [
    SimpleModalModule.forRoot(
      { container: 'modal-container' },
      {
        ...defaultSimpleModalOptions,
        ...{
          closeOnEscape: true,
          closeOnClickOutside: true,
          // wrapperDefaultClasses: 'o-modal o-modal--fade',
          // wrapperClass: 'o-modal--fade-in',
          animationDuration: 300,
          autoFocus: true,
        },
      }
    ),
    GalleryModule,
    LightboxModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
      anchorScrolling: 'enabled',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HamburgerToggleDirective],
})
export class AppModule {}
