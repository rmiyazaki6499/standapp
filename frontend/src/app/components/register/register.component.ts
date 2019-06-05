import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  register;

  constructor(private RegisterService: RegisterService) {

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
        alert('User ' + this.register.username + ' created!');
        sessionStorage.setItem('token', response.key);
        window.location.href = "http://localhost:4200/"
      },
      error => {
        console.log('error', error);
      }
    );
  }

}
