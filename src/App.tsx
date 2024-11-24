import "./App.css";
import "./components/css/content.responsive.css";
import "./components/css/pjg1ebb.css";
import "./components/css/siteground-optimizer-combined-css-4b0115998f20688b4740a0f88dce496e.css";
import "./components/css/soleil-blog-style-band-responsive.min.css";
import "./components/css/soleil-blog-style-classic-responsive.min.css";
import "./components/css/soleil-blog-style-custom-responsive.min.css";
import "./components/css/soleil-blog-style-excerpt-responsive.min.css";
import "./components/css/soleil-blog-style-masonry-responsive.min.css";
import "./components/css/soleil-blog-style-portfolio-responsive.min.css";
import "./components/css/soleil-elementor-responsive.min.css";
import "./components/css/soleil-gutenberg-general-responsive.min.css";
import "./components/css/soleil-gutenberg-responsive.min.css";
import "./components/css/soleil-responsive.min.css";
import "./components/css/soleil-trx-addons-additional-responsive-1.min.css";
import "./components/css/soleil-trx-addons-additional-responsive-2.min.css";
import "./components/css/soleil-trx-addons-additional-responsive-3.min.css";
import "./components/css/soleil-trx-addons-qw-extension-responsive.min.css";
import "./components/css/soleil-trx-addons-responsive.min.css";
import "./components/css/soleil-woocommerce-responsive.min.css";
import "./components/css/trx_addons-cpt_layouts-responsive.min.css";
import "./components/css/trx_addons-cpt_services-responsive.min.css";
import "./components/css/trx_addons-elementor-responsive.min.css";
import "./components/css/trx_addons-gutenberg-responsive.min.css";
import "./components/css/trx_addons-mouse-helper-responsive.min.css";
import "./components/css/trx_addons-responsive.min.css";
import "./components/css/trx_addons-reviews-responsive.min.css";
import "./components/css/trx_addons-sc-responsive.min.css";
import "./components/css/trx_addons-sc_form-responsive.min.css";
import "./components/css/trx_addons-sc_icons-responsive.min.css";
import "./components/css/trx_addons-sc_layouts-cart-responsive.min.css";
import "./components/css/trx_addons-sc_layouts-logo-responsive.min.css";
import "./components/css/trx_addons-sc_layouts-menu-responsive.min.css";
import "./components/css/trx_addons-sc_socials-responsive.min.css";
import "./components/css/trx_addons-widget_slider-responsive.min.css";
import "./components/css/trx_addons-woocommerce-responsive.min.css";
import "./components/css/woocommerce-smallscreen.min.css";
import "./components/css/www-player.css";
import Header from "./components/Header";
import PageContent from "./components/PageContent";

function App() {
	return (
		<div className='body_wrap'>
			<div className='page_wrap'>
				<a className='soleil_skip_link skip_to_content_link' href='#content_skip_link_anchor' tabIndex={1}>
					Skip to content
				</a>
				<a className='soleil_skip_link skip_to_footer_link' href='#footer_skip_link_anchor' tabIndex={1}>
					Skip to footer
				</a>
				<Header />
				<PageContent />
				<a id='footer_skip_link_anchor' className='soleil_skip_link_anchor' href='#'></a>
			</div>
		</div>
	);
}

export default App;
