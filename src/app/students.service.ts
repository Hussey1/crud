import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from './students';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  PHP_API_SERVER = 'http://localhost/api/';
  constructor(private http: HttpClient) {}

  getStudents() {
    return this.http.get<Students[]>(this.PHP_API_SERVER + 'index.php');
  }

  getSingleStudent(id: any) {
    return this.http.get<Students[]>(
      this.PHP_API_SERVER + 'index.php?id=' + id
    );
  }

  deleteStudent(id: any) {
    return this.http.delete(this.PHP_API_SERVER + 'delete_user.php?id=' + id);
  }

  createStudent(student: any) {
    return this.http.post(this.PHP_API_SERVER + 'create_user.php', student);
  }

  editStudent(student: any) {
    return this.http.put(this.PHP_API_SERVER + 'update_user.php', student);
  }
}
