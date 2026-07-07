import type { Review } from '@/types/content';
import { testimonials } from '@/data/testimonials';
import { prisma } from '@/lib/prisma';

const seedReviews: Review[] = testimonials.map((testimonial, index) => ({
  id: `seed-${index + 1}`,
  name: testimonial.name,
  company: testimonial.company,
  quote: testimonial.quote,
  rating: testimonial.rating,
  status: 'APPROVED',
  createdAt: new Date('2026-07-06T00:00:00.000Z')
}));

export async function getApprovedReviews(): Promise<Review[]> {
  try {
    const reviews = (await prisma.review.findMany({
      where: { status: 'APPROVED' },
      orderBy: { createdAt: 'desc' }
    })) as Review[];

    if (reviews.length === 0) {
      return seedReviews;
    }

    return reviews.map((review): Review => ({
      id: review.id,
      name: review.name,
      company: review.company,
      quote: review.quote,
      rating: review.rating,
      status: review.status,
      createdAt: review.createdAt
    }));
  } catch {
    return seedReviews;
  }
}