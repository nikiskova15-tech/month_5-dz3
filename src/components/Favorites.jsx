import { Card, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/favoritesSlice';

export default function Favorites() {

    const { items } = useSelector(state => state.favouritesReducer)

    const dispatch = useDispatch()

    return (
        <div style={{  display: 'flex', gap: '15px' }}>
            {
                items.map((i) => (
                    <Card key={i.id} style={{ width: '207px', backgroundColor: 'light-grey' }}>
                        <h3>{i.name}</h3>
                        <Button onClick={() => dispatch(toggleFavorite(i))}>
                            {items.some(item => item.id === i.id) ? "❤️" : "🤍"}
                        </Button>
                    </Card>
                ))
            }
        </div>
    )
}
