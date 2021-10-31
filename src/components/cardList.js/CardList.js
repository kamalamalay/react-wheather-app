
import CardListItem from '../cardItem/cardListItem';

import './cardList.css';

const CardList = () => {
    
    const cards = [];
    const today = new Date()

    const renderCards = (days) => {
        for (let i = 0; i < days; i++) {
            const date = new Date()
            date.setDate(today.getDate() - i)
            cards.push(<CardListItem key={date.getDate()} date={date} />);
        }
    }

    renderCards(5);
    
    return (
            <ul className="card_list">
                {cards}
            </ul>
    )
}
export default CardList;