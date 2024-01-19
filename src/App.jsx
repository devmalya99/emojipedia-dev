
import './App.css'
import emojis from './emojipedia'
import Card from './Components/Card'


function emojiCard(emoji)
{
  return (
   <Card 
   
     id={emoji.id}
     key={emoji.id}
     emoji={emoji.emoji}
     name={emoji.name}
     meaning={emoji.meaning}
   />

  )
}


function App() {

  return (
    <>
      <div>
      <h1>
        <span>EMOJIPEDIA</span>
      </h1>

      <dl className="dictionary">
      {emojis.map(emojiCard)}
      </dl>
    </div>
    </>
  )
}

export default App
