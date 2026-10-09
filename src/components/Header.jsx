import { Button } from 'antd';
import { useThemeStore } from '../zustandStore/useThemeStore';
import { useSelector } from 'react-redux';

const Header = () => {

    const { theme, toggleTheme } = useThemeStore();

    const { items } = useSelector(state => state.favouritesReducer);

    return (
        <header style={{ display: 'flex', gap: '32px', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2>Магазин</h2>
            <span>
                Favorites: {items.filter(item => item.isLiked).length} ❤️
            </span>
            <Button onClick={toggleTheme}>
                Тема: {theme}
            </Button>
        </header>
    );
}

export default Header;
