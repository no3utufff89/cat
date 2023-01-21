import React from 'react';
import style from './item.module.css';


const Item = (props) => {
    /*Состояния*/
    /*Начальное состояние карточки  -не выбрана*/

    const [selected, setSelected] = React.useState(false);

    /*Состояние наведения на карточку*/

    const [hover, setHover] = React.useState(props.description)

    /*Состояние неактивного элемента*/

    const [activeCard, setActiveCard] = React.useState(props.activeItem)

    /*=========*/
    /*Кнопка*/
    const Btn = (props) => {
        return (
            <button onClick={() => handleCardClick()}
                    className={style.btn + " " + style.add_toCart_btn}> {props.text}</button>
        )
    }
    /*========*/

    /*Функции взаимодействия с элементами*/

    /*Нажатие на элемент*/

    function handleCardClick(e) {
        setSelected(!selected)
    }

    /*=========*/

    /*Наведение на элемент*/
    function handleCardHover(e) {
        if (selected === true && props.activeItem === true) {
            setHover(props.selectedDescription)
        } else if (selected === false && props.activeItem === true) {
            setHover(props.description)
        }
    }

    function handleCardNotHover(e) {
        if (selected === true) {
            setHover(props.description)
        } else if (selected === false) {
            setHover(props.description)
        }
    }


    /*=========*/
    /*=========*/

    /*Определение стиля карточки*/
    function cardClass() {
        if (props.activeItem === true && !selected)
            return (
                `${style.product_card}`
            )
        else if (props.activeItem === true && selected)
            return (
                `${style.product_card + ' ' + style.active}`
            )
        else {
            return (
                `${style.product_card + ' ' + style.disabled}`
            )
        }
    }

    /*Поведение подвала карточки*/
    function footerText() {
        if (activeCard && !selected) {
            return  (
                <>
                    {props.defaultText}
                    <Btn text={"купи"}/>
                </>
            )
        }
        else if(activeCard && selected){
            return (
                `${props.selectedText}`
            )
        }
        else {
            return (
                `${props.notActiveText}`
            )
        }
    }

    /*=========*/
    /*Определение стяля для неактивного элемента*/
    function futterClass() {
        if(props.activeItem===true){
            return(
                `${style.item_footer_text}`
            )
        }
        else if(props.activeItem!==true){
            return(
                `${style.item_footer_text + ' ' + style.disabled}`
            )
        }
    }
    /*======*/
    /*Определение стяля наведения hover эффекта*/
    function hoverStyle() {
        if (selected === true && props.activeItem === true){
            return(
                `${style.product_slogan + ' ' + style.active}`
            )
        }
        else if(selected!==true&& props.activeItem === true){
            return(
                `${style.product_slogan}`
            )
        }
        else {
            return(
                `${style.product_slogan}`
            )
        }
    }


    return (

        <li className={style.product_item}>

            <div className={cardClass()} onClick={() => handleCardClick()} onMouseEnter={() => handleCardHover()}
                 onMouseLeave={() => handleCardNotHover()}>
                <span className={hoverStyle()}>{hover}</span>
                <h3 className={style.product_title}>{props.title}</h3>
                <h4 className={style.product_taste}>{props.taste}</h4>
                <div className={style.product_aditional}>
                    <span>
                        <span className={style.amount}>{props.amount} </span>
                        порций
                    </span>


                    <span className={style.product_gift}>{props.gift}</span>
                    <span>{props.isOk}</span>
                </div>
                <div className={style.product_weight}>
                    <span className={style.weight_text}>
                       {props.weight}
                    </span>
                    <span className={style.weight_measure}>
                        кг
                    </span>
                </div>
            </div>
            <div className={style.product_item_footer}>
                <p className={futterClass()}>
                    {footerText()}
                </p>

            </div>


        </li>

    );
};


export default Item;