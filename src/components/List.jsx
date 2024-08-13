import style from '../styles/List.module.scss'

function List ({dishes}){
    return(
     <di>
      <ul className={style.myUl}>
      {dishes.map((dish, index) => (
        <li key={index}>{dish}</li>
      ))}
    </ul>
     </di>
     
  );
}

export default List