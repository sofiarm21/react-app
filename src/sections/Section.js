import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <p>
                Section
                {' '}
                {this.props.section}
            </p>
        )
    }
}

export default Section
