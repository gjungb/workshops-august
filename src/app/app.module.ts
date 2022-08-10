import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookNewComponent } from './book-new/book-new.component';
import { IsbnPipe } from './shared/isbn.pipe';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookListComponent,
    IsbnPipe,
    BookEditComponent,
    BookNewComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: 'BASE_URL',
      useValue: 'http://localhost:4730'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
