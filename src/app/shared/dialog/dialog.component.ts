import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();

  close() {
    this.visible = false;
    this.closed.emit(); // 通知外部
  }
}
