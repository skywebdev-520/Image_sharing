function Pagination({ category, page }) {
    return (
        <nav>
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href={`/?category=${category}&page=${page > 1 ? Number(page) - 1 : 1}`}>Previous</a></li>
                <li className="page-item"><a className="page-link" href={`/?category=${category}&page=${Number(page) + 1}`}>Next</a></li>
            </ul>
        </nav>
    );
}
export default Pagination;
