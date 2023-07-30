import chefsMarioAndAdrianAImage from "./assets/chefs-mario-and-adrian_a.jpg";
import chefsMarioAndAdrianBImage from "./assets/chefs-mario-and-adrian_b.jpg";
import "./OurStory.css";

const OurStory = () => {
	return (
		<section className="container grid our-story">
			<div className="our-story-description">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					Step into our warm and inviting Mediterranean restaurant right here in
					Chicago! We're a family-owned place, and we're all about preserving
					our traditional recipes while adding a modern twist to them. Indulge
					in the flavors of our heritage, crafted with love and care. Our menu
					is a delightful blend of classic favorites and innovative dishes
					that'll take your taste buds on an unforgettable journey. Come join us
					for an authentic taste of the Mediterranean, where tradition meets
					innovation. Our passionate chefs are ready to treat you to a dining
					experience that's truly special. We can't wait to welcome you with
					open arms and serve you the best of our cuisine!!
				</p>
			</div>
			<div className="our-story-chefs">
				<img src={chefsMarioAndAdrianAImage} alt="Chefs Mario and Adrian" />
				<img src={chefsMarioAndAdrianBImage} alt="Chefs Mario and Adrian" />
			</div>
		</section>
	);
};

export default OurStory;
