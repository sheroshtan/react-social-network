import React, { useState } from "react";
import '../../users/users.css';

const Pagination = ({ totalItemsCount, pageSize, currentPage, onChangePage, portionSize = 10 }) => {

    let pages = [];
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [ portionNumber, setPortionNumber ] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const pagesHtml = pages
        .filter(pageNum => pageNum >= leftPortionPageNumber && pageNum <= rightPortionPageNumber)
        .map(page => {
        return <span key={page}
                     className={currentPage === page ? 'selected-page' : ''}
                     onClick={() => onChangePage(page)}>
                     { page }
               </span>
    });

    return (
        <div className="pagination">
            { leftPortionPageNumber > 1 &&
                <button onClick={() => setPortionNumber(portionNumber - 1)}
                          className="btn pagination-control purple">
                    {"<"}
                </button> }
            {
                pagesHtml
            }
            { portionNumber !== portionCount &&
                <button onClick={() => setPortionNumber(portionNumber + 1)}
                          className="btn pagination-control purple">
                    {">"}
                </button> }
        </div>
    )
}

export default Pagination;