import React from 'react';
import './IngredientCard.css';
import { Button, Card } from 'react-bootstrap';

export default function IngredientCard({ text, index, removeIngredient }) {
    return (
        <div className="text-center ingredientBtn">
            <Card className='ingredient-card'>
                <Card.Body>
                    <Card.Text>{text}</Card.Text>
                    <Button variant='link' size='sm' onClick={() => { removeIngredient(index) }}><span>&#120;</span></Button>
                </Card.Body>
            </Card>
        </div>
    )
}
