import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Component1 from './Component1.jsx'
import Comp2 from './comp2.jsx'
import './index.css'
import { RecoilRoot } from 'recoil'
// recoilRoot is a component that we need to wrap around all the components that we want to use recoil in

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* get the RecoilRoot from the recoil package and wrap all the componenents inside it */}
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <Component1 />
        <Comp2 />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
)
