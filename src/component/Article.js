import React, { Component } from 'react';
import "../Article.css"
class Article extends Component {
  
    render() { 
        return (
           <diV className = "container-fluid container-fluid1">
              <div className="row">
                  <div className="col-md-6 box">
                  <h1>Earn up to $28 of crypto</h1>
                
                <p>
                Discover how specific cryptocurrencies work- and get a bit of each crypto to try out yourself.
                </p>
                <button className="btn btn1">
                    Start Earning
                </button>
                  </div>
                   <div className= "col-md-6"> 
                   <img style= {{width:"100%" , marginLeft:"200px"}} src="https://assets.coinbase.com/assets/earn-upsell-desktop.dad0f473399e16fa8c176a9599c883ea.webp"/>
                   </div>
              </div>
               
              </diV> 
          );
    }
}
 
export default Article;