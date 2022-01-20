function Images({ url, name }) {
    return (
        <div className="col-sm-6 col-md-4">
            <div className="box">
                <div className="option_container">
                    <div className="options">
                        <a href={url} download={name} target="_blank" rel="noreferrer" className="option1">
                            DOWNLOAD
                        </a>

                    </div>
                </div>
                <div className="img-box">
                    <img src={url} alt={name} />
                </div>
            </div>
        </div>

    );
}
export default Images;
