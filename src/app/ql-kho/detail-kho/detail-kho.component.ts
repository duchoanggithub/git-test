import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KhoService } from '../../services/kho.service';

@Component({
  selector: 'app-detail-kho',
  templateUrl: './detail-kho.component.html',
  styleUrl: './detail-kho.component.css'
})
export class DetailKhoComponent implements OnInit {
  DetailForm!: FormGroup;
  id: string | null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private khoSV: KhoService,
    private router: Router) {
    this.id = null;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.DetailForm = this.fb.group({

      idNganhNghe: [''],
      idChiNhanh: [''],
      tenKho: [''],
      ngayTao: [''],
      ngayCapNhat: [''],

      id: this.id
    });
    this.loadDataForDetail();
  }

  loadDataForDetail(): void {
    if (this.id !== null) {
      this.khoSV.getKhoById(this.id).subscribe({
        next: (KhoData) => {
          if (KhoData) {
            this.DetailForm.patchValue({
              idNganhNghe: KhoData.idNganhNghe,
              idChinhNhanh: KhoData.idChinhNhanh,
              tenKho: KhoData.tenKho,
              ngayTao: KhoData.ngayTao,
              ngayCapNhat: KhoData.ngayCapNhat
            });
            console.log('Dữ liệu nhận được từ API:', KhoData);
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

  closeDetail(): void {
    this.router.navigate(['kho/lskho']);
  }

}

