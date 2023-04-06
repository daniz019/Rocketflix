import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';








@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Não sabe o que assistir?';
  public Rocketflix = 'assets/Rocketflix.svg'
  firstClick = true;

 

  

  

  
  
  
  


  filmes: any[] = [];


  buscarFilmes() {

    this.firstClick = false;
    
    this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=2217bf3252a0264197c27cf078dd0459&language=pt-BR')
      .subscribe(data => {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        this.filmes = [data.results[randomIndex]];
      });

   
    }

    



  constructor(private http: HttpClient) { }
  ngOnInit() {
    const apiKey = '2217bf3252a0264197c27cf078dd0459';
    const apiUrl = `https://api.themoviedb.org/3/movie/550?api_key=2217bf3252a0264197c27cf078dd0459`;
    this.http.get(apiUrl).subscribe(response => {
      
      console.log(response);
    });
    
  }

  

  

  

}

  
  

  


