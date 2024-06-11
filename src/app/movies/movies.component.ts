import {Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, DatePipe, TitleCasePipe} from "@angular/common";
import {MoviesService} from "../services/movies.service";
import {Movie} from "../models/movie";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    TitleCasePipe,
    RouterLink
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  private readonly moviesService = inject(MoviesService)

  movies: Movie[] = []

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(movies => this.movies = movies);
  }

  deleteMovie(id: number): void {
    this.moviesService.deleteMovie(id).subscribe(() =>
      this.movies = this.movies.filter(film => film.id !== id)
    );
  }
}
