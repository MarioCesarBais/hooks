import './Content.css'
import React, { useRef } from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound'
import UseState from '../../views/examples/UseState'
import UseEffect from '../../views/examples/UseEffect'
import UseRef from '../../views/examples/UseRef'
import UseCallback from '../../views/examples/UseCallback'
import UseMemo from '../../views/examples/UseMemo'
import UseContext from '../../views/examples/UseContext'
import UseReducer from '../../views/examples/UseReducer'
import UseCustom from '../../views/examples/UseCustom'

const Content = props => (
    <main className="Content">
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home/>} />
            <Route path="/useState" caseSensitive={false} element={<UseState/>} />
            <Route path="/useEffect" caseSensitive={false} element={<UseEffect/>} />
            <Route path="/useRef" caseSensitive={false} element={<UseRef/>} />
            <Route path="/useCallback" caseSensitive={false} element={<UseCallback/>} />
            <Route path="/useMemo" caseSensitive={false} element={<UseMemo/>} />
            <Route path="/useContext" caseSensitive={false} element={<UseContext/>} />
            <Route path="/useReducer" caseSensitive={false} element={<UseReducer/>} />
            <Route path="/useCustom" caseSensitive={false} element={<UseCustom/>} />
            <Route path="*" caseSensitive={false} element={<NotFound/>} />
        </Routes>
    </main>
)

export default Content