import React from 'react';
import './IngredientCard.css';
import { Button, Card } from 'react-bootstrap';

export default function IngredientCard({ text }) {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Text>{text}</Card.Text>
                    <Button><span>&#120;</span></Button>
                </Card.Body>
            </Card>
        </div>
    )
}
