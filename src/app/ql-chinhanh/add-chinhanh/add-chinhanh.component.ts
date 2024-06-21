import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ChinhanhService } from '../../services/chinhanh.service';

@Component({
  selector: 'app-add-chinhanh',
  templateUrl: './add-chinhanh.component.html',
  styleUrl: './add-chinhanh.component.css'
})
export class AddChinhanhComponent {

    addCNForm: FormGroup;
    addCN: any;
  
    constructor(
      private dialogRef: MatDialogRef<AddChinhanhComponent>,
      private fb: FormBuilder, 
      private chinhanh: ChinhanhService
    ) {
      this.addCNForm = this.fb.group({
        tenCN: ['', Validators.required],
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
      if (this.addCNForm.valid) {
        // Gửi dữ liệu mới đến server hoặc thực hiện các hành động cần thiết
        // Sau đó đóng dialog
        this.dialogRef.close(true);
        const newCN = this.addCNForm.value;
        this.chinhanh.addCN(newCN).subscribe(res => {
          console.log("them thanh cong", res);
          console.log("du lieu gui di", newCN)
        })
      }
    }
}
