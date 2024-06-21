import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NccService } from '../../services/ncc.service';

@Component({
  selector: 'app-detail-ncc',
  templateUrl: './detail-ncc.component.html',
  styleUrl: './detail-ncc.component.css'
})
export class DetailNccComponent {
  
  DetailForm!: FormGroup;
  id: string | null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private nccSV: NccService,
    private router: Router) {
    this.id = null;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.DetailForm = this.fb.group({

      tenNCC: [''],
      nguoiLienHe: [''],
      sdtNguoiLienHe: [''],
      diaChi: [''],
      email: [''],
      ngayCapNhat: [''],
      ngayTao: [''],

      id: this.id
    });
    this.loadDataForDetail();
  }

  loadDataForDetail(): void {
    if (this.id !== null) {
      this.nccSV.getNCCById(this.id).subscribe({
        next: (NCCData) => {
          if (NCCData) {
            this.DetailForm.patchValue({
              tenNCC: NCCData.tenNCC,
              nguoiLienHe: NCCData.nguoiLienHe,
              sdtNguoiLienHe: NCCData.sdtNguoiLienHe,
              diaChi: NCCData.diaChi,
              email: NCCData.email,
              ngayTao: NCCData.ngayTao,
              ngayCapNhat: NCCData.ngayCapNhat
            });
            console.log('Dữ liệu nhận được từ API:', NCCData);
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

  closeDetail(): void {
    this.router.navigate(['nhacungcap']);
  }

}
