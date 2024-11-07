import React from 'react';

// Componente individual para cada servicio
const ServiceCard = ({ title, services, image }) => (
  <div className="divArticle">
    <img width="24" height="24" src={image} alt={title} />
    <h3>{title}</h3>
    <ul>
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </div>
);

export const HomePage = () => {
  const servicesData = [
    {
      title: 'macOS',
      image: 'https://img.icons8.com/material-outlined/24/laptop.png', // URL de la imagen para macOS
      services: [
        'Diagnóstico de fallos.',
        'Reparación de Logic Board y Displays.',
        'Atención de equipos mojados.',
        'Cambio de batería.',
        'Actualización de macOS y optimización de Soft.',
        'Upgrade de macOS equipos vintage.',
        'Instalación de software.',
        'Desbloqueo de iCloud.'
      ]
    },
    {
      title: 'iOS',
      image: 'https://img.icons8.com/material-outlined/24/laptop.png', // URL de la imagen para iOS
      services: [
        'Diagnóstico de fallos.',
        'Reparación de Logic Board y Displays.',
        'Atención de equipos mojados.',
        'Cambio de batería.',
        'Actualización de macOS y optimización de Soft.',
        'Upgrade de macOS equipos vintage.',
        'Instalación de software.',
        'Desbloqueo de iCloud.'
      ]
    },
    {
      title: 'Equipos Windows',
      image: 'https://img.icons8.com/material-outlined/24/laptop.png', // URL de la imagen para Equipos Windows
      services: [
        'Diagnóstico de fallos.',
        'Reparación de Logic Board y Displays.',
        'Atención de equipos mojados.',
        'Cambio de batería.',
        'Actualización de macOS y optimización de Soft.',
        'Upgrade de macOS equipos vintage.',
        'Instalación de software.',
        'Desbloqueo de iCloud.'
      ]
    },
    {
      title: 'Canales de Reparación',
      image: 'https://img.icons8.com/material-outlined/24/laptop.png', // URL de la imagen para Equipos Windows
      services: [
        'Atención personalizada.',
        'Venta de repuestos y accesorios.',
        'Atención mayorista.',
        'Pedidos especiales.',
        'Soporte técnico de segundo y tercer nivel.'
      ]
    },
    {
      title: 'Empresas',
      image: 'https://img.icons8.com/material-outlined/24/laptop.png', // URL de la imagen para Equipos Windows
      services: [
        'Nos especializamos en brindar consultoría informática para Agencias de Medios, Espectáculos, Start ups entre otros del segmento SMB.'
      ]
    },
    {
      title: 'Mobilsentrix',
      image: 'https://img.icons8.com/material-outlined/24/laptop.png', // URL de la imagen para Equipos Windows
      services: [
        'Somos distribuidos de productos Ampsentrix & Mobile.'
      ]
    }
  ];

  return (
    <div className='contenedorPadreHomePage'>
      <div className="imgContainer">
        <img src="../../img/pcNegra.jpg" alt="pcNegra" className="imgPcNegra" />
        <div className="textOverlay">
          <div className="typingEffect">Soluciones Informáticas y Tecnológicas</div>
          <br />
          <p className='typingEffect-2'>Llevamos el concepto de <em>servicio</em> a otro nivel!</p>
        </div>
      </div>
      <h2 className="typingTitle">Nuestros servicios</h2>
      <div className='ordenarArticle'>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            services={service.services}
            image={service.image} // Pasamos la URL de la imagen
          />
        ))}
      </div>
    </div>
  );
};
