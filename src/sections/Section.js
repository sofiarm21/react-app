import React, { Component } from 'react';

import Divider from '../components/Divider'
import theme from '../styles/theme'

class Section extends Component {
    render() {
        return (
            <div>
                <Divider color={theme.colors.blue} />
                <p>
                    Section
                    {' '}
                    {this.props.section}
                </p>
            </div>
        )
    }
}

export default Section
