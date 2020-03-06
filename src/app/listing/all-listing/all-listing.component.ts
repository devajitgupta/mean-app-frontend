


import { Component, OnInit } from '@angular/core';
import {ListingService} from '../service/listing.service';
import {Observable} from 'rxjs';
import { Listing } from '../model/listing';
@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.scss']
})
export class AllListingComponent implements OnInit {
	//creating variable listing
	listings$:Observable<Listing[]>;


  constructor(public listingService:ListingService) {}

  ngOnInit(){
  	this.listings$=this.listingService.getListings();
  }

}
