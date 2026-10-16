import { TestBed } from '@angular/core/testing';
import { CategoryData } from './category-data';

describe('CategoryData', () => {
  let service: CategoryData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
