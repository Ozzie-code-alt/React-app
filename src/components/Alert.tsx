import{ ReactNode } from 'react'

interface Props{
    children:ReactNode // passing html to app.tsx component we can use children prop to pass children to component 
}

const Alert = ({children}: Props) => {  // destructured text in Props 
  return (
    <div className='alert alert-primary'>{children}</div>
  )
}

export default Alert