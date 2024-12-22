import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-success-message',
  imports: [],
  standalone: true,
  template :`
  <div class="alert alert-success" role="alert">
  {{param}}
</div>
  `  ,
  styleUrl: './success-message.component.css'
})
export class SuccessMessageComponent {
  @Input() param!: string; 

}
