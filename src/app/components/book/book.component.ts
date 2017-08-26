import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FirebaseService } from "../../services/firebase.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  id: any;
  title;
  author;
  dateadded;
  dateread;
  price;
  rate;
  description;
  imageUrl;

  constructor(private firebaseService: FirebaseService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    // get the book ID
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.title = book.title;
      this.author = book.author;
      this.dateadded = book.dateAdded;
      this.dateread = book.dateRead;
      this.price=book.price;
      this.rate = book.price;
      this.rate = book.price;
      this.description = book.description;
      this.imageUrl = book.imageUrl;
    });
  }
}
