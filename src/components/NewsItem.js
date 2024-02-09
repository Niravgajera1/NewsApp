// import React, { Component } from 'react'

// export default class NewsItem extends Component {
//     render() {
//         let {title , description , imgeUrl,newsUrl} = this.props;
//         return ( 
//             <div className='my-3'>
//                 <div className="card" style={{width: "18rem"}}>
//                     <img src={imgeUrl?imgeUrl :"https://i.insider.com/65c2516c43bb77284ba3f7dd?width=1200&format=jpeg"} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}...</h5>
//                         <p className="card-text">{description}...</p>
//                         <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem", minHeight:"500px"}}>
                    <img src={imageUrl?imageUrl :"https://i.insider.com/65c2516c43bb77284ba3f7dd?width=1200&format=jpeg"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;




