import ListGroup from "./components/ListGroup"

//components "APP"
function App(){
    let items = [
        'NewYork',
        'SanFrancisco',
        'Philippines',
        'Tokyo',
        'London',
    ]

    const handleSelect = (item:string)=>{
        console.log("Hello World")
    }
return <div> <ListGroup items={items} heading="Cities" onSelectedItem={handleSelect}/> </div>// call Message Function from Message tsx 
//each component will have their own state meaning eacg ListGroup is independent
}

export default App