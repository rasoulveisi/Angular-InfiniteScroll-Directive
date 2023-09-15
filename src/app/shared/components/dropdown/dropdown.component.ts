import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() list: any[] = [];
  @Output() onSelect: EventEmitter<{ id: number; name: string }> = new EventEmitter<{ id: number; name: string }>();
  constructor() { }

  ngOnInit(): void {
  }

  isDropdownOpen = false;
  selectedLabel = 'Select a sort';

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const filterPopup = document.getElementById('dropdown');

    if (filterPopup && !filterPopup.contains(clickedElement)) {
      this.isDropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onSelectItem(selected: { id: number; name: string }) {
    this.selectedLabel = selected.name;
    this.onSelect.emit(selected);
    this.isDropdownOpen = false;
  }
}
