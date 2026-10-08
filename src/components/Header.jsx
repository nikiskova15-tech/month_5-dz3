import { Button } from 'antd';
import { useThemeStore } from '../zustandStore/useThemeStore';
import { selectFavoritesCount } from '../store/favoritesSlice';
import { useSelector } from 'react-redux';

const Header = () => {

    const favoritesCount = useSelector(selectFavoritesCount);

    const { theme, toggleTheme } = useThemeStore();

    return (
        <header style={{ display: 'flex', gap: '32px', alignItems: 'center', justifyContent: 'space-between' }}>
            <h2>Магазин</h2>
            <span>
                Favorites: {favoritesCount} ❤️
            </span>
            <Button onClick={toggleTheme}>
                Тема: {theme}
            </Button>
        </header>
    );
}

export default Header;
