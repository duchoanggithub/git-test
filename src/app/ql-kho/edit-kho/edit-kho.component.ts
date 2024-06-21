import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KhoService } from '../../services/kho.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-kho',
  templateUrl: './edit-kho.component.html',
  styleUrl: './edit-kho.component.css'
})
export class EditKhoComponent {

  EditForm!: FormGroup;
  id: string | null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private khoSV: KhoService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.id = null;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.EditForm = this.fb.group({

      idNganhNghe: [''],
      idChiNhanh: [''],
      tenKho: [''],
      ngayTao: [this.getCurrentDateTime(), Validators.required],
      ngayCapNhat: [this.getCurrentDateTime(), Validators.required],

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
      this.khoSV.getKhoById(this.id).subscribe({
        next: (khoData) => {
          if (khoData) {
            this.EditForm.patchValue({
              idNganhNghe: khoData.idNganhNghe,
              idChiNhanh: khoData.idChiNhanh,
              tenKho: khoData.tenKho,
              ngayTao: khoData.ngayTao,
              ngayCapNhat: khoData.ngayCapNhat,
            });
            console.log('Dữ liệu nhận được từ API:', khoData);
          } else {
            console.error('Không tìm thấy kho với id:', this.id);
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
    } else {
      console.error('Không thể tải dữ liệu kho với kho là null.');
    }
  }

  onSubmit() {
    if (this.EditForm.valid && this.id !== null) {
      const updateData = this.EditForm.value;
      this.khoSV.updateKho(this.id, updateData).subscribe({
        next: () => {
          console.log('Cập nhật kho thành công', updateData);
          this.snackBar.open('Sửa kho thành công', 'Đóng', {
            duration: 3000,
          });
          this.router.navigate(['kho/lskho']);
        },
        error: (error) => {
          console.error('Lỗi cập nhật:', error);
        }
      });
    } else {
      console.error('Không thể cập nhật kho với id là null.');
    }
  }

  closeEdit(): void {
    this.router.navigate(['kho/lskho']);
  }
}