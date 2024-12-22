import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-danger-message',
  standalone: true,
  imports: [],
  template :`
  <div class="alert alert-danger" role="alert">
  {{param}}
</div>
  `
  ,
  styleUrls: ['./danger-message.component.css']
})
export class DangerMessageComponent {
  @Input() param!: string; 



}
