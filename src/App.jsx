import './App.css'

function App() {
  const names = ['Lost', 'The Black Sails','Breaking Bad', 'Peaky Blinders', 'The legend of Korra','Avatar the last airbender']
  
  let listing_array = []
 for (let i=0; i<names.length; i++)
 {
  listing_array[i] = <li>{names[i]}</li>
 }
 console.log(listing_array)
  return (
    <>
      <div className='head'><h1> CSS Layout and Printing Names in a React Project with Vite</h1></div>
      <div className='list'><h3>List of some top series according to IMDB printed using for loop</h3></div>
      {/* <div className='grid-container'>
      <div class="grid-item">1</div>
      <div class="grid-item">2</div>
      <div class="grid-item">3</div>
      <div class="grid-item">4</div>
      <div class="grid-item">5</div>
      <div class="grid-item">6</div>
      <div class="grid-item">7</div>
      <div class="grid-item">8</div>
      </div> */}
      <div className="list">
        {listing_array}
      </div>
      <div className='list'>
    {/* {names.map(names=><li>{names}</li>)} */}
    </div>
      
    </>
    
  )
}

export default App
