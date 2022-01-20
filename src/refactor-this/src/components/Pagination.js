/* eslint-disable no-script-url */
function Pagination({ category, page }) {
    return (
        <div className="btn-box">
            <div className="pagination">
                <a href={`/?category=${category}&page=${page > 1 ? Number(page) - 1 : 1}`}>&laquo;</a>

                <a href={page > 2 ? "javascript:void(0)" : `/?category=${category}&page=${Number(page) + 1}`}>&raquo;</a>
            </div>
        </div>
    );
}
export default Pagination;
