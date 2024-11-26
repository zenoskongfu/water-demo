import Header from "./components/Header";
import PageContent from "./components/PageContent";

function Home() {
	const goToMain = () => {
		// window.location.href = "/";
		// 打开新页面
		window.open("/", "_blank");
	};
	return (
		<div className='body_wrap'>
			{/* 在当前页面访问新路径 */}
			<a href='/test'>TEST</a>
			<div onClick={goToMain}>GO TO MAIN</div>
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

export default Home;
