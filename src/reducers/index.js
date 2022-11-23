import { combineReducers } from 'redux'

import filters from './filters-reducer'
import tabs from './tabs-reducer'
import tickets from './tickets-reducer'

export default combineReducers({ filters, tabs, tickets })
