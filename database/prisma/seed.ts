import { PrismaClient, ExtraService, Status, UserType, AvailabilityStatus } from './generated/client';

const prisma = new PrismaClient();

async function seed() {
  // Create users
  const user1 = await prisma.user.create({
    data: {
      firstName: "shan",
      lastName: "Jude",
      contactNumber: "94763751121",
      address: "123 Main St, Cityville",
      email: "shanjude1121Sgmail.com",
      password: "password123",
      userType: "Admin",
      emailVerified: false, 
      provider: null,
      resetToken: null,
      resetTokenExpiry: null,
    },
  });
  
  const user2 = await prisma.user.create({
    data: {
      firstName: "Ranjan",
      lastName: "Ramanayake",
      contactNumber: "9876543280",
      address: "456 Oak St, Townsville",
      email: "jane0e@gmail.com.com",
      password: "password456",
      userType: "Regular",
      emailVerified: false,  // Or a valid DateTime if you want to set it
      provider: null,
      resetToken: null,
      resetTokenExpiry: null,
    },
  });
  

  // Create venues
  const venue1 = await prisma.venue.create({
    data: {
      name: 'Trace Auditorium',
      adminId: user1.userId, 
      street_name: ['Bay 6', 'Trace Expert City'],
      district: 'Colombo',
      province: 'Western Province',
      type: 'Auditorium',
      capacity: 500,
      size: 5000,
      schedule: 'EntireDay',
      features: [
        'State-of-the-art acoustics system',
        'Ergonomic seating for maximum comfort',
        'Advanced lighting system',
        'High-definition projector and screen',
      ],
      images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
      availability: {
        create: [
          {
            date: new Date("2024-11-12T00:00:00.000Z"),
            status: "FULLY_BOOKED", // Added status
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-12T09:00:00.000Z"),
                  endTime: new Date("2024-11-12T12:00:00.000Z"),
                  status: "FULLY_BOOKED", // Added status
                },
              ],
            },
          },
          {
            date: new Date("2024-11-13T00:00:00.000Z"),
            status: "AVAILABLE", // Added default status if applicable
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-13T09:00:00.000Z"),
                  endTime: new Date("2024-11-13T12:00:00.000Z"),
                  status: "AVAILABLE", // Added default status if applicable
                },
              ],
            },
          },
        ],
      },
    },
  });

  // Create venues
  const venue2 = await prisma.venue.create({
    data: {
      name: 'Papa\'s Restaurant',
      adminId: user1.userId, 
      street_name: ['123 Main St', 'Colombo'],
      district: 'Colombo',
      province: 'Western Province',
      type: 'Restaurant',
      capacity: 20,
      size: 5000,
      schedule: 'EntireDay',
      features: [
        'State-of-the-art acoustics system',
        'Ergonomic seating for maximum comfort',
        'Advanced lighting system',
        'High-definition projector and screen',
      ],
      images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
      availability: {
        create: [
          {
            date: new Date("2024-11-12T00:00:00.000Z"),
            status: "FULLY_BOOKED", // Added status
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-12T09:00:00.000Z"),
                  endTime: new Date("2024-11-12T12:00:00.000Z"),
                  status: "FULLY_BOOKED", // Added status
                },
              ],
            },
          },
          {
            date: new Date("2024-11-13T00:00:00.000Z"),
            status: "AVAILABLE", // Added default status if applicable
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-13T09:00:00.000Z"),
                  endTime: new Date("2024-11-13T12:00:00.000Z"),
                  status: "AVAILABLE", // Added default status if applicable
                },
              ],
            },
          },
        ],
      },
    },
  });
 

  const venue3 = await prisma.venue.create({
    data: {
      name: 'Nelum Pokuna Mahinda Rajapaksa Theatre',
      adminId: user1.userId, 
      street_name: ['Nelum Pokuna Mawatha'],
      district: 'Colombo',
      province: 'Western Province',
      type: 'Outdoor',
      capacity: 1200,
      size: 8000,
      schedule: 'SessionTime',
      features: [
        'World-class sound system',
        'Tiered seating arrangement',
        'Stage with modern lighting',
        'VIP seating area',
      ],
      images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
      availability: {
        create: [
          {
            date: new Date("2024-11-12T00:00:00.000Z"),
            status: "FULLY_BOOKED", // Added status
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-12T09:00:00.000Z"),
                  endTime: new Date("2024-11-12T12:00:00.000Z"),
                  status: "FULLY_BOOKED", // Added status
                },
              ],
            },
          },
          {
            date: new Date("2024-11-13T00:00:00.000Z"),
            status: "AVAILABLE", // Added default status if applicable
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-13T09:00:00.000Z"),
                  endTime: new Date("2024-11-13T12:00:00.000Z"),
                  status: "AVAILABLE", // Added default status if applicable
                },
              ],
            },
          },
        ],
      },
    },
  });

  const venue4 = await prisma.venue.create({
    data: {
      name: 'Lotus Tower Banquet Hall',
      adminId: user1.userId, 
        street_name: ['Lotus Tower'],
        district: 'Colombo',
        province: 'Western Province',
        type: 'Conference Hall',
        capacity: 700,
        size: 6000,
        schedule: 'EntireDay',
        features: [
          '360-degree panoramic city view',
          'Dedicated catering area',
          'LED display walls',
          'Private dining section',
        ],
        images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
        availability: {
          create: [
            {
              date: new Date("2024-11-12T00:00:00.000Z"),
              status: "FULLY_BOOKED", // Added status
              timeSlots: {
                create: [
                  {
                    startTime: new Date("2024-11-12T09:00:00.000Z"),
                    endTime: new Date("2024-11-12T12:00:00.000Z"),
                    status: "FULLY_BOOKED", // Added status
                  },
                ],
              },
            },
            {
              date: new Date("2024-11-13T00:00:00.000Z"),
              status: "AVAILABLE", // Added default status if applicable
              timeSlots: {
                create: [
                  {
                    startTime: new Date("2024-11-13T09:00:00.000Z"),
                    endTime: new Date("2024-11-13T12:00:00.000Z"),
                    status: "AVAILABLE", // Added default status if applicable
                  },
                ],
              },
            },
          ],
        },
      },
    });

  const venue5 = await prisma.venue.create({
    data: {
      name: 'Galle Face Hotel Conference Room',
      adminId: user1.userId, 
        street_name: ['Galle Road'],
        district: 'Colombo',
        province: 'Western Province',
        type: 'Conference Room',
        capacity: 300,
        size: 3000,
        schedule: 'EntireDay',
        features: [
          'Sea view meeting space',
          'Projector and audio setup',
          'Event management assistance',
          'Exclusive breakout rooms',
        ],
        availability: {
          create: [
            {
              date: new Date("2024-11-18T00:00:00.000Z"),
              status: "NOT_AVAILABLE", // Added status
              timeSlots: {
                create: [
                  {
                    startTime: new Date("2024-11-18T09:00:00.000Z"),
                    endTime: new Date("2024-11-18T12:00:00.000Z"),
                    status: "NOT_AVAILABLE", // Added status
                  },
                ],
              },
            },
            {
              date: new Date("2024-11-19T00:00:00.000Z"),
              status: "AVAILABLE", // Added default status if applicable
              timeSlots: {
                create: [
                  {
                    startTime: new Date("2024-11-19T09:00:00.000Z"),
                    endTime: new Date("2024-11-19T12:00:00.000Z"),
                    status: "AVAILABLE", // Added default status if applicable
                  },
                ],
              },
            },
          ],
        },
      },
    });

  const venue6 = await prisma.venue.create({
    data: {
      name: 'Mahaweli Reach Hotel Garden',
      adminId: user1.userId, 
      street_name: ['P.B.A Weerakoon Mawatha'],
      district: 'Kandy',
      province: 'Central Province',
      type: 'Auditorium',
      capacity: 400,
      size: 7000,
      schedule: 'HourlyTime',
      features: [
        'Scenic riverside view',
        'Lush garden ambiance',
        'Outdoor lighting',
        'Seating arrangements for weddings',
      ],
      images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
      availability: {
        create: [
          {
            date: new Date("2024-11-25T00:00:00.000Z"),
            status: "FULLY_BOOKED", // Added status
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-25T09:00:00.000Z"),
                  endTime: new Date("2024-11-25T12:00:00.000Z"),
                  status: "FULLY_BOOKED", // Added status
                },
              ],
            },
          },
          {
            date: new Date("2024-11-16T00:00:00.000Z"),
            status: "PARTIALLY_BOOKED", // Added default status if applicable
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-16T09:00:00.000Z"),
                  endTime: new Date("2024-11-16T12:00:00.000Z"),
                  status: "PARTIALLY_BOOKED", // Added default status if applicable
                },
              ],
            },
          },
        ],
      },
    },
  });

  const venue7 = await prisma.venue.create({
    data: {
      name: 'Shangri-La Ballroom',
      adminId: user1.userId, 
      street_name: ['One Galle Face'],
      district: 'Colombo',
      province: 'Western Province',
      type: 'Co-Working Space',
      capacity: 800,
      size: 9500,
      schedule: 'SessionTime',
      features: [
        'Elegant interiors with chandeliers',
        'Dedicated sound and lighting system',
        'Adjacent cocktail area',
        'In-house catering services',
      ],
      images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
      availability: {
        create: [
          {
            date: new Date("2024-11-12T00:00:00.000Z"),
            status: "FULLY_BOOKED", // Added status
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-12T09:00:00.000Z"),
                  endTime: new Date("2024-11-12T12:00:00.000Z"),
                  status: "FULLY_BOOKED", // Added status
                },
              ],
            },
          },
          {
            date: new Date("2024-11-13T00:00:00.000Z"),
            status: "AVAILABLE", // Added default status if applicable
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-13T09:00:00.000Z"),
                  endTime: new Date("2024-11-13T12:00:00.000Z"),
                  status: "AVAILABLE", // Added default status if applicable
                },
              ],
            },
          },
        ],
      },
    },
  });

  const venue8 = await prisma.venue.create({
    data: {
      name: 'Araliya Green City Rooftop',
      adminId: user1.userId, 
      street_name: ['Araliya Green City'],
      district: 'Nuwara Eliya',
      province: 'Central Province',
      type: 'Auditorium',
      capacity: 200,
      size: 4000,
      schedule: 'SessionTime',
      features: [
        'Mountain view seating',
        'Outdoor fireplace',
        'Mood lighting for evening events',
        'Bar setup with cocktail service',
      ],
      images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
      availability: {
        create: [
          {
            date: new Date("2024-11-12T00:00:00.000Z"),
            status: "FULLY_BOOKED", // Added status
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-12T09:00:00.000Z"),
                  endTime: new Date("2024-11-12T12:00:00.000Z"),
                  status: "FULLY_BOOKED", // Added status
                },
              ],
            },
          },
          {
            date: new Date("2024-11-13T00:00:00.000Z"),
            status: "AVAILABLE", // Added default status if applicable
            timeSlots: {
              create: [
                {
                  startTime: new Date("2024-11-13T09:00:00.000Z"),
                  endTime: new Date("2024-11-13T12:00:00.000Z"),
                  status: "AVAILABLE", // Added default status if applicable
                },
              ],
            },
          },
        ],
      },
    },
  });

  const venue9 = await prisma.venue.create({
    data: {
      name: 'Jetwing Lighthouse Pavilion',
      adminId: user1.userId, 
        street_name: ['Dadella'],
        district: 'Galle',
        province: 'Southern Province',
        type: 'Co-Working Space',
        capacity: 250,
        size: 4500,
        schedule: 'EntireDay',
        features: [
          'Scenic ocean view',
          'Outdoor seating arrangements',
          'In-house catering options',
          'Eco-friendly event space',
        ],
        images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
        availability: {
          create: [
            {
              date: new Date("2024-11-12T00:00:00.000Z"),
              status: "FULLY_BOOKED", // Added status
              timeSlots: {
                create: [
                  {
                    startTime: new Date("2024-11-12T09:00:00.000Z"),
                    endTime: new Date("2024-11-12T12:00:00.000Z"),
                    status: "FULLY_BOOKED", // Added status
                  },
                ],
              },
            },
            {
              date: new Date("2024-11-13T00:00:00.000Z"),
              status: "AVAILABLE", // Added default status if applicable
              timeSlots: {
                create: [
                  {
                    startTime: new Date("2024-11-13T09:00:00.000Z"),
                    endTime: new Date("2024-11-13T12:00:00.000Z"),
                    status: "AVAILABLE", // Added default status if applicable
                  },
                ],
              },
            },
          ],
        },
      },
    });

  const venue10 = await prisma.venue.create({
    data: {
        name: 'Mount Lavinia Hotel Beach Venue',
        adminId: user1.userId, 
        street_name: ['100 Hotel Road,Mount Lavinia'],
        district: 'Colombo',
        province: 'Western Province',
        type: 'Conference Hall',
        capacity: 500,
        size: 6000,
        schedule: 'SessionTime',
        features: [
          'Beachfront view',
          'Outdoor event decor',
          'Fire pit for night events',
          'Tented seating available',
        ],
        images: ['/images/image1.jpg', '/images/image2.jpg', '/images/image3.jpg'],
        availability: {
          create: [
            {
              date: new Date("2024-11-12T00:00:00.000Z"),
              status: "FULLY_BOOKED", // Added status
              timeSlots: {
                create: [
                  {
                    startTime: new Date("2024-11-12T09:00:00.000Z"),
                    endTime: new Date("2024-11-12T12:00:00.000Z"),
                    status: "FULLY_BOOKED", // Added status
                  },
                ],
              },
            },
            {
              date: new Date("2024-11-13T00:00:00.000Z"),
              status: "AVAILABLE", // Added default status if applicable
              timeSlots: {
                create: [
                  {
                    startTime: new Date("2024-11-13T09:00:00.000Z"),
                    endTime: new Date("2024-11-13T12:00:00.000Z"),
                    status: "AVAILABLE", // Added default status if applicable
                  },
                ],
              },
            },
          ],
        },
      },
    });

  

  // Create standard questions for each venue type
  const auditoriumQuestions = [
    {
      text: "Is your event open to the public or private/invitation-only?",
      venueId: venue1.id // Trace Auditorium
    },
    {
      text: "Are you aware of any special permits or approvals required for your event?",
      venueId: venue1.id
    },
    {
      text: "Are there any special security or safety requirements for your event?",
      venueId: venue1.id
    }
  ];

  const conferenceHallQuestions = [
    {
      text: "Do you anticipate any media coverage or external guests?",
      venueId: venue2.id // BMICH
    },
    {
      text: "Are you aware of the rules and regulations regarding the use of the conference hall?",
      venueId: venue2.id
    }
  ];

  // Create questions for each venue type
  for (const question of auditoriumQuestions) {
    await prisma.question.create({
      data: question
    });
  }

  for (const question of conferenceHallQuestions) {
    await prisma.question.create({
      data: question
    });
  }

  // Create reservations
  const reservation1 = await prisma.reservation.create({
    data: {
      userId: user1.userId,
      venueId: venue1.id,
      title: "Tech Conference",
      purposeOfReservation: "Technology seminar",
      timeDuration: 4,
      extraServices: [ExtraService.projectors, ExtraService.sound_system],
      timeSlots: {
        create: [
          { date: new Date("2024-11-15"), startTime: "00:00", endTime: "11:59" },
          { date: new Date("2024-11-16"), startTime: "00:00", endTime: "11:59" }
        ]
      }
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
      timeSlots: {
        create: [
          { date: new Date("2024-12-10"), startTime: "12:00", endTime: "01:00" },
          { date: new Date("2024-12-11"), startTime: "12:00", endTime: "01:00" }
        ]
      }
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