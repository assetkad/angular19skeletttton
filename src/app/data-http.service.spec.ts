import { TestBed } from '@angular/core/testing';
import { DataHttpService } from './data-http.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';

describe('DataHttpService', () => {
  let service: DataHttpService;
  let httpTestingController: HttpTestingController;

  const API_URL = 'https://api.example.com/data';
  const mockData = { id: 1, name: 'Test Data' };
  const mockError = { status: 404, statusText: 'Not Found' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataHttpService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    service = TestBed.inject(DataHttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('.getData', () => {
    it('should return data from the mocked GET request', () => {
      service.getData().subscribe((data) => {
        expect(data).toEqual(mockData);
      });

      const req = httpTestingController.expectOne(API_URL);
      expect(req.request.method).toEqual('GET');
      req.flush(mockData);
    });

    it('should handle GET errors from the mocked request', () => {
      service.getData().subscribe({
        next: () => {
          console.log('This should not be called');
          fail('Should have failed');
        },
        error: (error) => {
          expect(error.status).toEqual(mockError.status);
        },
      });

      const req = httpTestingController.expectOne(API_URL);
      expect(req.request.method).toEqual('GET');
      req.flush(null, {
        status: mockError.status,
        statusText: mockError.statusText,
      });
    });
  });

  describe('.postData', () => {
    it('should make POST request with payload', () => {
      const testPayload = { data: 'test' };

      service.postData(testPayload).subscribe((data) => {
        expect(data).toEqual(mockData);
      });

      const req = httpTestingController.expectOne(API_URL);
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(testPayload);
      req.flush(mockData);
    });

    it('should handle POST errors from the mocked request', () => {
      const testPayload = { data: 'test' };

      service.postData(testPayload).subscribe({
        next: () => fail('Should have failed'),
        error: (error) => {
          expect(error.status).toEqual(mockError.status);
        },
      });

      const req = httpTestingController.expectOne(API_URL);
      expect(req.request.method).toEqual('POST');
      expect(req.request.body).toEqual(testPayload);
      req.flush(null, {
        status: mockError.status,
        statusText: mockError.statusText,
      });
    });
  });
});
