import React from "react";
import './card-list.styles.css'
import {Card} from "../card/card.component";

//Props is like parameters we can pass it to the functional component

export const CardList = props => {
     return <div className="card-list">
          {props.monsters.map(mon => <Card key={mon.id} monsters={mon}></Card>)}
     </div>
    // return <div> Favourite Car is {props.name} {props.children}</div>
};

// Same as this
// function CardList() {
//   return (
//     <div>
//           My name is Binuka.
//     </div>
//   );
// }
//
// export default CardList;