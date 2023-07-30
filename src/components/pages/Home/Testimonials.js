import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Enjoyed the Mediterranean dishes at Little Lemon. Hummus and modern platter were tasty..`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Tried some different twists on falafel and chicken wrap. Flavors were good.`,
  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Desserts were delicious. Baklava cheesecake was a highlight. More options would be great.`,
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `.`,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) => 
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
