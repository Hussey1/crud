import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css'],
})
export class AddStudentsComponent implements OnInit {
  addForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentsService
  ) {
    this.addForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.addForm.value);
    this.studentService.createStudent(this.addForm.value).subscribe(
      (data: any) => {
        this.router.navigate(['/']);
      },
      (error) => {
        alert(error);
      }
    );
  }
}
