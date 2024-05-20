import { Component, Input, Output, EventEmitter, AfterContentInit, ContentChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, NzButtonModule, NzCardModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit {
  @Input() orden: string = '';
  @Output() feedback = new EventEmitter<string>();

  @ContentChild('projectedContent', { static: true }) projectedContent!: ElementRef;

  enviarFeedback() {
    this.feedback.emit(`Empleado con orden: ${this.orden} ha completado la tarea.`);
  }

  ngAfterContentInit() {
    if (this.projectedContent) {
      console.log('Contenido proyectado:', this.projectedContent.nativeElement.textContent);
    }
  }
}
