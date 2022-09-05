import styles from './Cities.module.scss'

export const Cities = ({ data, getData, state, setState }) => {
    return (
        <div className={styles.cities}>
            {data.map(item =>
                <div key={item.id} className={styles.cityItem}>
                    <button onClick={() => { getData(item.name); state && setState(!state); }}>
                        <span>{item.id}</span>
                        <p>{item.name}</p>
                    </button>
                </div>
            )}
        </div>
    )
}