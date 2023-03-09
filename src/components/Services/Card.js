const Card = ({card}) => {
    return (
    <>

         <div className="services__card">
            <div className="services__card-icon">
                <img src={card.cardIcon} alt = "Icon"/>
            </div>
            <div className="services__card-desc">
                <p className="services__card-title">
                {card.cardTitle}
                </p>
                <p className="services__card-text">
                    {card.cardText}
                </p>
            </div>
            
        </div>

       
    </>
    );
}

export default Card;