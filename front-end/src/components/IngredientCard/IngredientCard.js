import React from 'react';
import './IngredientCard.css';
import { Button, Card } from 'react-bootstrap';

export default function IngredientCard({ text, index, removeIngredient }) {
    return (
        <Card className='ingredient-card'>
            <Card.Body>
                <Card.Text>{text}</Card.Text>
                <Button variant='danger' onClick={() =>{removeIngredient(index)}}><span>&#120;</span></Button>
            </Card.Body>
        </Card>
    )
}
