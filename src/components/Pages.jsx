import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for(let i = 0; i<pageCount; i++){
        pages.push(i + 1)
    }

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {pages.map(page=>
                        <li key={page} class="page-item"><a class="page-link" onClick={()=>device.setPage(page)}>{page}</a></li>
                    )}
                </ul>
            </nav>
        </div>
    );
});

export default Pages;