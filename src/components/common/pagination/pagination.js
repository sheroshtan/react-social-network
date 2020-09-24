import React from "react";
import '../../users/users.css';

const Pagination = ({ totalUsersCount, pageSize, currentPage, onChangePage }) => {

    let pages = [];
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const pagesHtml = pages.map(page => {
        return <span key={page}
                     className={currentPage === page ? 'selected-page' : ''}
                     onClick={() => onChangePage(page)}>
                     { page }
               </span>
    });

    return (
        <div className="users-pagination">
            {
                pagesHtml
            }
        </div>
    )
}

export default Pagination;