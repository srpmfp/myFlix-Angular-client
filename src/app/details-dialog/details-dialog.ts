import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-dialog',
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './details-dialog.html',
  styleUrl: './details-dialog.scss'
})

/**
 * @class DialogReturn
 * @description
 * Represents the return value from the dialog.
 */
export class DialogReturn {
  constructor(
    public dialogRef: MatDialogRef<DialogReturn>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  /**
   * @function onClose
   * * This function is called when the user clicks the close button in the dialog.
   */
  onClose(): void {
    this.dialogRef.close();
  }
}
