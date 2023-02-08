
import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js'
function App() {
  const nameChange=()=>{
    const names = ['harish','parthiv','abhinav'];
    const count = Math.floor(Math.random() *3)
    return (names[count]);
  }
  return (
    <div className="App">
      

      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
