import { Component, OnInit } from '@angular/core';
import { NgSocialLinksService } from 'ng-social-links';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {

  constructor(private socialLinks: NgSocialLinksService) { }

  ngOnInit(): void {


  }

}
