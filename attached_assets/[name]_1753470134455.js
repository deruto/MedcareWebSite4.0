import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/ServiceCard';

const services = {
  laser: {
    title: 'Laser Dentistry',
    description: 'Advanced laser technology for painless procedures.',
  },
  rct: {
    title: 'Root Canal Treatment',
    description: 'Expert care for your root canal needs.',
  },
  implants: {
    title: 'Dental Implants',
    description: 'Permanent solutions for missing teeth.',
  },
};

export default function Service() {
  const router = useRouter();
  const { name } = router.query;
  const service = services[name];

  return (
    <div>
      <Header />
      <main className="text-center py-10">
        {service ? (
          <ServiceCard title={service.title} description={service.description} />
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
