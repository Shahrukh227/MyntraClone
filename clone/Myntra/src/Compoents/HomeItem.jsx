import { useDispatch, useSelector } from "react-redux"
import { BagActions } from "../Store/bagSlice"

function HomeItem({item}) {

 const dispath =  useDispatch()

 const bagItems = useSelector(store=>store.bag)

 const element = bagItems.indexOf(item.id)  >= 0 ;
//  console.log(item.id , element)

  const handleAddToBag = ()=>{
dispath(BagActions.addToBag(item.id))
  }

  const handleRemoveToBag = ()=>{
    dispath(BagActions.removeFromBag(item.id))
  }

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
    {element ?  <button type="button" class="btn btn-add-bag btn-danger" onClick={handleRemoveToBag}>Remove</button>
     : <button type="button" class="btn btn-add-bag btn-success" onClick={handleAddToBag}>Add to Bag</button>}
    
    </div>
  )
}

export default HomeItem
