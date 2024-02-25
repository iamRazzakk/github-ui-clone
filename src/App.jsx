
import { Outlet } from 'react-router-dom'
import Sidebar from './components/pages/Sidebar'
import './index.css'

function App() {

  return (
    <div className='flex text-white'>
      <Sidebar />
      <div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
