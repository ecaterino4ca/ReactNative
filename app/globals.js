import React from 'react';
import {MovieRepository} from "./repository/MovieRepository";

export let gRepository: MovieRepository = MovieRepository.repository;

export const apiUrl = 'http://172.30.3.200:8080';
export const headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};
export const authHeaders = (token) => ({...headers, 'Authorization': `Bearer ${token}`});