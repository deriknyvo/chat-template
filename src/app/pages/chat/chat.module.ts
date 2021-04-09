import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    RouterModule.forChild(routes)
  ]
})
export class ChatModule { }
