import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  receivedObject: any;
  constructor(private sharedService: UserdataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.receivedObject = this.sharedService.getObject();
    console.log('Received Object:', this.receivedObject);
  }
}
