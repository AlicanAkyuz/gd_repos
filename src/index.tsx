import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reportWebVitals from 'reportWebVitals'

import { LayoutProvider } from 'LayoutProvider'
import { Main } from 'Main'
import { Repository } from 'routes'
import { NoDataView } from 'views'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LayoutProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path=":repositoryName" element={<Repository />} />
          <Route
            path="*"
            element={<NoDataView text="There's no such a page!" />}
          />
        </Routes>
      </LayoutProvider>
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
