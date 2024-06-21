import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SanphamService } from '../../services/sanpham.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-sanpham',
  templateUrl: './edit-sanpham.component.html',
  styleUrls: ['./edit-sanpham.component.css']
})
export class EditSanphamComponent implements OnInit {
  EditForm!: FormGroup;
  id: string | null;
  addSPForm: any;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private spSV: SanphamService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.id = null;
    this.addSPForm = this.fb.group({ // Khởi tạo FormGroup
      imgSanPham: ['']
      // Thêm các trường khác nếu cần
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.EditForm = this.fb.group({


      idNhomSanPham: [''],
      tenSp: [''],
      giaSP: [''],
      giaNhapVao: [''],
      idNhaCungCap: [''],
      mota: [''],
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
      this.spSV.getSPById(this.id).subscribe({
        next: (SPData) => {
          if (SPData) {
            this.addSPForm.patchValue({
              imgSanPham: SPData.imgSanPham
              // Gán các trường khác nếu cần
            });
            this.EditForm.patchValue({
              
              idNhomSanPham: SPData.idNhomSanPham,
              tenSp: SPData.tenSp,
              giaSP: SPData.giaSP,
              giaNhapVao: SPData.giaNhapVao,
              idNhaCungCap: SPData.idNhaCungCap,
              mota: SPData.mota,
            });
            console.log('Dữ liệu nhận được từ API:', SPData);
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
      this.spSV.updateSP(this.id, updateData).subscribe({
        next: () => {
          console.log('Cập nhật nhà cung cấp thành công', updateData);
          this.snackBar.open('Sửa nhà cung cấp thành công', 'Đóng', {
            duration: 3000,
          });
          this.router.navigate(['sanpham/lsdmsp']);
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
    this.router.navigate(['sanpham/lsdmsp']);
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    const fileName = selectedFile.name;
    console.log('Tên tệp đã chọn:', fileName);

    // Lưu tên tệp vào biến trong component
    this.addSPForm.patchValue({
      idImage: fileName
    });
  }
}