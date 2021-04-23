import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { ChatComponent } from './chat.component';
import { RouterModule, Routes } from '@angular/router';
import { SideComponent } from './side/side.component';
import { WindowComponent } from './window/window.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent
  }
];

@NgModule({
  declarations: [
    ChatComponent,
    SideComponent,
    WindowComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatIconModule
  ]
})
export class ChatModule { }
