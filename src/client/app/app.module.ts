import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { AuthNgrxModule } from './auth-ngrx/auth-ngrx.module';
import { SharedModule } from './shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './shared/store';

const NGRX_IMPORTS = [
  /**
   * StoreModule.provideStore is imported once in the root module, accepting a reducer
   * function or object map of reducer functions. If passed an object of
   * reducers, combineReducers will be run creating your application
   * meta-reducer. This returns all providers for an @ngrx/store
   * based application.
   */
  StoreModule.provideStore(reducer),
  /**
  * @ngrx/router-store keeps router state up-to-date in the store and uses
  * the store as the single source of truth for the router's state.
  */
  RouterStoreModule.connectRouter(),
  /**
   * Store devtools instrument the store retaining past versions of state
   * and recalculating new states. This enables powerful time-travel
   * debugging.
   * 
   * To use the debugger, install the Redux Devtools extension for either
   * Chrome or Firefox
   * 
   * See: https://github.com/zalmoxisus/redux-devtools-extension
   */
  StoreDevtoolsModule.instrumentOnlyWithExtension(),
  /**
   * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
   * service available.
   */
  //DBModule.provideDB(schema),
];

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, HomeModule, AuthNgrxModule, SharedModule.forRoot()
    , ...NGRX_IMPORTS // ngrx
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
