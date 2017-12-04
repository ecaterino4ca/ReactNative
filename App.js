import React from 'react';
import { StackNavigator } from 'react-navigation';
import MainActivity from "./app/MainActivity";
import MovieDetailsActivity from "./app/activity/MovieDetailsActivity";
import {Movie} from "./app/domain/Movie";
import {authReducer} from './app/auth';

const RootNavigator = StackNavigator({
    Home: {
        screen: MainActivity,
        navigationOptions: {
            headerText: 'Movie List',
        },
    },
    MovieDetails: {
        screen: MovieDetailsActivity,
        path: 'movieDetails/:item',
        navigationOptions: {
            headerText: 'Movie Details',
        },
    },
});

export default RootNavigator;