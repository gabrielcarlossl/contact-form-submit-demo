import './App.css'

function App() {


  return (
    <>
      <h1>Formulário:</h1>
      <form method="POST" action="https://formsubmit.co/carlosgcsljp@gmail.com" encType="multipart/form-data">
        <label htmlFor="">Nome:</label>
        <input type="text" name="name" placeholder='Digite seu nome' />
        <label htmlFor="">Email:</label>
        <input type="email" name="email" placeholder="Your email" />
        <textarea name="message" placeholder="Details of your problem"></textarea>
        <input type="file" name="attachment" accept="image/png, image/jpeg" />
        <button type="submit">Send Test</button>
      </form>
    </>
  )
}

export default App
