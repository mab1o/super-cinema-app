import {inject, Injectable} from '@angular/core';
import {Movie} from "../models/movie";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly httpClient = inject(HttpClient)

  private readonly url = "http://localhost:8080/movies"

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.url, movie);
  }

  deleteMovie(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    const urlWithId = `${this.url}/${movie.id}`;
    return this.httpClient.put<Movie>(urlWithId, movie);
  }

  getMovie(id: number): Observable<Movie> {
    const urlWithId = `${this.url}/${id}`;
    return this.httpClient.get<Movie>(urlWithId);
  }
}
