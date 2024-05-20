import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [CommonModule, FormsModule, NzButtonModule, NzCardModule, ChildComponent],
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent {
  ordenes: string[] = ['Orden 1', 'Orden 2', 'Orden 3'];
  feedbacks: string[] = [];

  agregarOrden(orden: string) {
    this.ordenes.push(orden);
  }

  recibirFeedback(feedback: string) {
    this.feedbacks.push(feedback);
  }
}
