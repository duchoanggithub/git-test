import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChinhanhService } from '../../services/chinhanh.service';


@Component({
  selector: 'app-edit-chinhanh',
  templateUrl: './edit-chinhanh.component.html',
  styleUrl: './edit-chinhanh.component.css'
})
export class EditChinhanhComponent implements OnInit {
  EditForm!: FormGroup;
  id: string | null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private chinhanh: ChinhanhService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.id = null;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.EditForm = this.fb.group({

      tenCN: [''],
      ngayCapNhat: [this.getCurrentDateTime(), Validators.required],
      ngayTao: [this.getCurrentDateTime(), Validators.required],

      id: this.id
    });
    this.loadDataForEdit();
  }

  getCurrentDateTime(): string {
    const now = new Date();
    return now.toISOString();
  }

  loadDataForEdit(): void {
    if (this.id !== null) {
      this.chinhanh.getCNById(this.id).subscribe({
        next: (CNData) => {
          if (CNData) {
            this.EditForm.patchValue({
              tenCN: CNData.tenCN
            });
            console.log('Dữ liệu nhận được từ API:', CNData);
          } else {
            console.error('Không tìm thấy chi nhánh với id:', this.id);
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
    } else {
      console.error('Không thể tải dữ liệu chi nhánh với chi nhánh là null.');
    }
  }

  onSubmit() {
    if (this.EditForm.valid && this.id !== null) {
      const updateData = this.EditForm.value;
      this.chinhanh.updateCN(this.id, updateData).subscribe({
        next: () => {
          console.log('Cập nhật chi nhánh thành công', updateData);
          this.snackBar.open('Sửa chi nhánh thành công', 'Đóng', {
            duration: 3000,
          });
          this.router.navigate(['chinhanh']);
        },
        error: (error) => {
          console.error('Lỗi cập nhật:', error);
        }
      });
    } else {
      console.error('Không thể cập nhật chi nhánh với id là null.');
    }
  }

  closeEdit(): void {
    this.router.navigate(['chinhanh']);
  }
}
