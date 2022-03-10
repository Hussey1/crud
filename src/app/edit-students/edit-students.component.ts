import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';
@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css'],
})
export class EditStudentsComponent implements OnInit {
  addForm: any;
  student_id: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentsService,
    private url: ActivatedRoute
  ) {
    this.addForm = this.formBuilder.group({
      id: [],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.student_id = this.url.snapshot.params['id'];
    if (this.student_id > 0) {
      this.studentService
        .getSingleStudent(this.student_id)
        .subscribe((data: any) => {
          this.addForm.patchValue(data[0]);
          /*console.log(data[0]);*/
        });
    }
  }

  onEdit() {
    console.log(this.addForm.value);
    this.studentService.editStudent(this.addForm.value).subscribe(
      (data: any) => {
        this.router.navigate(['/']);
      },
      (error) => {
        alert(error);
      }
    );
  }
}
