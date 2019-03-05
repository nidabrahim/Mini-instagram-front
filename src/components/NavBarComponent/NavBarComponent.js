import React, { Component, Fragment } from 'react';
import './style.css';
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import { Link } from "react-router-dom";

class NavBarComponent extends Component{
  constructor(props){
    super(props);

    this.state = {
      mnuShow:false
    };
    this.closeMnu = this.closeMnu.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', ()=> {
      console.log("begin", arguments);
      this.closeMnu();
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  toggleShow(){
    this.setState({mnuShow:!this.state.mnuShow});
  }

  closeMnu(){
    if(this.state.mnuShow){
      this.setState({mnuShow:false});
    }
  }

  scrollToTop() {
    scroll.scrollToTop();
  }



  render(){
    const show = this.state.mnuShow ? "show" : "";
    console.log("isAuthenticated : ",this.props.childProps.isAuthenticated);
    return (
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${this.props.navBarShrink}`} id="mainNav">
        <div className="container">
          <Link className="navbar-brand js-scroll-trigger" to="/">Insta ZZ</Link>
          <button onClick={this.toggleShow.bind(this)} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className={`collapse navbar-collapse ${show}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

              {
                this.props.childProps.isAuthenticated ?
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/explore">Explore</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/profile">Profile</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" onClick={this.props.logout} >Logout</a>
                  </li> 
                </Fragment>
                :  
                <Fragment>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/login">Sign in</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link js-scroll-trigger" to="/signup">Sign up</Link>
                  </li>
                </Fragment> 
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default NavBarComponent;