import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Interface Category Call
import { BookingCategoryRequestInterface } from '../../../interfaces/booking/category/booking-category-request-interface';
import { BookingCategoryResponseInterface } from '../../../interfaces/booking/category/booking-category-response-interface';

@Service()

export class CategoryData {
    
    private http = inject(HttpClient);
    private apiUrl = 'https://bookie-api-sable.vercel.app';

    //Create Category API Call
    create(payload: BookingCategoryRequestInterface): Observable<BookingCategoryResponseInterface> {
        return this.http.post<BookingCategoryResponseInterface>(this.apiUrl+'/booking/add-category', payload);
    };
    //Get All Categories API Call
    getAll(): Observable<BookingCategoryResponseInterface[]>{
        return this.http.get<BookingCategoryResponseInterface[]>(this.apiUrl+'/booking/categories');
    };
    //Single Category API Call
    getSingle(id:number):Observable<BookingCategoryResponseInterface>{
        return this.http.get<BookingCategoryResponseInterface>(this.apiUrl+'/booking/category/'+id);
    };
    //Edit Category API Call
    update(id:number, payload: BookingCategoryRequestInterface): Observable<BookingCategoryResponseInterface> {
          return this.http.put<BookingCategoryResponseInterface>(this.apiUrl+'/booking/edit-category/'+id,payload);
    };
    //Delete Category API Call
    delete(id: number): Observable<any> {
        return this.http.delete(this.apiUrl+'/booking/delete-category/'+id);
    };
  
}
