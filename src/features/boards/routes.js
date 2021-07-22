import Boards from './components/Boards'
import BoardDetails from './components/BoardDetails'

export const BoardRoutes = [
    {
        path: '/boards',
        component: Boards
    },
    {
        path: '/board/:name/details',
        name: 'boardDetails',
        component: BoardDetails
    }
]
