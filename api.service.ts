// Initial code from 14/4 class
// 25/4 - Added getters for characters, quotes and deaths
// API doc @ https://breakingbadapi.com/Documentation

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  // GETTERS
  getEpisodes() {
      return this.http.get(`https://www.breakingbadapi.com/api/episodes`)
  }
  getEpisode(id) {
      return this.http.get(`https://breakingbadapi.com/api/episodes/${id}`)
  }
  getCharacters() {
      return this.http.get(`https://www.breakingbadapi.com/api/characters/`)
  }
  getCharacter(id) {
      return this.http.get(`https://breakingbadapi.com/api/characters/${id}`)
  }
  getQuotes() {
      return this.http.get(`https://www.breakingbadapi.com/api/quotes`)
  }
  getQuote(id) {
      return this.http.get(`https://breakingbadapi.com/api/quotes/${id}`)
  }
  getDeaths() {
      return this.http.get(`https://www.breakingbadapi.com/api/deaths`)
  }
  getDeath(name) {
      return this.http.get(`https://breakingbadapi.com/api/deaths/${name}`)
  }

}
