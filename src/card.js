function Card(props){
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.priceData.word}</h5>
            <h6 className="card-price text-center">${props.priceData.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul"> 
              {
                props.priceData.details.map((element) => {
                  return <li className={`${element.onmute ? `text-muted` : ``}${element.onbold ? `fw-bold` : ``}`}><i className={element.onmute ? `fas fa-times` : `fas fa-check`}></i> <span className={element.stbold ? `fw-bold` : ``}>{element.strong} </span>{element.users}</li>
                })
              }
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card;        