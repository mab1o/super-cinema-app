import {Component, inject} from '@angular/core';
import {AsyncPipe, DatePipe, TitleCasePipe} from "@angular/common";
import {MoviesService} from "../services/movies.service";
import {Observable} from "rxjs";
import {Movie} from "../models/movie";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    TitleCasePipe
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  private readonly moviesService = inject(MoviesService)
  movies$: Observable<Movie[]> = this.moviesService.getMovies()
}
