import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from 'src/components/about-us/about-us.component';
import { HeroComponent } from 'src/components/hero/hero.component';
import { BrandingComponent } from 'src/components/branding/branding.component';


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        HeroComponent,
        AboutUsComponent,
        BrandingComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [],
})
export class HomeModule { }
