import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNgrxComponent } from './auth-ngrx.component';
import { AuthNgrxEffects } from './auth-ngrx.effects';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './auth.service';
import { AboutRoutingModule } from './auth-ngrx-routing.module';

let effects = [
    AuthNgrxEffects,
];

@NgModule({
    imports: [
        CommonModule,
        AboutRoutingModule,
        /**
         * EffectsModule.run() sets up the effects class to be initialized
         * immediately when the application starts.
         *
         * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
         */
        effects.map(effect => EffectsModule.run(effect)),
    ],
    providers: [AuthService],
    declarations: [AuthNgrxComponent],
    exports: [AuthNgrxComponent],
})

export class AuthNgrxModule { }
