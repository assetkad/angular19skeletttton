import { TestBed } from '@angular/core/testing';
import { DataHttpService } from './data-http.service';
import { HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';

describe('DataHttpService', () => {
  let service: DataHttpService;
  let mockHttpClient: jest.Mocked<HttpClient>;
  const API_URL = 'https://api.example.com/data';
  const mockData = { id: 1, name: 'Test Data' };
  const mockError = { status: 404, statusText: 'Not Found' };

  beforeEach(() => {
    mockHttpClient = {
      get: jest.fn(),
      post: jest.fn(),
      request: jest.fn(),
      delete: jest.fn(),
      head: jest.fn(),
      jsonp: jest.fn(),
      options: jest.fn(),
      patch: jest.fn(),
      put: jest.fn(),
    } as unknown as jest.Mocked<HttpClient>;

    TestBed.configureTestingModule({
      providers: [
        DataHttpService,
        { provide: HttpClient, useValue: mockHttpClient },
      ],
    });

    service = TestBed.inject(DataHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('.getData', () => {
    it('should return data from the mocked GET request', () => {
      mockHttpClient.get.mockReturnValue(of(mockData));

      service.getData().subscribe((data) => {
        console.log('Data:', data);
        expect(data).toEqual(mockData);
      });

      expect(mockHttpClient.get).toHaveBeenCalledWith(API_URL);
    });

    it('should handle GET errors from the mocked request', () => {
      mockHttpClient.get.mockReturnValue(throwError(() => mockError));

      service.getData().subscribe({
        next: () => {
          console.log('This should not be called');
          fail('Should have failed');
        },
        error: (error) => {
          console.log('Error:', error);
          expect(error.status).toEqual(mockError.status);
        },
      });

      expect(mockHttpClient.get).toHaveBeenCalledWith(API_URL);
    });
  });

  describe('.postData', () => {
    it('should make POST request with payload', () => {
      const testPayload = { data: 'test' };
      mockHttpClient.post.mockReturnValue(of(mockData));

      service.postData(testPayload).subscribe((data) => {
        expect(data).toEqual(mockData);
      });

      expect(mockHttpClient.post).toHaveBeenCalledWith(API_URL, testPayload);
    });

    it('should handle POST errors from the mocked request', () => {
      const testPayload = { data: 'test' };
      mockHttpClient.post.mockReturnValue(throwError(() => mockError));

      service.postData(testPayload).subscribe({
        next: () => fail('Should have failed'),
        error: (error) => {
          expect(error.status).toEqual(mockError.status);
        },
      });

      expect(mockHttpClient.post).toHaveBeenCalledWith(API_URL, testPayload);
    });
  });
});
