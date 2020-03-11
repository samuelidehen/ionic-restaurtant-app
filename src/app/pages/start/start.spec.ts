import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { MenuController } from '@ionic/angular';

import { StartPage } from './start';

import { IonicStorageModule } from '@ionic/storage';
describe('StartPage', () => {
  let fixture, app;
  beforeEach(async(() => {
    const menuSpy = jasmine.createSpyObj('MenuController', [
      'toggle',
      'enable'
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      declarations: [StartPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicStorageModule.forRoot()],
      providers: [
        { provide: MenuController, useValue: menuSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPage);
    app = fixture.debugElement.componentInstance;
  });
  it('should create the start page', () => {
    expect(app).toBeTruthy();
  });

  it('should check the start status', async () => {
    const didTuts = await app.storage.get('ion_did_start');
    expect(didTuts).toBeFalsy();
  });
});
