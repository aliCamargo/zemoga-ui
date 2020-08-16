import { TestBed, async } from '@angular/core/testing';

import { BannerModule, BodyModule, FooterModule } from './components/intex';
import { AppComponent } from './app.component';

describe('app.component.ts', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [BannerModule, BodyModule, FooterModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Zemoga UI'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Zemoga UI');
  });

  it('should render <app-banner>', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('app-banner').textContent).toContain('');
  });

  it('should render <app-body>', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('section.container').innerHTML).toContain(
      '<app-body'
    );
  });

  it('should render <app-footer>', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('section.container').innerHTML).toContain(
      '<app-footer'
    );
  });
});
