import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  EditForm!: FormGroup;
  id: string | null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.id = null;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.EditForm = this.fb.group({

      userName: [''],
      password: [''],
      tenND: [''],
      email: [''],

      id: this.id
    });
    this.loadDataForEdit();
  }

  loadDataForEdit(): void {
    if (this.id !== null) {
      this.userService.getUserById(this.id).subscribe({
        next: (userData) => {
          if (userData) {
            this.EditForm.patchValue({
              userName: userData.userName,
              password: userData.password,
              tenND: userData.tenND,
              email: userData.email,
            });
            console.log('Dữ liệu nhận được từ API:', userData);
          } else {
            console.error('Không tìm thấy người dùng với id:', this.id);
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
    } else {
      console.error('Không thể tải dữ liệu người dùng với người dùng là null.');
    }
  }

  onSubmit() {
    if (this.EditForm.valid && this.id !== null) {
      const updateData = this.EditForm.value;
      this.userService.updateUser(this.id, updateData).subscribe({
        next: () => {
          console.log('Cập nhật người dùng thành công', updateData);
          this.snackBar.open('Sửa người dùng thành công', 'Đóng', {
            duration: 3000,
          });
          this.router.navigate(['lsuser']);
        },
        error: (error) => {
          console.error('Lỗi cập nhật:', error);
        }
      });
    } else {
      console.error('Không thể cập nhật người dùng với id là null.');
    }
  }

  closeEdit(): void {
    this.router.navigate(['lsuser']);
  }
}


// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { UserService } from '../../services/user.service';


// @Component({
//   selector: 'app-edit-user',
//   templateUrl: './edit-user.component.html',
//   styleUrls: ['./edit-user.component.css']
// })
// export class EditUserComponent implements OnInit {

//   EditForm: FormGroup;
//   dialogEdit: any;

//   constructor(
//     private ref: MatDialogRef<EditUserComponent>,
//     private fb: FormBuilder,
//     private user: UserService,
//     @Inject(MAT_DIALOG_DATA) public data: any) {


//     this.EditForm = this.fb.group({
//       userName: [''],
//       password: [''],
//       tenND: [''],
//       email: ['']
//     });
//   }

//   closeEdit() {
//     this.ref.close();
//   }

//   onSubmit() {
//     const id = this.data.userId;
//     const updatedData = this.EditForm.value;
//     this.user.updateUser(id, updatedData).subscribe(res => {

//       console.log('Dữ liệu đã được cập nhật:', updatedData);
//       this.ref.close(true);
//       next: () => {

//       }
//       error: (error: any) => {
//         console.error('Lỗi cập nhật:', error);
//       }
//     });
//   }

//   ngOnInit(): void {
//     // Các tác vụ khác khi component được khởi tạo
//     const userId = this.data.userId;
//     if (userId) {
//       // Gọi hàm từ UserService để lấy dữ liệu theo ID
//       this.user.getUserById(userId).subscribe((userData: any) => {
//         // Gán dữ liệu vào form
//         this.EditForm.setValue({
//           userName: userData.userName,
//           password: userData.password,
//           tenND: userData.tenND,
//           email: userData.email
//         });
//       });
//     }
//   }
// }
