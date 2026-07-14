const mockModel = {
  findMany: async () => [],
  findUnique: async () => null,
  findFirst: async () => null,
  create: async () => ({ id: 'mock-id' }),
  update: async () => ({}),
  delete: async () => ({})
}

export const prisma = {
  testimonial: mockModel,
  submission: mockModel
} as any
