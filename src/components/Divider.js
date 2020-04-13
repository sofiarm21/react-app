import React from 'react'
import {
    Row, Col
} from 'react-bootstrap'

import DividerLine from './DividerLine'

const Divider = ({
    color
}) => {
    return (
        <Row>
            <Col xs={3}>
                <DividerLine color={color} />
            </Col>
        </Row>
    )
}

export default Divider
