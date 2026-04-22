import React from 'react';

function Education() {
    return ( 
                <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/education.svg' style={{width:"70%"}}/>
                    
                </div>
                <div className='col-6'>
                    <h1>Free and open market education </h1>
                    <p>Varsity, the largest online stock market education book in the world covering everyting from the basics to advance trading. </p>
                     <a href=''style={{textDecoration:"none"}}>Versity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                     <p className='mt-5 '>TradingQ&A, the most active trading and investing community in India for all your market related queries.</p>
                      <a href=''style={{textDecoration:"none"}}>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>



                </div>
                
            </div>
        
     );
}

export default Education;