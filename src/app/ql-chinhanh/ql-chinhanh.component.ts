import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChinhanhService } from '../services/chinhanh.service';

import { AddChinhanhComponent } from './add-chinhanh/add-chinhanh.component';

@Component({
  selector: 'app-ql-chinhanh',
  templateUrl: './ql-chinhanh.component.html',
  styleUrls: ['./ql-chinhanh.component.css']
})
export class QlChinhanhComponent implements OnInit {

  chinhanhs: any[] = [];

  constructor(private chinhanhService: ChinhanhService, public dialog: MatDialog) { }

  getAll(): void {
    // Lấy danh sách chi nhánh
    this.chinhanhService.getListCN().subscribe(res => {
      this.chinhanhs = res;
      console.log(this.chinhanhs);
    });
  }

  OpenDialog(): void {
    const dialogRef = this.dialog.open(AddChinhanhComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        console.log('Dữ liệu từ dialog:', result);
        // Thực hiện các hành động cần thiết với dữ liệu từ dialog
        this.getAll();
      }
    });
  }

  deleteCN(id: string): void {
    this.chinhanhService.deleteCN(id).subscribe(res => {
      this.getAll();
      console.log('Xóa thành công', res);
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

}
