import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  slug: string;
}

export default function ServiceCard({ title, description, icon, image, slug }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="text-primary text-xl mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-neutral-800">{title}</h3>
        </div>
        <p className="text-neutral-600 mb-4">{description}</p>
        <Link href={`/services/${slug}`}>
          <Button className="bg-primary hover:bg-primary-dark text-white font-semibold transition-all duration-300 w-full group">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
