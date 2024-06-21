import { Component, OnInit } from '@angular/core';
import { SanphamService } from '../services/sanpham.service';
import { MatDialog } from '@angular/material/dialog';
import { AddNccComponent } from '../ql-ncc/add-ncc/add-ncc.component';
import { AddSanphamComponent } from './add-sanpham/add-sanpham.component';

@Component({
  selector: 'app-ql-sanpham',
  templateUrl: './ql-sanpham.component.html',
  styleUrls: ['./ql-sanpham.component.css']
})
export class QlSanphamComponent implements OnInit {
  sps: any[] = [];

  constructor(private spSV: SanphamService, public dialog: MatDialog) { }

  getAll(): void {
    // Lấy danh sách chi nhánh
    this.spSV.getListSP().subscribe(res => {
      this.sps = res;
      console.log(this.sps);
    });
  }

  OpenDialog(): void {
    const dialogRef = this.dialog.open(AddSanphamComponent, {
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

  deleteSP(id: string): void {
    this.spSV.deleteSP(id).subscribe(res => {
      this.getAll();
      console.log('Xóa thành công', res);
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

}
