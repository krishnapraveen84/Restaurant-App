import './index.css'

import {useState} from 'react'

const DishItem = props => {
  const {dish, count, onIncreaseCount, onDecreaseCount} = props
  const {
    dishName,
    dishImage,
    dishCalories,
    dishAvailability,
    dishCurrency,
    dishDescription,
    dishPrice,
    addonCat,
  } = dish
  console.log(count)
  const [disCount, changeCount] = useState(0)
  const onClickIncrease = () => {
    changeCount(disCount + 1)
    onIncreaseCount()
  }
  const onClickDecrease = () => {
    changeCount(disCount - 1)
    onDecreaseCount()
  }
  return (
    <li className="dish-item-card">
      <div className="circle-content-card">
        <div className={`box  ${dishPrice > 10 ? 'high-rate-props' : ''}`}>
          <p
            className={`circle ${dishPrice > 10 ? 'high-rate-circle' : ''}`}
          ></p>
        </div>
        <div className="content-div">
          <h1 className="name">{dishName}</h1>
          <p className="money">
            {dishCurrency} {dishPrice}
          </p>
          <p className="description">{dishDescription}</p>
          {dishAvailability ? (
            <div className="qunatity-control-card">
              <button className="control" onClick={onClickDecrease}>
                -
              </button>
              <p className="qunatity">{disCount}</p>
              <button className="control" onClick={onClickIncrease}>
                +
              </button>
            </div>
          ) : (
            <p className="not-availble">Not Availble</p>
          )}

          {addonCat.length ? (
            <p className="customization-text">Customization Availble</p>
          ) : (
            ''
          )}
        </div>
      </div>
      <p className="calories-num calories-num-sm">{dishCalories} Calories</p>
      <div className="cal-img-card">
        <p className="calories-num calories-num-lg">{dishCalories} Calories</p>
        <img className="dish-img" src={dishImage} />
      </div>
    </li>
  )
}

export default DishItem
