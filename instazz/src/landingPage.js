import React, { Component } from 'react';

import 'https://fonts.googleapis.com/css?family=Poppins:400,600|Roboto:400,400i,500';
import './css/font-awesome.min.css';
import './css/bootstrap.css';
import './css/magnific-popup.css';
import './css/nice-select.css';
import './css/linearicons.css';
import './css/hexagons.min.css';
import './css/owl.carousel.css';
import './css/main.css';

import './js/vendor/jquery-2.2.4.min.js';
import './css/main.css';
import './css/main.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
import './js/tilt.jquery.min.js';
import './js/vendor/bootstrap.min.js';
import 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA';
import './js/easing.min.js';
import './js/hoverIntent.js';
import './js/superfish.min.js';
import './js/jquery.ajaxchimp.min.js';
import './js/jquery.magnific-popup.min.js';
import './js/owl.carousel.min.js';
import './js/owl-carousel-thumb.min.js';
import './js/hexagons.min.js';
import './js/jquery.nice-select.min.js';
import './js/waypoints.min.js';
import './js/mail-script.js';
import './js/main.js';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';


library.add(faIgloo);

class LangingPage extends Component {
  render() {
    return (
      <div className="LangingPage">

	{/* <header id="header">
		<div class="container main-menu">
			<div class="row align-items-center justify-content-between d-flex">
				<div id="logo">
					<a href="index.html"><img src="img/logo.png" alt="" title=""  width="150"/></a>
				</div>
				<nav id="nav-menu-container">
					<ul class="nav-menu">
						<li class="menu-active"><a href="index.html">Home</a></li>
						<li><a href="about.html">About</a></li>
						<li><a href="contact.html">Sign in</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>

	<section class="home-banner-area">
		<div class="container">
			<div class="row fullscreen d-flex align-items-center justify-content-between">
				<div class="home-banner-content col-lg-6 col-md-6">
					<h1>
						InstaZz <br> Share your memories
					</h1>
					<p>This is a photo and video-sharing social networking service. The app allows users to upload photos and videos to the service, which can be edited with various filters, and organized with tags and location information</p>
					<div class="download-button d-flex flex-row justify-content-start">
						<div class="buttons flex-row d-flex">
							<i class="fa fa-apple" aria-hidden="true"></i>
							<div class="desc">
								<a href="#">
									<p>
										<span>Available</span> <br>
										on App Store
									</p>
								</a>
							</div>
						</div>
						<div class="buttons dark flex-row d-flex">
							<i class="fa fa-android" aria-hidden="true"></i>
							<div class="desc">
								<a href="#">
									<p>
										<span>Available</span> <br>
										on Play Store
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="banner-img col-lg-4 col-md-6">
					<img class="img-fluid shadow" src="img/screen.jpg" alt="">
				</div>
			</div>
		</div>
	</section>

	<section class="fact-area">
		<div class="container">
			<div class="fact-box">
				<div class="row align-items-center">
					<div class="col single-fact">
						<h2>100K+</h2>
						<p>Total Downloads</p>
					</div>
					<div class="col single-fact">
						<h2>10K+</h2>
						<p>Positive Reviews</p>
					</div>
					<div class="col single-fact">
						<h2>50K+</h2>
						<p>Daily Visitors</p>
					</div>
					<div class="col single-fact">
						<h2>0.02%</h2>
						<p>Uninstallation Rate</p>
					</div>
					<div class="col single-fact">
						<h2>15K+</h2>
						<p>Pro User</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="about-area">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-5 home-about-left">
					<img class="img-fluid shadow" src="img/iphone.png" alt="">
				</div>
				<div class="offset-lg-1 col-lg-5 home-about-right">
					<h1>
						We Believe in <br>
						Connecting people<br>
						From around
						The World
					</h1>
					<p>	</p>
					<a class="primary-btn text-uppercase" href="#">Get Details</a>
				</div>
				<div class="col-lg-6 home-about-right home-about-right2">
					<h1>
						Join us Now <br>
						For Free
					</h1>
					<p></p>
					<div class="download-button d-flex flex-row justify-content-start">
						<div class="buttons flex-row d-flex">
							<i class="fa fa-apple" aria-hidden="true"></i>
							<div class="desc">
								<a href="#">
									<p>
										<span>Available</span> <br>
										on App Store
									</p>
								</a>
							</div>
						</div>
						<div class="buttons dark flex-row d-flex">
							<i class="fa fa-android" aria-hidden="true"></i>
							<div class="desc">
								<a href="#">
									<p>
										<span>Available</span> <br>
										on Play Store
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-5 home-about-left">
					<img class="img-fluid shadow" src="img/iphone.png" alt="">
				</div>
			</div>
		</div>
	</section>


	<section class="screenshot-area section-gap-top">
		<div class="container">
			<div class="row d-flex justify-content-center">
				<div class="col-lg-6">
					<div class="section-title text-center">
						<h2>Featured Screens</h2>
					</div>
				</div>
			</div>
			<div class="row">
				<!--<div class="owl-carousel owl-screenshot">-->
					<!---->
					<!--&lt;!&ndash;<div class="single-screenshot">&ndash;&gt;-->
						<!--&lt;!&ndash;<img class="img-fluid" src="img/screenshots/s2.png" alt="">&ndash;&gt;-->
					<!--&lt;!&ndash;</div>&ndash;&gt;-->
					<!--&lt;!&ndash;<div class="single-screenshot">&ndash;&gt;-->
						<!--&lt;!&ndash;<img class="img-fluid" src="img/screenshots/s3.png" alt="">&ndash;&gt;-->
					<!--&lt;!&ndash;</div>&ndash;&gt;-->
					<!--&lt;!&ndash;<div class="single-screenshot">&ndash;&gt;-->
						<!--&lt;!&ndash;<img class="img-fluid" src="img/screenshots/s4.png" alt="">&ndash;&gt;-->
					<!--&lt;!&ndash;</div>&ndash;&gt;-->
				<!--</div>-->
				<div class="single-screenshot">
					<img class="img-fluid" src="img/1_xV2VRijRJ7In2Yq9G8nrkw.png" alt="">
				</div>
			</div>
		</div>
	</section>

	<br>
	<br>

	<section class="contact-page-area section-gap">
		<div class="container">
			<div class="row">
				<div class="map-wrap" style="width:100%; height: 445px;" id="map"></div>
				<div class="col-lg-4 d-flex flex-column address-wrap">
					<div class="single-contact-address d-flex flex-row">
						<div class="icon">
							<span class="lnr lnr-home"></span>
						</div>
						<div class="contact-details">
							<h5>ISIMA, UCA</h5>
							<p>1 Rue de la Chebarde, 63178 Aubière</p>
						</div>
					</div>
					<div class="single-contact-address d-flex flex-row">
						<div class="icon">
							<span class="lnr lnr-phone-handset"></span>
						</div>
						<div class="contact-details">
							<h5>0 66 77 88 99</h5>
							<p>Mon to Fri 9am to 6 pm</p>
						</div>
					</div>
					<div class="single-contact-address d-flex flex-row">
						<div class="icon">
							<span class="lnr lnr-envelope"></span>
						</div>
						<div class="contact-details">
							<h5>instazz@isima.com</h5>
							<p>Send us your request anytime!</p>
						</div>
					</div>
				</div>
				<div class="col-lg-8">
					<form class="form-area " id="myForm" action="mail.php" method="post" class="contact-form text-right">
						<div class="row">
							<div class="col-lg-6 form-group">
								<input name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'"
									   class="common-input mb-20 form-control" required="" type="text">

								<input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
									   onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" class="common-input mb-20 form-control"
									   required="" type="email">

								<input name="subject" placeholder="Enter your subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your subject'"
									   class="common-input mb-20 form-control" required="" type="text">
							</div>
							<div class="col-lg-6 form-group">
								<textarea class="common-textarea form-control" name="message" placeholder="Messege" onfocus="this.placeholder = ''"
										  onblur="this.placeholder = 'Messege'" required=""></textarea>
							</div>
							<div class="col-lg-12 d-flex justify-content-between">
								<div class="alert-msg" style="text-align: left;"></div>
								<button class="primary-btn" style="float: right;">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
	<br>
	<br>

	<footer class="footer-area section-gap">
		<div class="container">
			<div class="row">
				<div class="col-lg-2 col-md-6 single-footer-widget">
					<h4>Top Products</h4>
					<ul>
						<li><a href="#">Managed Website</a></li>
						<li><a href="#">Manage Reputation</a></li>
						<li><a href="#">Power Tools</a></li>
						<li><a href="#">Marketing Service</a></li>
					</ul>
				</div>
				<div class="col-lg-2 col-md-6 single-footer-widget">
					<h4>Quick Links</h4>
					<ul>
						<li><a href="#">Jobs</a></li>
						<li><a href="#">Brand Assets</a></li>
						<li><a href="#">Investor Relations</a></li>
						<li><a href="#">Terms of Service</a></li>
					</ul>
				</div>
				<div class="col-lg-2 col-md-6 single-footer-widget">
					<h4>Features</h4>
					<ul>
						<li><a href="#">Jobs</a></li>
						<li><a href="#">Brand Assets</a></li>
						<li><a href="#">Investor Relations</a></li>
						<li><a href="#">Terms of Service</a></li>
					</ul>
				</div>
				<div class="col-lg-2 col-md-6 single-footer-widget">
					<h4>Resources</h4>
					<ul>
						<li><a href="#">Guides</a></li>
						<li><a href="#">Research</a></li>
						<li><a href="#">Experts</a></li>
						<li><a href="#">Agencies</a></li>
					</ul>
				</div>
				<div class="col-lg-4 col-md-6 single-footer-widget">
					<h4>Newsletter</h4>
					<p>You can trust us. we only send promo offers,</p>
					<div class="form-wrap" id="mc_embed_signup">
						<form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
						 method="get" class="form-inline">
							<input class="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '"
							 required="" type="email">
							<button class="click-btn btn btn-default"><span class="lnr lnr-arrow-right"></span></button>
							<div style="position: absolute; left: -5000px;">
								<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text">
							</div>

							<div class="info"></div>
						</form>
					</div>
				</div>
			</div>
			<div class="footer-bottom row align-items-center">
				<p class="footer-text m-0 col-lg-6 col-md-12">
				Copyright &copy;<script>document.write(new Date().getFullYear());</script>
				</p>
				<div class="col-lg-6 col-md-6 social-link">
					<div class="download-button d-flex flex-row justify-content-end">
						<div class="buttons gray flex-row d-flex">
							<i class="fa fa-apple" aria-hidden="true"></i>
							<div class="desc">
								<a href="#">
									<p>
										<span>Available</span> <br>
										on App Store
									</p>
								</a>
							</div>
						</div>
						<div class="buttons gray flex-row d-flex">
							<i class="fa fa-android" aria-hidden="true"></i>
							<div class="desc">
								<a href="#">
									<p>
										<span>Available</span> <br>
										on Play Store
									</p>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
 */}


      </div>
    );
  }
}

export default LangingPage;

