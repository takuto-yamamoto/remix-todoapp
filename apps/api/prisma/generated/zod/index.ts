import { z } from 'zod';

import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['Serializable']);

export const ContactScalarFieldEnumSchema = z.enum(['id','first','last','avatar','twitter','notes','favorite','createdAt']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// CONTACT SCHEMA
/////////////////////////////////////////

export const ContactSchema = z.object({
  id: z.string().uuid(),
  first: z.string().nullable(),
  last: z.string().nullable(),
  avatar: z.string().nullable(),
  twitter: z.string().nullable(),
  notes: z.string().nullable(),
  favorite: z.boolean().nullable(),
  createdAt: z.coerce.date(),
})

export type Contact = z.infer<typeof ContactSchema>

/////////////////////////////////////////
// CONTACT PARTIAL SCHEMA
/////////////////////////////////////////

export const ContactPartialSchema = ContactSchema.partial()

export type ContactPartial = z.infer<typeof ContactPartialSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// CONTACT
//------------------------------------------------------

export const ContactSelectSchema: z.ZodType<Prisma.ContactSelect> = z.object({
  id: z.boolean().optional(),
  first: z.boolean().optional(),
  last: z.boolean().optional(),
  avatar: z.boolean().optional(),
  twitter: z.boolean().optional(),
  notes: z.boolean().optional(),
  favorite: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ContactWhereInputSchema: z.ZodType<Prisma.ContactWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ContactWhereInputSchema),z.lazy(() => ContactWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContactWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContactWhereInputSchema),z.lazy(() => ContactWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  first: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  last: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  avatar: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  twitter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  favorite: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ContactOrderByWithRelationInputSchema: z.ZodType<Prisma.ContactOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  first: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  avatar: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  twitter: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  favorite: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContactWhereUniqueInputSchema: z.ZodType<Prisma.ContactWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ContactWhereInputSchema),z.lazy(() => ContactWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContactWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContactWhereInputSchema),z.lazy(() => ContactWhereInputSchema).array() ]).optional(),
  first: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  last: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  avatar: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  twitter: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  favorite: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const ContactOrderByWithAggregationInputSchema: z.ZodType<Prisma.ContactOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  first: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  last: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  avatar: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  twitter: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  favorite: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ContactCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ContactMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ContactMinOrderByAggregateInputSchema).optional()
}).strict();

export const ContactScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ContactScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ContactScalarWhereWithAggregatesInputSchema),z.lazy(() => ContactScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ContactScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ContactScalarWhereWithAggregatesInputSchema),z.lazy(() => ContactScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  first: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  last: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  avatar: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  twitter: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  favorite: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const ContactCreateInputSchema: z.ZodType<Prisma.ContactCreateInput> = z.object({
  id: z.string().uuid().optional(),
  first: z.string().optional().nullable(),
  last: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  twitter: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  favorite: z.boolean().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ContactUncheckedCreateInputSchema: z.ZodType<Prisma.ContactUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  first: z.string().optional().nullable(),
  last: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  twitter: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  favorite: z.boolean().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ContactUpdateInputSchema: z.ZodType<Prisma.ContactUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  twitter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  favorite: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ContactUncheckedUpdateInputSchema: z.ZodType<Prisma.ContactUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  twitter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  favorite: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ContactCreateManyInputSchema: z.ZodType<Prisma.ContactCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  first: z.string().optional().nullable(),
  last: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  twitter: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
  favorite: z.boolean().optional().nullable(),
  createdAt: z.coerce.date().optional()
}).strict();

export const ContactUpdateManyMutationInputSchema: z.ZodType<Prisma.ContactUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  twitter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  favorite: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ContactUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ContactUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  last: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  twitter: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  favorite: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const ContactCountOrderByAggregateInputSchema: z.ZodType<Prisma.ContactCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  first: z.lazy(() => SortOrderSchema).optional(),
  last: z.lazy(() => SortOrderSchema).optional(),
  avatar: z.lazy(() => SortOrderSchema).optional(),
  twitter: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  favorite: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContactMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ContactMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  first: z.lazy(() => SortOrderSchema).optional(),
  last: z.lazy(() => SortOrderSchema).optional(),
  avatar: z.lazy(() => SortOrderSchema).optional(),
  twitter: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  favorite: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ContactMinOrderByAggregateInputSchema: z.ZodType<Prisma.ContactMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  first: z.lazy(() => SortOrderSchema).optional(),
  last: z.lazy(() => SortOrderSchema).optional(),
  avatar: z.lazy(() => SortOrderSchema).optional(),
  twitter: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional(),
  favorite: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ContactFindFirstArgsSchema: z.ZodType<Prisma.ContactFindFirstArgs> = z.object({
  select: ContactSelectSchema.optional(),
  where: ContactWhereInputSchema.optional(),
  orderBy: z.union([ ContactOrderByWithRelationInputSchema.array(),ContactOrderByWithRelationInputSchema ]).optional(),
  cursor: ContactWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ContactScalarFieldEnumSchema,ContactScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ContactFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ContactFindFirstOrThrowArgs> = z.object({
  select: ContactSelectSchema.optional(),
  where: ContactWhereInputSchema.optional(),
  orderBy: z.union([ ContactOrderByWithRelationInputSchema.array(),ContactOrderByWithRelationInputSchema ]).optional(),
  cursor: ContactWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ContactScalarFieldEnumSchema,ContactScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ContactFindManyArgsSchema: z.ZodType<Prisma.ContactFindManyArgs> = z.object({
  select: ContactSelectSchema.optional(),
  where: ContactWhereInputSchema.optional(),
  orderBy: z.union([ ContactOrderByWithRelationInputSchema.array(),ContactOrderByWithRelationInputSchema ]).optional(),
  cursor: ContactWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ContactScalarFieldEnumSchema,ContactScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ContactAggregateArgsSchema: z.ZodType<Prisma.ContactAggregateArgs> = z.object({
  where: ContactWhereInputSchema.optional(),
  orderBy: z.union([ ContactOrderByWithRelationInputSchema.array(),ContactOrderByWithRelationInputSchema ]).optional(),
  cursor: ContactWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ContactGroupByArgsSchema: z.ZodType<Prisma.ContactGroupByArgs> = z.object({
  where: ContactWhereInputSchema.optional(),
  orderBy: z.union([ ContactOrderByWithAggregationInputSchema.array(),ContactOrderByWithAggregationInputSchema ]).optional(),
  by: ContactScalarFieldEnumSchema.array(),
  having: ContactScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ContactFindUniqueArgsSchema: z.ZodType<Prisma.ContactFindUniqueArgs> = z.object({
  select: ContactSelectSchema.optional(),
  where: ContactWhereUniqueInputSchema,
}).strict() ;

export const ContactFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ContactFindUniqueOrThrowArgs> = z.object({
  select: ContactSelectSchema.optional(),
  where: ContactWhereUniqueInputSchema,
}).strict() ;

export const ContactCreateArgsSchema: z.ZodType<Prisma.ContactCreateArgs> = z.object({
  select: ContactSelectSchema.optional(),
  data: z.union([ ContactCreateInputSchema,ContactUncheckedCreateInputSchema ]).optional(),
}).strict() ;

export const ContactUpsertArgsSchema: z.ZodType<Prisma.ContactUpsertArgs> = z.object({
  select: ContactSelectSchema.optional(),
  where: ContactWhereUniqueInputSchema,
  create: z.union([ ContactCreateInputSchema,ContactUncheckedCreateInputSchema ]),
  update: z.union([ ContactUpdateInputSchema,ContactUncheckedUpdateInputSchema ]),
}).strict() ;

export const ContactCreateManyArgsSchema: z.ZodType<Prisma.ContactCreateManyArgs> = z.object({
  data: z.union([ ContactCreateManyInputSchema,ContactCreateManyInputSchema.array() ]),
}).strict() ;

export const ContactCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ContactCreateManyAndReturnArgs> = z.object({
  data: z.union([ ContactCreateManyInputSchema,ContactCreateManyInputSchema.array() ]),
}).strict() ;

export const ContactDeleteArgsSchema: z.ZodType<Prisma.ContactDeleteArgs> = z.object({
  select: ContactSelectSchema.optional(),
  where: ContactWhereUniqueInputSchema,
}).strict() ;

export const ContactUpdateArgsSchema: z.ZodType<Prisma.ContactUpdateArgs> = z.object({
  select: ContactSelectSchema.optional(),
  data: z.union([ ContactUpdateInputSchema,ContactUncheckedUpdateInputSchema ]),
  where: ContactWhereUniqueInputSchema,
}).strict() ;

export const ContactUpdateManyArgsSchema: z.ZodType<Prisma.ContactUpdateManyArgs> = z.object({
  data: z.union([ ContactUpdateManyMutationInputSchema,ContactUncheckedUpdateManyInputSchema ]),
  where: ContactWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ContactUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ContactUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ContactUpdateManyMutationInputSchema,ContactUncheckedUpdateManyInputSchema ]),
  where: ContactWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ContactDeleteManyArgsSchema: z.ZodType<Prisma.ContactDeleteManyArgs> = z.object({
  where: ContactWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;