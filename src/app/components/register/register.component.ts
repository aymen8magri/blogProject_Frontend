import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  readonly fb: FormBuilder = inject(FormBuilder);
  readonly authService: AuthService = inject(AuthService);
  readonly router: Router = inject(Router);

  ngOnInit(): void {
    this.registerForm = this.fb.nonNullable.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      about: ['', Validators.required],
    });
  }


image: any;
onFileChange(e: any){
  this.image = e.target.files[0];
  console.log(this.image);
}

register(){
  const formData = new FormData();
  formData.append('image', this.image);
  formData.append('name', this.registerForm.value.name);
  formData.append('lastName', this.registerForm.value.lastname);
  formData.append('email', this.registerForm.value.email);
  formData.append('password', this.registerForm.value.password);
  formData.append('about', this.registerForm.value.about);

  this.authService.register(formData).subscribe((res: any) => {
    console.log(res);
    this.router.navigate(['/login']);
  });
}


}