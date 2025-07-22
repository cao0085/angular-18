import { Component } from '@angular/core';
import { FormControl,FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  categories = [
    { value: 'music',  label: 'Music'  },
    { value: 'movie',  label: 'Movie'  },
    { value: 'book',   label: 'Book'   },
  ];

  searchForm: FormGroup;
  newOptionValue = new FormControl('initial value');

  constructor(private fb: FormBuilder) {
    // 建立兩個控制項：category 與 title
    this.searchForm = this.fb.group({
      category: [this.categories[0].value, Validators.required],
      title: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(): void {
    if (this.searchForm.invalid) {
      console.warn('❌ 表單驗證未通過');
      this.searchForm.markAllAsTouched(); // 觸發所有欄位的 touched
      return;
    }
  console.log('✅ 表單資料:', this.searchForm.value);
  };

  addOption(): void {
    const option = this.newOptionValue.value?.trim();
    if (option && !this.categories.some(c => c.value === option)) {
      this.categories.push({ value: option, label: option });
    }
    this.newOptionValue.reset(); // 清空輸入欄位
  }
}
