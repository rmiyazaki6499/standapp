import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  register;

  constructor(
    private RegisterService: RegisterService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.register = {
      username: '',
      email: '',
      password1: '',
      password2: '',
    };
  }
  onRegister = () => {
    this.RegisterService.registerNewUser(this.register).subscribe(
      response => {
        sessionStorage.setItem('token', response.key);
        sessionStorage.setItem('username', this.register.username);
        this.toastr.success('User ' + this.register.username + ' account has been created!');
        window.location.href = "/"
      },
      error => {
        console.log('error', error);
        this.toastr.error('There seems to be a problem...');
      }
    );
  }

}
