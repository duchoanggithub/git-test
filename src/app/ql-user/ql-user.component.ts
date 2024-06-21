import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@Component({
  selector: 'app-ql-user',
  templateUrl: './ql-user.component.html',
  styleUrls: ['./ql-user.component.css']
})

export class QlUserComponent implements OnInit {

  users: any =[] ;

  roleIdMap: { [key: string]: string } = {
    "8672c5b7-bd9c-450e-8bd3-8c3049129b1a": "Admin",
    "47b5ba8b-f4dc-4ce1-b46a-51c85d149deb": "Sale",
    "0ad09cf5-119b-4330-a6a5-52d3cb9d0c68": "Ware house",
    "384924ab-de63-4edd-ba80-0fda00e9427f": "Customer"
  };

  constructor(private user: UserService,  public dialog: MatDialog) { }

  getAll(){
    // Lấy danh sách người dùng
    this.user.getListUser().subscribe(res => {
      this.users = res.map((user: { roleId: string; }) => ({
        ...user,
        roleName: this.roleIdMap[user.roleId] || " "
      }));
      console.log(this.users);
    })
  }

  ngOnInit(): void {
    this.getAll();
  }

  OpenDialog() {
    const dialogRef = this.dialog.open(AddUserComponent, {
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

  // openEditDialog(id: string) {
  //   const dialogRef = this.dialog.open(EditUserComponent, {
  //     width: '400px',
  //     data: { userId: id }
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === true) {
  //       console.log('Dữ liệu từ dialog:', result);
  //       // Thực hiện các hành động cần thiết với dữ liệu từ dialog
  //       this.getAll();
  //     }
  //   });
  // }

  deleteUser(id: string): void {
    this.user.deleteUser(id).subscribe(res => {
        this.getAll();
        console.log('xóa thành công', res)
      });
  }

  getUserById() {

  }

  ngDestroy() {

  }
}
