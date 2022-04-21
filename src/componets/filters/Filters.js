import { React } from 'react'
import classes from './style.module.css'
function Filters({ setSerach,serach,setSelectCategory }) {

    return (
        <div className={classes.filters}>
            <h1> serach &amp; filter</h1>

            <div className={classes.filters_container}>
                <div className={classes.serach}>
                    <input
                        type="text"
                        placeholder='serach'
                        value={serach}
                        onChange={(e) => setSerach(e.target.value)}
                    />
                </div>

                <div className={classes.filters_category}>
                    <select name="filter"
                     onChange={(e) => setSelectCategory(e.target.value)}
                     >
                        <option value="">all</option>
                        <option value="jewelery">jewelery</option>
                        <option value="women's clothing">women's clothing</option>
                        <option value="electronics">electronics</option>
                        <option value="men's clothing"> men's clothing</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filters