import type { Review } from '@/types/content';
import { prisma } from '@/lib/prisma';

export async function getApprovedReviews(): Promise<Review[]> {
  try {
    return await prisma.review.findMany({
      where: { status: 'APPROVED' },
      orderBy: { createdAt: 'desc' }
    });
  } catch {
    return [];
  }
}
