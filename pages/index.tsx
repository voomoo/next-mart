import { NextPage } from "next";
import { Divider, Grid } from "semantic-ui-react";
import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList";

const LandingPage: NextPage = () => {
	//   if (typeof window !== 'undefined') {
	//     console.log(localStorage.getItem('token'))
	// } else {
	//     console.log('we are running on the server');
	// }
	return (
		<div>
			<Grid divided="vertically">
				<Grid.Row columns={2}>
					<Grid.Column>
						<Banner img={"https://st3.depositphotos.com/1001941/19434/v/1600/depositphotos_194342012-stock-illustration-website-sale-header-banner-design.jpg"} link="https://google.com" />
					</Grid.Column>
					<Grid.Column>
						<Banner img={"https://st4.depositphotos.com/1001941/21877/v/1600/depositphotos_218773320-stock-illustration-website-header-banner-design-discount.jpg"} link="https://google.com" />
					</Grid.Column>
				</Grid.Row>

				<Grid.Row columns={3}>
					<Grid.Column>
						<Banner img={"https://img.freepik.com/free-vector/realistic-christmas-sale-banner-with-red-page_1361-3133.jpg?size=626&ext=jpg"} link="https://google.com" />
					</Grid.Column>
					<Grid.Column>
						<Banner img={"https://static.vecteezy.com/system/resources/thumbnails/001/338/250/small/black-friday-sale-banner-free-vector.jpg"} link="https://google.com" />
					</Grid.Column>
					<Grid.Column>
						<Banner img={"https://blog.magezon.com/wp-content/uploads/2020/08/toy-banner.png"} link="https://google.com" />
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<Divider horizontal style={{ margin: "60px 0px" }}>
				<h2>Our Products Category</h2>
			</Divider>
			<CategoryList />
		</div>
	);
};

export default LandingPage;
