import React from 'react';
import {Movie} from "./domain/Movie";
import {View, Text, FlatList} from "react-native";
import {ListItem} from 'react-native-elements'
import {styles} from "./style";
import {gRepository} from "./globals";
import { TouchableOpacity, StyleSheet} from 'react-native';
import {Login} from './auth';
import {getLogger} from './auth';
import MovieDetailsActivity from "./activity/MovieDetailsActivity";

export default class MainActivity extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    refresh() {
        this.setState({data: gRepository.getAll()});
        this.forceUpdate();
    }

    gotoDetails(item: Movie) {
        this.props.navigation.navigate(
            'MovieDetails',
            {
                data: item,
                onGoBack: () => this.refresh(),
            },
        );
    }

    componentDidMount() {
        console.log('MainActivity: componentDidMount');

        this.setState({data: gRepository.getAll()});
    }

    componentWillUpdate() {
        console.log('MainActivity: componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('MainActivity: componentDidUpdate');
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    renderItem={({item}) =>
                        <ListItem
                            title={item.title}
                            subtitle={`${item.rating.toString()}`}
                            keyExtractor={(item, index) => index}
                            style={styles.headerText}
                            onPress={() => this.gotoDetails(item)}
                        >
                            <Text>{item => item.title}</Text>
                        </ListItem>
                    }
                />
            </View>
        );
    }

    renderScene(route, navigator) {
        console.log(`renderScene ${route.name}`);
        switch (route.name) {
            case Login.routeName:
                return <Login
                    store={this.props.store}
                    navigator={navigator}
                    onAuthSucceeded={() => this.onAuthSucceeded()}/>
            default:
                return <MovieDetailsActivity
                    store={this.props.store}
                    navigator={navigator}/>
        }
    };
    onAuthSucceeded() {
        //this.navigator.clear();
        this.navigator.push(MovieDetailsActivity.route);
    }
 }


const NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <TouchableOpacity
                    onPress={() => {
                        if (route.leftAction) route.leftAction();
                        if (index > 0) navigator.pop();
                    }}>
                    <Text style={styles.leftButton}>Back</Text>
                </TouchableOpacity>
            )
        } else {
            return null;
        }
    },

    RightButton(route, navigator, index, navState) {
        if (route.rightText) return (
            <TouchableOpacity
                onPress={() => route.rightAction()}>
                <Text style={styles.rightButton}>
                    {route.rightText}
                </Text>
            </TouchableOpacity>
        )
    },

    Title(route, navigator, index, navState) {
        return (<Text style={styles.title}>{route.title}</Text>)
    }
};
