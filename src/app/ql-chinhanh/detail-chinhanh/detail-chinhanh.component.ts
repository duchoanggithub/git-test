import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChinhanhService } from '../../services/chinhanh.service';

@Component({
  selector: 'app-detail-chinhanh',
  templateUrl: './detail-chinhanh.component.html',
  styleUrl: './detail-chinhanh.component.css'
})
export class DetailChinhanhComponent implements OnInit {
  DetailForm!: FormGroup;
  id: string | null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private chinhanh: ChinhanhService,
    private router: Router) {
    this.id = null;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.DetailForm = this.fb.group({

      tenCN: [''],
      ngayCapNhat: [''],
      ngayTao: [''],

      id: this.id
    });
    this.loadDataForDetail();
  }

  loadDataForDetail(): void {
    if (this.id !== null) {
      this.chinhanh.getCNById(this.id).subscribe({
        next: (CNData) => {
          if (CNData) {
            this.DetailForm.patchValue({
              tenCN: CNData.tenCN,
              ngayTao: CNData.ngayTao,
              ngayCapNhat: CNData.ngayCapNhat
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

  closeDetail(): void {
    this.router.navigate(['chinhanh']);
  }

}
