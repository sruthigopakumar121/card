import React from 'react'

function Cardcomponent({data}) {
    console.log(data);
    return (   
        <>
          <section className="main-card--cointainer" >
            {
                data.map((ele)=>{
                    const {id , category ,name , description,image}= ele;
                    return(
                        <div className="card-container" key={id} >
                         
                            
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle">{id}</span>
                                    <span className="card-author">{category}</span>
                                    <h2 className="card-title">{name}</h2>
                                    <span className="card-description">
                                    {description}
                                    </span>
                                  <div className="card-read">Read</div>   
                                </div>
                               <img src={image} className="card-media"/>
                              <span className="card-tag">Order Now</span>
                            </div>
                        </div>
                    )

                })
            }
          </section>
                
                    
        </>
    )
}

export default Cardcomponent
