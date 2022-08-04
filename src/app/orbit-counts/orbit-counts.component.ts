import { keyframes } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }

 satelliteTypes(): string[] {
	let types: string[] = [];
	
	for (let satellite of this.satellites) {
		if (!types.includes(satellite.type)) {
			types.push(satellite.type);
		}
	}

	return types;
 }

 typeCount(type): number{
	let count: number = 0;

	this.satellites.forEach(satellite => {
		if (type === satellite.type) {count += 1} 
	  });

	return count;
 }


}