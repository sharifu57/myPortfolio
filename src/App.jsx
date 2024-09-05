import './App.css'
import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes'

function SpinnerWithDelay({delay}) {
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, delay)
  })

  if (loading){
    return (
      <div className="spinner-container">
        <ClipLoader color="#123abc" loading={true} size={50} />
      </div>
    )
  }

  return null
}



function App() {

  return (
    <Suspense fallback={<SpinnerWithDelay delay={3000}/>}>
      <RouterProvider router={router}/>
    </Suspense>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

export default App
