import { Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { liked } from '../store/favoritesSlice';
import { useThemeStore } from '../zustandStore/useThemeStore';

export default function Favorites() {

    const { value, items } = useSelector(state => state.favouritesReducer)

    const dispatch = useDispatch()

    const { theme, toggleTheme } = useThemeStore()

    return (
        <div>
            <Button onClick={toggleTheme} type='primary'> Change theme to {theme}</Button>
            {
                items.map((i) => (
                    <Card key={i.length} onClick={() => dispatch(liked)}
                        style={{ width: '207px', display: 'flex', justifyContent: 'space-between' }}>
                        <h3>{i}</h3>
                        <span>{value}</span>
                    </Card>
                ))
            }
        </div>
    )
}