import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BookComponent } from './books/book/book.component';
import { BooksModule } from "./books/books.module";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, BooksModule],
    bootstrap: [AppComponent] //to mention the 1st ever component to load
})
export class AppModule{}