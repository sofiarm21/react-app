import React from 'react'

import Section from '../sections/Section'

class PageA extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Page A
                </p>
                <Section section='A' />
            </div>
        )
    }
}

export default PageA
