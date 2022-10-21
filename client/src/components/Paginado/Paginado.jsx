
import styles from './paginado.module.css'
import React from 'react';

export default function Paginado({ gamesPerPage, totalGames, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
        pageNumbers.push(i)
    }
console.log(totalGames)
console.log(gamesPerPage)
    return (
        <div className={styles.paginado}>
            <ul>
                {pageNumbers.map(n => (
                    <li key={n} className={styles.pageitem}>
                        <button onClick={() => paginate(n)} className={styles.pagelink}>
                            {n}
                        </button>
                    </li>
                ))} 
                
            </ul>
        </div>
    )
}