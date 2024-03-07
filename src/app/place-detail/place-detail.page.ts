import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  isBookModel = false;
  isEditModel = false;

  setOpen(isOpen: boolean) {
    this.isBookModel = isOpen;
  }
}
