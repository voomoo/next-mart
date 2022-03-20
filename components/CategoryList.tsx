import { NextPage } from "next";
import { Grid, Segment } from "semantic-ui-react";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdSanitizer, MdBabyChangingStation, MdPets, MdToys, MdSportsCricket, MdDevicesOther } from "react-icons/md"
import { GiHealing, GiBroom, GiHouse, GiSteeringWheel } from "react-icons/gi"
import { RiPencilRulerFill } from "react-icons/ri"

const CategoryList: NextPage = () => {
	return (
		<div>
			<Grid columns="equal">
				<Grid.Row columns={3}>
					<Grid.Column style={{ margin: "0px 0 10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<IoFastFoodSharp size={28} />
								Food
							</h3>
						</Segment>
					</Grid.Column>
					<Grid.Column style={{ margin: "0px 0 10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<MdSanitizer size={28} />
								Hygiene
							</h3>
						</Segment>
					</Grid.Column>
					<Grid.Column style={{ margin: "0px 0 10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<GiHealing size={28} />
								Beauty & Health
							</h3>
						</Segment>
					</Grid.Column>
					<Grid.Column style={{ margin: "10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<MdBabyChangingStation size={28} />
								Baby Care
							</h3>
						</Segment>
					</Grid.Column>
					<Grid.Column style={{ margin: "10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<MdPets size={28} />
								Pet Care
							</h3>
						</Segment>
					</Grid.Column>
					<Grid.Column style={{ margin: "10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<GiBroom size={28} />
								Cleaning Supplies
							</h3>
						</Segment>
					</Grid.Column>
					<Grid.Column style={{ margin: "10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<GiHouse size={28} />
								Home & Kitchen
							</h3>
						</Segment>
					</Grid.Column>
					<Grid.Column style={{ margin: "10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<RiPencilRulerFill size={28} />
								Stationery & Office
							</h3>
						</Segment>
					</Grid.Column>
					<Grid.Column style={{ margin: "10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<MdToys size={28} />
								Toys & Fun
							</h3>
						</Segment>
					</Grid.Column>
					<Grid.Column style={{ margin: "10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<MdSportsCricket size={28} />
								Sports and Fitness
							</h3>
						</Segment>
					</Grid.Column>
					<Grid.Column style={{ margin: "10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<GiSteeringWheel size={28} />
								Vehicle Essentials
							</h3>
						</Segment>
					</Grid.Column>
					<Grid.Column style={{ margin: "10px 0" }}>
						<Segment>
							<h3
								style={{
									display: "flex",
									justifyContent: "space-between",
									padding: "5px 10px",
								}}
							>
								<MdDevicesOther size={28} />
								Electronics
							</h3>
						</Segment>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};

export default CategoryList;
