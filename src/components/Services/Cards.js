import Card from './Card';
import CradsList from '../../assets/data/cards.json'

const Cards = ({card}) => {
    return (
    <>
        {CradsList.map((card, index) => 
                <Card key={`${card}_${index}`} card = {card}/>

            )}  
    </>
    );
}

export default Cards;