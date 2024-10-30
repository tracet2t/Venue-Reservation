import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.venue.createMany({
    data: [
        {
            name: 'Trace Auditorium',
            address: 'Bay 6, Trace Expert City, Maradana, Colombo, Western Province',
            type: 'Auditorium',
            capacity: 500,
            size: 5000,
            schedule: 'Entire Day', 
            features: [
              'State-of-the-art acoustics system',
              'Ergonomic seating for maximum comfort',
              'Advanced lighting system',
              'High-definition projector and screen',
            ],
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
          },
          {
            name: 'Bandaranaike Memorial International Conference Hall',
            address: 'BMICH, Bauddhaloka Mawatha, Colombo 07, Western Province',
            type: 'Conference Hall',
            capacity: 1500,
            size: 10000,
            schedule: 'Half Day, Entire Day',
            features: [
              'High-speed Wi-Fi',
              'Spacious lobby area',
              'Simultaneous translation system',
              'Large exhibition hall',
            ],
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
          },
          {
            name: 'Nelum Pokuna Mahinda Rajapaksa Theatre',
            address: 'Nelum Pokuna Mawatha, Colombo 07, Western Province',
            type: 'Theatre',
            capacity: 1200,
            size: 8000,
            schedule: 'Evening',
            features: [
              'World-class sound system',
              'Tiered seating arrangement',
              'Stage with modern lighting',
              'VIP seating area',
            ],
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
          },
          {
            name: 'Lotus Tower Banquet Hall',
            address: 'Lotus Tower, Colombo, Western Province',
            type: 'Banquet Hall',
            capacity: 700,
            size: 6000,
            schedule: 'Entire Day',
            features: [
              '360-degree panoramic city view',
              'Dedicated catering area',
              'LED display walls',
              'Private dining section',
            ],
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
          },
          {
            name: 'Galle Face Hotel Conference Room',
            address: 'Galle Road, Colombo 03, Western Province',
            type: 'Conference Room',
            capacity: 300,
            size: 3000,
            schedule: 'Half Day, Entire Day',
            features: [
              'Sea view meeting space',
              'Projector and audio setup',
              'Event management assistance',
              'Exclusive breakout rooms',
            ],
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
          },
          {
            name: 'Mahaweli Reach Hotel Garden',
            address: 'P.B.A Weerakoon Mawatha, Kandy, Central Province',
            type: 'Outdoor Garden',
            capacity: 400,
            size: 7000,
            schedule: 'Evening',
            features: [
              'Scenic riverside view',
              'Lush garden ambiance',
              'Outdoor lighting',
              'Seating arrangements for weddings',
            ],
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
          },
          {
            name: 'Shangri-La Ballroom',
            address: 'Shangri-La Hotel, One Galle Face, Colombo 02, Western Province',
            type: 'Ballroom',
            capacity: 800,
            size: 9500,
            schedule: 'Half Day, Entire Day',
            features: [
              'Elegant interiors with chandeliers',
              'Dedicated sound and lighting system',
              'Adjacent cocktail area',
              'In-house catering services',
            ],
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
          },
          {
            name: 'Araliya Green City Rooftop',
            address: 'Araliya Green City, Nuwara Eliya, Central Province',
            type: 'Rooftop Venue',
            capacity: 200,
            size: 4000,
            schedule: 'Evening',
            features: [
              'Mountain view seating',
              'Outdoor fireplace',
              'Mood lighting for evening events',
              'Bar setup with cocktail service',
            ],
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
          },
          {
            name: 'Jetwing Lighthouse Pavilion',
            address: 'Dadella, Galle, Southern Province',
            type: 'Pavilion',
            capacity: 250,
            size: 4500,
            schedule: 'Entire Day',
            features: [
              'Scenic ocean view',
              'Outdoor seating arrangements',
              'In-house catering options',
              'Eco-friendly event space',
            ],
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
          },
          {
            name: 'Mount Lavinia Hotel Beach Venue',
            address: '100 Hotel Road, Mount Lavinia, Western Province',
            type: 'Beach Venue',
            capacity: 500,
            size: 6000,
            schedule: 'Evening',
            features: [
              'Beachfront view',
              'Outdoor event decor',
              'Fire pit for night events',
              'Tented seating available',
            ],
            images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
          },
        ],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
