import { Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <h3 className="font-semibold text-xl mb-2">IPC24 e.K.</h3>
            <p className="text-gray-300">Erzbergerstraße 28</p>
            <p className="text-gray-300">68753 Waghäusel</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-2">
            <a 
              href="https://ipc24.de" 
              className="flex items-center text-gray-300 hover:text-ipc-orange transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-4 w-4 mr-2" />
              ipc24.de
            </a>
            <a 
              href="mailto:info@ipc24.de"
              className="flex items-center text-gray-300 hover:text-ipc-orange transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              info@ipc24.de
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;