import React, {Component} from 'react';
import {View, Text,TouchableHighlight} from "react-native";
import IndexModel from "./module/Index";
import ListModel from "./module/List";


const indexModel = new IndexModel(),
      listModel = new ListModel()
export default class Calls extends Component {
    constructor(props) {
        super();
    }

    // componentDidMount() {
    //     const courses = this.getCourseData()
    //
    //     this.getCourses('all')
    //     this.getCourseFields()
    // }

    getCourseData() {
        indexModel.getCourseData()
            .then(data => console.log((data)))
    }

    getCourses(field) {
        listModel.getCourses(field)
            .then(data => console.log(data))
    }

    getCourseFields() {
        listModel.getCourseFields()
            .then(data => console.log(data))
    }
    render() {
        return(
            <View>
                <TouchableHighlight
                    onPress={this.props.onClick}
                >
                    <Text>
                        {this.props.name}
                    </Text>
                </TouchableHighlight>

            </View>
        )
    }

}
