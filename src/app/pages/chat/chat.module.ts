import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ChatComponent } from './chat.component';
import { RouterModule, Routes } from '@angular/router';
import { SideComponent } from './side/side.component';
import { WindowComponent } from './window/window.component';
import { ListConversationsComponent } from './side/list-conversations/list-conversations.component';
import { SearchInputComponent } from './search-input/search-input.component';

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
    WindowComponent,
    ListConversationsComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ChatModule { }
