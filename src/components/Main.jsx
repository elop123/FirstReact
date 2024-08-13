import style from '../styles/Main.module.scss'
import Greeting from './Greeting'
import List from './List'
import Button from './Button'


function Main (){
    const dishes = [
        'Lasagna',
        'Pizza',
        'Pasta Carbonara',
        'Greek Musaka',
        'Broccoli Cake'
      ];

      const movies =[
        'Titanic',
        'Terminator',
        'A thousand words',
        'Bad boys',
        'After earth'
      ]

      const buttons = [
        'SmallBtn',
        'MediumBtn',
        'BigBTn'   ]
    return(
        <>
        <div className={style.mydiv}>
        <Greeting name='Elena' />
        <Greeting name='Makka' />
        <Greeting name='Loveleen' />
        <h2>It is my First react component</h2>
        <p  className={style.myp}>Learning React is challenging  &#128549;</p>
        <div className={style.flexdiv}>
        <h2 className={style.myH2}>Dish List:</h2>
        <List dishes={dishes} />
        <h2 className={style.myH2}>Movie List:</h2>
        <List dishes={movies} />
        </div>
        {buttons.map((text, index) => (
            <Button key={index} text={text} />
        ))}
        </div>
        </>
    )

}

export default Main