import { Component, OnInit } from '@angular/core';
import { NccService } from '../services/ncc.service';
import { MatDialog } from '@angular/material/dialog';
import { AddNccComponent } from './add-ncc/add-ncc.component';

@Component({
  selector: 'app-ql-ncc',
  templateUrl: './ql-ncc.component.html',
  styleUrl: './ql-ncc.component.css'
})
export class QlNccComponent implements OnInit {

  nccs: any[] = [];

  constructor(private nccSV: NccService, public dialog: MatDialog) { }

  getAll(): void {
    // Lấy danh sách chi nhánh
    this.nccSV.getListNCC().subscribe(res => {
      this.nccs = res;
      console.log(this.nccs);
    });
  }

  OpenDialog(): void {
    const dialogRef = this.dialog.open(AddNccComponent, {
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

  deleteNCC(id: string): void {
    this.nccSV.deleteNCC(id).subscribe(res => {
      this.getAll();
      console.log('Xóa thành công', res);
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

}

