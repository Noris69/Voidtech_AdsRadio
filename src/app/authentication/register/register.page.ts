import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  register() {
    if (this.form.valid) {
      const userData = this.form.value;

      fetch("https://api-ydays.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Registration failed!');
          }
        })
        .then((data) => {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(userData));
          this.router.navigate(['/tabs/tab1']);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = 'Registration failed. Please try again.'; 
        });
    } else {
      this.errorMessage = 'Please fill in all the required fields.';
    }
  }
}
