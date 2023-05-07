// extension ts for typscript files, and tsk for react components files
// two ways to create a react component, we can use a js function components or class components - function are the recommended approach

//PascalCasing 
// we gon decribe what the UI is gonna look like using this component
function Message(){
    // jsx: javascript XML
    // jsx allows us to create dynamic content 
   const name = "Mosh" // this is dynamic ? learn more about dynamic and static
return <h1>Hello World {name}</h1>
}

export default Message;

