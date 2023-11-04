import "./propertyList.css"

const PropertyList=()=>{
    return(
        <div className="pList">
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/252005561.webp?k=e4fedd36f4a5a34f34fca3778d826b062f2aeac236074d492fdbf5306e27ae33&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 Hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/203742984.webp?k=6cebd21957e5022a573f70f95fc00838b30dafff4a271607513771a84529f163&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartments</h1>
                    <h2>2331</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/328043039.webp?k=12d8e69b12c31007dd22dff2a9a2d8fc4fbd2ccc5066db6aa504ea018fd16bc9&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square200/252216853.webp?k=17cc980d57142cb3a93cf6c314bb2a14786bd110b5317662c9774c79275c1906&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>352 Hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/270x200/379153064.webp?k=c9f6bd5ba0791b4b8d544eb2be57e91d89adfa1bec5e9069999eb8b72b7c4a79&o=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabin</h1>
                    <h2>345 Hotels</h2>
                </div>
            </div>
        </div>
    )
};

export default PropertyList