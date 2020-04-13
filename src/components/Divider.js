import React from 'react'
import {
    Row, Col
} from 'react-bootstrap'

const Divider = ({
    color
}) => {
    return (
        <Row>
            <Col xs={3} style={{ backgroundColor: color }}>
                d
            </Col>
        </Row>
    )
}

export default Divider
