import { Component, OnInit, ViewChild } from '@angular/core';
import { KhoService } from '../services/kho.service';
import { MatDialog } from '@angular/material/dialog';
import { AddKhoComponent } from './add-kho/add-kho.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-ql-kho',
  templateUrl: './ql-kho.component.html',
  styleUrl: './ql-kho.component.css'
})  
export class QlKhoComponent implements OnInit {
  khos: any;
  
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 20];

  displayedColumns: string[] = ['stt', 'chinhanh', 'tenkho', 'ntao', 'ncapnhat', 'chucnang'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  idCNMap: { [key: string]: string } = {
    "06e279f7-9db2-4476-a264-d137451ce847": "Chi nhánh miền Bắc",
    "206bb9b5-dce9-4e53-8c5e-4e4af73f560d": "Chi nhánh miền Trung",
    "fcde8345-ac90-4e6c-acd3-7e3c3ea5efc4": "Chi nhánh miền Nam"
  };
  constructor(private khoSV: KhoService, public dialog: MatDialog) { }

  getAll(): void {
    this.khoSV.getListKho().subscribe(res => {
      this.khos = res.map((khoSV: { idChiNhanh: string}) => ({
        ...khoSV,
        idChiNhanh: this.idCNMap[khoSV.idChiNhanh] || " "
      }));
      console.log(this.khos);
    })
  }

  OpenDialog(): void {
    const dialogRef = this.dialog.open(AddKhoComponent, {
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

  deleteKho(id: string): void {
    this.khoSV.deleteKho(id).subscribe(res => {
      this.getAll();
      console.log('Xóa thành công', res);
    });
  }

  ngOnInit(): void {
    this.getAll();
    this.khos.paginator = this.paginator;
  }

}
