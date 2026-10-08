import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { liked } from '../store/favoritesSlice';
// import { useThemeStore } from '../zustandStore/useThemeStore';

// const SelectFavoritesCount = () => {

//     const { theme, changeOnDark, changeOnLight } = useThemeStore()

//     return (
//         <div>

//         </div>
//     );
// }

export default function Favorites() {

    const { posts } = useSelector(state => state.favouritesReducer)

    const dispatch = useDispatch()

    return (
        <div>
            {
                posts.map((post) => (
                    <Card key={post.length} style={{ width: '207px' }} onClick={() => dispatch(liked())}>
                        <h3>{post}</h3>
                    </Card>
                ))
            }
        </div>
    )
}
