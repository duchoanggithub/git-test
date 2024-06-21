import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NccService } from '../../services/ncc.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-ncc',
  templateUrl: './edit-ncc.component.html',
  styleUrl: './edit-ncc.component.css'
})
export class EditNccComponent {

  EditForm!: FormGroup;
  id: string | null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private nccSV: NccService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.id = null;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.EditForm = this.fb.group({

      tenNCC: [''],
      nguoiLienHe: [''],
      sdtNguoiLienHe: [''],
      diaChi: [''],
      email: [''],
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
      this.nccSV.getNCCById(this.id).subscribe({
        next: (NCCData) => {
          if (NCCData) {
            this.EditForm.patchValue({
              tenNCC: NCCData.tenNCC,
              nguoiLienHe: NCCData.nguoiLienHe,
              sdtNguoiLienHe: NCCData.sdtNguoiLienHe,
              diaChi: NCCData.diaChi,
              email: NCCData.email,
            });
            console.log('Dữ liệu nhận được từ API:', NCCData);
          } else {
            console.error('Không tìm thấy nhà cung cấp với id:', this.id);
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
    } else {
      console.error('Không thể tải dữ liệu nhà cung cấp với nhà cung cấp là null.');
    }
  }

  onSubmit() {
    if (this.EditForm.valid && this.id !== null) {
      const updateData = this.EditForm.value;
      this.nccSV.updateNCC(this.id, updateData).subscribe({
        next: () => {
          console.log('Cập nhật nhà cung cấp thành công', updateData);
          this.snackBar.open('Sửa nhà cung cấp thành công', 'Đóng', {
            duration: 3000,
          });
          this.router.navigate(['nhacungcap']);
        },
        error: (error) => {
          console.error('Lỗi cập nhật:', error);
        }
      });
    } else {
      console.error('Không thể cập nhật nhà cung cấp với id là null.');
    }
  }

  closeEdit(): void {
    this.router.navigate(['nhacungcap']);
  }
}
