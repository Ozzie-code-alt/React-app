import { Fragment } from "react"

function ListGroup() {
const items = [
    'NewYork',
    'SanFrancisco',
    'Philippines',
    'Tokyo',
    'London',
]

// items.map(item => <li>{item}</li>)


    return (
        <Fragment> {/* use fragmentation instead* or use <>/}
            <h1>List</h1> {/* this wont work because because a return will only return 1 element and this gets parsed to js as React.CreateElement('h1')*/}
                <ul className="list-group">
              {/* <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li> */}
              {items.map(item => <li key={item}>{item}</li>)}
            </ul>
        </Fragment>
    )
}
export default ListGroup