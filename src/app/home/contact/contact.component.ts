import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private message: NzMessageService
  ) {
    this.contactForm = this.formbuilder.group({
      name: [
        '',
        [
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.required,
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      message: [
        '',
        [
          Validators.minLength(10),
          Validators.maxLength(40),
          Validators.required,
        ],
      ],
    });
  }

  ngOnInit(): void {}

  getContact(type: string): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Submit the form data here (e.g., send to a server)
      this.message.create(type, `Message Send Successfully`);
      setTimeout(() => {
        this.contactForm.reset();
      }, 3000);
    } else {
      console.error('Form is invalid');
    }
  }
}
