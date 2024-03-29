import { Fragment, useState } from "react"
// import { MouseEvent } from "react";
// Props 
// {items: [], heading: string}
interface Props{
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void// Passing function prop then go to App.tsx and configure listgroup component 
}




function ListGroup({items,heading, onSelectedItem}: Props) {

// let selectedIndex = 0 // means no item is selected
// Hook allows us to built in features in react
const [selectedIndex, setSelectedIndex] = useState(-1)// this will tell us that we have state that will change overtime


// items = []
// const message = items.length ==0 ? <p>No Item </p> : null // make it here

const getMessage = () =>{
  return items.length ==0 && <p>No Item found </p> ;;    // if condition is true p tag will be rendered other if false noting will be rendered good use of ternary operator
}
// items.map(item => <li>{item}</li>)
{/* Conditional Rendering*/}

// if(items.length ==0)
// return <><h1>List</h1><p>no Item Found</p></> ; {/* Inside a Fragment*/}


//seperate function for onClick instead of inline
// event handler
// const handleClick  = (event: MouseEvent) => console.log(event)  // type anotation in typescript


    return (
      <Fragment>
        {/* use fragmentation instead* or use <>/}
             {/* this wont work because because a return will only return 1 element and this gets parsed to js as React.CreateElement('h1')*/}
        <ul className="list-group">
          <h1>{heading}</h1>
          {getMessage()} {/* {message}  render here */}
          {/* <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>  with Braces {} we can render anything dynamicallly instead of just html elements */}
          {items.map((item, index) => (
            <li
              className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
              key={item}
              // onClick={(event) => console.log(item ,index)}
              // onClick={handleClick} //
              onClick={() => {setSelectedIndex(index)
              onSelectedItem(item)

              }}
           
            >
              {item}{" "}
            </li>
          ))}
        </ul>
      </Fragment>
    );
}
export default ListGroup