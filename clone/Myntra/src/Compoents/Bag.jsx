import Bagsummary from "./Bagsummary"
import BagItems from "./BagItems"
import {useSelector} from "react-redux"

function Bag() {

const bagItems =  useSelector(store=>store.bag);
const items = useSelector(store=>store.items);

const finalItems = items.filter((item)=> {
  const itemIndex = bagItems.indexOf(item.id);
  return itemIndex >= 0;
})



  return (
    <div>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.map((item)=> <BagItems item={item}/>)}
         
        </div>
        <div className="bag-summary">
          {/* {finalItems.map((item)=> )} */}
          <Bagsummary />
        </div>

      </div>
    </main>
    </div>
  )
}

export default Bag
