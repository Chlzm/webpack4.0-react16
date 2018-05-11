import React from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from '../actions/main'
import {DatePicker, Button, List} from 'antd-mobile';

function matchStateToProps(state) {
    //...
    return {
        state
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        ...homeActions
    }, dispatch)
}

@connect(matchStateToProps, matchDispatchToProps)
export default class List1 extends React.Component {
    constructor(options) {
        super(options);
    }

    state = {
        value: new Date
    }
    goList = () => {
        console.log(this.props)
        this.props.history.push({
            pathname: '/list'
        })
    }

    render() {

        return (
            <div>
                <Button type="primary">SSS</Button>
                <DatePicker model="date" value={new Date}>
                    <List.Item arrow="horizontal">Datetime</List.Item>
                </DatePicker>
            </div>
        )
    }
}