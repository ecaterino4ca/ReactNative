import React from 'react';
import {TextInput, View, ToastAndroid, Linking, Text} from "react-native";
import {Movie} from "../domain/Movie";
import {gRepository} from "../globals.js";
import NavigationActions from "react-navigation/lib-rn/NavigationActions";
import {styles} from "../style";
import {Button} from "react-native-elements";

export default class MovieDetailsActivity extends React.Component {

    constructor(props) {
        super(props);

        let movieItem: Movie = this.props.navigation.state.params.data;
        let bugData: string = "";

        if (this.props.navigation.state.params.data !== undefined)
        {
            this.state = {
                id: movieItem.id,
                title: movieItem.title,
                year: movieItem.year,
                rating: movieItem.rating,
                genres: movieItem.genres,
                cast: movieItem.cast,
                director: movieItem.director,
                bugData: ""
            };
        }
        else {
            this.state = {
                id: null,
                title: null,
                year: null,
                rating: 0,
                genres: null,
                cast: null,
                director: null,
                bugData: ""
            };
        }
    }

    render() {
        // console.log(JSON.stringify(this.state));
        return (
            <View style={styles.container}>
                <Text>
                    Title:
                </Text>
                <TextInput
                    style={{height: 40, width: 280, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(n) => this.setState({title: n})}
                    value={this.state.title}
                />

                <Text>
                    Year:
                </Text>
                <TextInput
                    style={{height: 40, width: 280, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(c) => this.setState({year: c})}
                    value={this.state.year}
                />

                <Text>
                    Rating:
                </Text>
                <TextInput
                    style={{height: 40, width: 280, borderColor: 'gray', borderWidth: 1}}
                    keyboardType='numeric'
                    onChangeText={(p: number) => this.setState({rating: p})}
                    value={this.state.rating.toString()}
                />

                <Text>
                    Genres:
                </Text>
                <TextInput
                    style={{height: 40, width: 280, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(f) => this.setState({genres: f})}
                    value={this.state.genres.toString()}
                />

                <Text>
                    Cast:
                </Text>
                <TextInput
                    style={{height: 40, width: 280, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(f) => this.setState({cast: f})}
                    value={this.state.cast.toString()}
                />

                <Text>
                    Director:
                </Text>
                <TextInput
                    style={{height: 40, width: 280, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(f) => this.setState({director: f})}
                    value={this.state.director.toString()}
                />

                <Button
                    title="Save !!"
                    onPress={() => this.saveCallback()}
                />


                <Text>
                    Bug info:
                </Text>
                <TextInput
                    style={{height: 40, width: 280, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(g) => this.setState({bugData: g})}
                    value={this.state.bugData.toString()}
                />

                <Button
                    title="Report a bug"
                    onPress={() => this.sendEmailCallback()}
                />
            </View>
        );
    }

    saveData(): boolean {

        if (this.state.id === null ||
            this.state.title === "" ||
            this.state.year === "" ||
            this.state.genres === "" ||
            this.state.rating === null ||
            this.state.cast === "" ||
            this.state.director === ""
        ) {
            ToastAndroid.show('All fields are required. None can be empty.', ToastAndroid.LONG);
            return false;
        }

        let movie: Movie = new Movie(
            this.state.title,
            this.state.year,
            this.state.genres,
            this.state.rating,
            this.state.cast,
            this.state.director
        );

        movie.id = this.state.id;

        gRepository.update(movie);

        return true;
    }

    saveCallback() {
        let dataSaved: boolean = this.saveData();

        if (dataSaved) {
            this.props.navigation.state.params.onGoBack();
            this.props.navigation.dispatch(NavigationActions.back())
        }
    }

    sendEmailCallback() {
        let body: string = this.state.bugData;

        Linking.openURL("mailto:ecaterina.carazan@gmail.com?subject=Report a bug&body=" + body);

    }
}