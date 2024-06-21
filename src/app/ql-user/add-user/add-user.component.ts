import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{

  addUserForm: FormGroup;
  addUser: any;

  constructor(
    private dialogRef: MatDialogRef<AddUserComponent>,
    private fb: FormBuilder, 
    private user: UserService
  ) {
    this.addUserForm = this.fb.group({
      tenND: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.addUserForm.valid) {
      // Gửi dữ liệu mới đến server hoặc thực hiện các hành động cần thiết
      // Sau đó đóng dialog
      this.dialogRef.close(true);
      const newUser = this.addUserForm.value;
      this.user.addUser(newUser).subscribe(res => {
        console.log("them thanh cong", res);
        console.log("du lieu gui di", newUser)
      })
    }
  }

}
