import {Component, inject, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Movie} from "../../models/movie";
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'update-update-movie',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe
  ],
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.scss'
})
export class UpdateMovieComponent implements OnInit {
  private readonly moviesService = inject(MoviesService)
  private readonly router: Router = inject(Router)
  private readonly route: ActivatedRoute = inject(ActivatedRoute);

  movie: Movie = {
    title: '',
    director: '',
    releaseDate: new Date(),
    synopsis: '',
    id: undefined,
    rate: undefined,
    image: undefined
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.moviesService.getMovie(id).subscribe(movie => this.movie = movie);
  }

  updateMovie(): void {
    console.log(this.movie)
    this.moviesService.updateMovie(this.movie).subscribe(
      () => this.router.navigate(['/movies'])
    );
  }
}
