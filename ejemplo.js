
const Home = () => {
	return (
		<div className="main-content home">
			<h2>Front End Course Directory</h2>
			<p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
			<p>Learn front end web development and much more! This simple directory app offers a preview of our course
						library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the
						skills you need to launch a new career in front end web development.</p>
			<p>We have thousands of videos created by expert teachers on web design and front end development. Our
						library is continually refreshed with the latest on web technology so you will never fall behind.</p>
		</div>
	);
}

const About = () => {
	render() {
		return (
			<div className="main-content">
				<h2>About</h2>
				<p>The front end course directory lists many of the courses we teach on HTML, CSS, JavaScript and more! Be sure to
					visit the Teachers section to view a list of our talented teachers. Or visit the Courses section and select a
					topic -- HTML, CSS, or JavaScript -- to see a list of our courses.</p>
			</div>
		);
	}

	const Teachers = (props) => {
		return (
			<div> <h2> Teachers </h2> </div>
		);
	}
	const HTML = () => {
		return (
			<div> <h2> HTML </h2> </div>
		);
	}
	const CSS = () => {
		return (
			<div> <h2> CSS </h2> </div>
		);
	}
	const JavaScript = () => {
		return (
			<div> <h2> JavaScript </h2> </div>
		);
	}

	const Courses = () => {
		return (
			<div>
				<h2> Courses </h2>
				<ul>
					<li>  <NavLink exact to="/courses/html"> HTML </NavLink> </li>
					<li>  <NavLink to="/courses/css"> CSS </NavLink> </li>
					<li>  <NavLink to="/courses/javascript"> JavaScript </NavLink> </li>
				</ul>

				<Switch>
					<Route exact path="/courses"
						render={() => <Redirect to="/courses/html" />} />

					<Route path="/courses/html" component={HTML} />
					<Route path="/courses/css" component={CSS} />
					<Route path="/courses/javascript" component={JavaScript} />
				</Switch>
			</div>
		);
	}

	const NotFoundPage = (props) => {
		return (
			<div> <h2> Error 404! </h2> </div>
		);
	}

	const App = () => (
		<BrowserRouter>
			<div>
				<ul>
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
					<li><NavLink to="/teachers">Teachers</NavLink></li>
					<li><NavLink to="/courses">Courses</NavLink></li>

				</ul>

				<hr />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/teachers" component={Teachers} />
					<Route path="/courses" component={Courses} />

					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</BrowserRouter>
	)