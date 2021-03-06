import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule}  from '@angular/common';
import {HttpModule} from '@angular/http';
import {UserService} from './services/user.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
    ],
    providers: [
        UserService
    ],
    declarations: [],
    exports: [
        CommonModule,
        HttpModule,
        FormsModule,
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
