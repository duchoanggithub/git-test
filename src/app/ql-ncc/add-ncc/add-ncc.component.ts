import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NccService } from '../../services/ncc.service';

@Component({
  selector: 'app-add-ncc',
  templateUrl: './add-ncc.component.html',
  styleUrl: './add-ncc.component.css'
})
export class AddNccComponent {

  addNCCForm: FormGroup;
  addNCC: any;

  constructor(
    private dialogRef: MatDialogRef<AddNccComponent>,
    private fb: FormBuilder, 
    private nccSV: NccService
  ) {
    this.addNCCForm = this.fb.group({
      tenNCC: ['', Validators.required],
      nguoiLienHe: ['', Validators.required],
      sdtNguoiLienHe: ['', Validators.required],
      diaChi: ['', Validators.required],
      email: ['', Validators.required],
      ngayTao: [this.getCurrentDateTime(), Validators.required],
      ngayCapNhat: [this.getCurrentDateTime(), Validators.required],
    });
  }

  getCurrentDateTime(): string {
    const now = new Date();
    return now.toISOString();
  }

  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.addNCCForm.valid) {
      // Gửi dữ liệu mới đến server hoặc thực hiện các hành động cần thiết
      // Sau đó đóng dialog
      this.dialogRef.close(true);
      const newNcc = this.addNCCForm.value;
      this.nccSV.addNCC(newNcc).subscribe(res => {
        console.log("them thanh cong", res);
        console.log("du lieu gui di", newNcc)
      })
    }
  }
}