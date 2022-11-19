import { combineReducers } from 'redux'

import filters from './filters-reducer'
import tabs from './tabs-reducer'

export default combineReducers({ filters, tabs })
