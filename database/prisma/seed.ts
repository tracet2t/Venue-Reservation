import { PrismaClient, ExtraService, Status, UserType } from './generated/client';

const prisma = new PrismaClient();

async function seed() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      firstName: "shan",
      lastName: "Jude",
      contactNumber: +94763751121,
      address: "123 Main St, Cityville",
      email: "shanjude1121S@gmail.com",
      password: "password123",  
      userType: UserType.Admin,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      firstName: "Ranjan",
      lastName: "Ramanayake",
      contactNumber: 9876543280,
      address: "456 Oak St, Townsville",
      email: "jane0e@gmail.com.com",
      password: "password456",
      userType: UserType.Regular,
    },
  });

  // Create venues
  const venue1 = await prisma.venue.create({
    data: {
      name: 'Trace Auditorium',
      street_name: ['Bay 6', 'Trace Expert City'],
      district: 'Colombo',
      province: 'Western Province',
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
  });

  const venue2 = await prisma.venue.create({
    data: {
      name: 'Bandaranaike Memorial International Conference Hall',
        street_name: ['BMICH', 'Bauddhaloka Mawatha'],
        district: 'Colombo',
        province: 'Western Province',
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
  });

  const venue3 = await prisma.venue.create({
    data: {
      name: 'Nelum Pokuna Mahinda Rajapaksa Theatre',
      street_name: ['Nelum Pokuna Mawatha'],
      district: 'Colombo',
      province: 'Western Province',
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
  });

  const venue4 = await prisma.venue.create({
    data: {
      name: 'Lotus Tower Banquet Hall',
        street_name: ['Lotus Tower'],
        district: 'Colombo',
        province: 'Western Province',
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
  });

  const venue5 = await prisma.venue.create({
    data: {
      name: 'Galle Face Hotel Conference Room',
        street_name: ['Galle Road'],
        district: 'Colombo',
        province: 'Western Province',
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
  });

  const venue6 = await prisma.venue.create({
    data: {
      name: 'Mahaweli Reach Hotel Garden',
      street_name: ['P.B.A Weerakoon Mawatha'],
      district: 'Kandy',
      province: 'Central Province',
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
  });

  const venue7 = await prisma.venue.create({
    data: {
      name: 'Shangri-La Ballroom',
      street_name: ['One Galle Face'],
      district: 'Colombo',
      province: 'Western Province',
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
  });

  const venue8 = await prisma.venue.create({
    data: {
      name: 'Araliya Green City Rooftop',
      street_name: ['Araliya Green City'],
      district: 'Nuwara Eliya',
      province: 'Central Province',
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
  });

  const venue9 = await prisma.venue.create({
    data: {
      name: 'Jetwing Lighthouse Pavilion',
        street_name: ['Dadella'],
        district: 'Galle',
        province: 'Southern Province',
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
  });

  const venue10 = await prisma.venue.create({
    data: {
        name: 'Mount Lavinia Hotel Beach Venue',
        street_name: ['100 Hotel Road,Mount Lavinia'],
        district: 'Colombo',
        province: 'Western Province',
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
  });

  // Create reservations
  const reservation1 = await prisma.reservation.create({
    data: {
      userId: user1.userId,
      venueId: venue1.id,
      title: "Tech Conference",
      purposeOfReservation: "Technology seminar",
      timeDuration: 4,
      extraServices: [ExtraService.projectors, ExtraService.sound_system],
      reservationDate: new Date("2024-11-15T09:00:00Z"),
    },
  });

  const reservation2 = await prisma.reservation.create({
    data: {
      userId: user2.userId,
      venueId: venue2.id,
      title: "Wedding Reception",
      purposeOfReservation: "Wedding celebration",
      timeDuration: 6,
      extraServices: [ExtraService.food, ExtraService.private_parking],
      reservationDate: new Date("2024-12-10T12:00:00Z"),
    },
  });

  // Create reservation states
  await prisma.reservationState.create({
    data: {
      reservationId: reservation1.reservationId,
      status: Status.Accepted,
      adminComments: "Approved for the tech conference",
    },
  });

  await prisma.reservationState.create({
    data: {
      reservationId: reservation2.reservationId,
      status: Status.Pending,
      adminComments: "Awaiting approval from admin",
    },
  });

  console.log("Seed data created!");
}

seed()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
