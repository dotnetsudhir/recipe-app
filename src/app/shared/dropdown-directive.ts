import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdownDirective]',
  standalone: false
})
export class DropdownDirective {
  private isOpen = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('click', ['$event'])
  toggleOpen(event: Event) {
    event.stopPropagation(); // 🛑 stop bubbling to document

    const dropdownMenu = this.elRef.nativeElement.querySelector('.dropdown-menu');

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      dropdownMenu.classList.add('show');
    } else {
      dropdownMenu.classList.remove('show');
    }
  }

  @HostListener('document:click', ['$event'])
  close(event: Event) {
    const dropdownMenu = this.elRef.nativeElement.querySelector('.dropdown-menu');

    // 👇 close ONLY if click is outside
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      dropdownMenu.classList.remove('show');
    }
  }
}