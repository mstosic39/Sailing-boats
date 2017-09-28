import{ Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector:'[appCollapse]'
})

export class CollapseDirective {

	@HostBinding('class.collapse') isCollapsed = true;
	@HostListener('click') collapse(){
		this.isCollapsed = !this.isCollapsed;
		console.log("hi");
	};

}