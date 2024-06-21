import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { KhoService } from '../../services/kho.service';

@Component({
  selector: 'app-add-kho',
  templateUrl: './add-kho.component.html',
  styleUrl: './add-kho.component.css'
})
export class AddKhoComponent {

  addKhoForm: FormGroup;
  addCN: any;

  constructor(
    private dialogRef: MatDialogRef<AddKhoComponent>,
    private fb: FormBuilder, 
    private khoSV: KhoService
  ) {
    this.addKhoForm = this.fb.group({
      idChiNhanh: ['', Validators.required],
      tenKho: ['', Validators.required],
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
    if (this.addKhoForm.valid) {
      // Gửi dữ liệu mới đến server hoặc thực hiện các hành động cần thiết
      // Sau đó đóng dialog
      this.dialogRef.close(true);
      const newKho = this.addKhoForm.value;
      this.khoSV.addKho(newKho).subscribe(res => {
        console.log("them thanh cong", res);
        console.log("du lieu gui di", newKho)
      })
    }
  }
}
