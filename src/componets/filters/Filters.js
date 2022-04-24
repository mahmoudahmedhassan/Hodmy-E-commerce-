import { React } from 'react'
import classes from './style.module.css'
function Filters({ setSerach, serach, setSelectCategory, selectCategory }) {

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
                        value={selectCategory}
                        onChange={(e) => {setSelectCategory(e.target.value)}}
                    > 
                       <option value="">All</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="women's clothing">Women's clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="men's clothing"> Men's clothing</option>

                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filters