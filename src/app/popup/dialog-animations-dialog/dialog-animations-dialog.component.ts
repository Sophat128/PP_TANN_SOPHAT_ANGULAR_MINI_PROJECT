import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-animations-dialog',
  templateUrl: './dialog-animations-dialog.component.html',
  styleUrls: ['./dialog-animations-dialog.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogAnimationsDialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsDialogComponent>) {}
}
