import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
<<<<<<< HEAD:src/app/app.component.spec.ts
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
=======
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
>>>>>>> 057b748fc7ead57965575b5ce8964536fc499e58:bancaWeb/src/app/app.component.spec.ts
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD:src/app/app.component.spec.ts
  it(`should have the 'proyecto_FrontEnd' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('proyecto_FrontEnd');
=======
  it(`should have as title 'loginApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('loginApp');
>>>>>>> 057b748fc7ead57965575b5ce8964536fc499e58:bancaWeb/src/app/app.component.spec.ts
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
<<<<<<< HEAD:src/app/app.component.spec.ts
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, proyecto_FrontEnd');
=======
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to loginApp!');
>>>>>>> 057b748fc7ead57965575b5ce8964536fc499e58:bancaWeb/src/app/app.component.spec.ts
  });
});
