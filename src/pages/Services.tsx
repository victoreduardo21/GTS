import React from 'react';
import { Brain, Cloud, Smartphone, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const mainServices = [
    {
      icon: Brain,
      title: 'Desenvolvimento de IA',
      description: 'Soluções inteligentes que automatizam processos e geram insights valiosos para seu negócio.',
      features: [
        'Machine Learning',
        'Processamento de Linguagem Natural',
        'Visão Computacional',
        'Análise Preditiva'
      ],
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80'
    },
    {
      icon: Cloud,
      title: 'Desenvolvimento SaaS',
      description: 'Plataformas escaláveis baseadas em nuvem para atender às necessidades do seu negócio.',
      features: [
        'Arquitetura em Nuvem',
        'Microsserviços',
        'APIs RESTful',
        'Integração Contínua'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
    },
    {
      icon: Smartphone,
      title: 'Desenvolvimento de APP',
      description: 'Aplicativos móveis intuitivos e responsivos para iOS e Android.',
      features: [
        'UI/UX Design',
        'Desenvolvimento Nativo',
        'PWA',
        'Cross-platform'
      ],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80'
    },
    {
      icon: Settings,
      title: 'Software Personalizado',
      description: 'Soluções sob medida que atendem às necessidades específicas do seu negócio.',
      features: [
        'Análise de Requisitos',
        'Desenvolvimento Ágil',
        'Testes Automatizados',
        'Suporte Contínuo'
      ],
      image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative h-[300px] w-full">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
            <p className="text-xl">Soluções tecnológicas para impulsionar seu negócio</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-48 relative">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pronto para Transformar seu Negócio?
            </h2>
            <p className="text-blue-100 mb-8">
              Entre em contato conosco para discutir como podemos ajudar a 
              impulsionar sua empresa com nossas soluções tecnológicas.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Fale Conosco
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;