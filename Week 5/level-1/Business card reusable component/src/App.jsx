import './App.css'

function App() {
  

  return (
    <div>
      <Template><BusinessCard/></Template>
    </div>
  )
}
function Template({children}){
  return <div style={{backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    // Smooth, modern elevation
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)'}}>
    {children}
    {children}

  </div>
}
function BusinessCard(){
  return <div style={{background: "lightblue" , padding: "20px" ,border: "1px solid black",width:"200px"}}>
    <h1>Lalit</h1>
    <text>Student and React andy</text>
    <br />
    <h3>Intrest</h3>
    <text>Open source</text>
    <br />
    <text>React Dev</text>
    <br />
    <text>DSA</text>
    <br />
<button style={{background:"cyan",padding:"2px", margin:"5px"}}>Linkedin</button>
<button style={{background:"cyan", padding:"2px", margin:"5px"}}>Github</button>
  </div>
}

export default App
