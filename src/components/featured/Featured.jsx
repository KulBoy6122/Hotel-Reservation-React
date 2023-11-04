import "./featured.css"

const Featured=()=>{
    return (
        <div className="featured">
            <div className="featureItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/270x200/481481762.jpg?k=490cbdf69efe4b7c7fda9b0f98ba91c422ae868a113eb2b8ee6d9d14d4448879&o=" alt="" className="featureImg" />
                <div className="featureTitles">
                    <h1>Dublin</h1>
                    <h2>123 Products</h2>
                </div>
            </div>
            <div className="featureItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/270x200/203742984.jpg?k=6cebd21957e5022a573f70f95fc00838b30dafff4a271607513771a84529f163&o=" alt="" className="featureImg" />
                <div className="featureTitles">
                    <h1>Austin</h1>
                    <h2>724 Products</h2>
                </div>
            </div>
            <div className="featureItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/270x200/387947506.jpg?k=d76fd5a587646c9081dc80f34756e2cdb929bae8c8d5d5e83a35778724485abc&o=" alt="" className="featureImg" />
                <div className="featureTitles">
                    <h1>Roni</h1>
                    <h2>928 Products</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured

