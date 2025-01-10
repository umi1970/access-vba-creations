import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
  gradient: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, path, gradient, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={path}>
        <div className={`h-full rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${gradient}`}>
          <div className="p-8">
            <div className="flex items-center justify-center mb-6 bg-white/10 rounded-full w-20 h-20 mx-auto">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              {title}
            </h3>
            <p className="text-white/90 text-center">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;