function Images({ url, name }) {
    return (
        <div className="col" style={{ height: '400px', padding: '10px' }}>
            <img className="image" src={url} alt={name} style={{ height: '100%', objectFit: 'cover', width: '100%' }} />
            <div className="middle">
                <a className="btn btn-dark" href={url} download={name} target="_blank" rel="noreferrer">DOWNLOAD</a>
            </div>
        </div >

    );
}
export default Images;
