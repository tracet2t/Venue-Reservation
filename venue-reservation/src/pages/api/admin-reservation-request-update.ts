import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(request: NextRequest) {
  try {
    const { reservationId, status, adminComments } = await request.json();

    // Validate input
    if (!reservationId || !status) {
      return NextResponse.json(
        { error: 'Reservation ID and status are required' }, 
        { status: 400 }
      );
    }

    // Validate status is a valid enum value
    const validStatuses = ['Pending', 'Rejected', 'Accepted', 'Canceled', 'Done'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' }, 
        { status: 400 }
      );
    }

    // Update or create reservation state
    const updatedReservationState = await prisma.reservationState.upsert({
      where: { reservationId },
      update: {
        status,
        adminComments: adminComments || null
      },
      create: {
        reservationId,
        status,
        adminComments: adminComments || null
      }
    });

    return NextResponse.json(updatedReservationState, { status: 200 });
  } catch (error) {
    console.error('Error updating reservation status:', error);
    return NextResponse.json(
      { error: 'Failed to update reservation status' }, 
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// GET method to fetch admin reservation requests
export async function GET() {
  try {
    const reservations = await prisma.reservation.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            contactNumber: true
          }
        },
        venue: {
          select: {
            name: true
          }
        },
        timeSlots: true,
        extraServices: true,
        questions: true,
        reservationState: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Transform reservations to match the frontend interface
    interface ReservationWithState {
      reservationState?: { status?: string };
    }

    const transformedReservations = reservations.map((reservation: ReservationWithState) => ({
      ...reservation,
      reservationState: {
        status: reservation.reservationState?.status || 'Pending'
      }
    }));

    return NextResponse.json(transformedReservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reservations' }, 
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}