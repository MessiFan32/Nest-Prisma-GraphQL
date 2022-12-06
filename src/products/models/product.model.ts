import { Field, ObjectType, Int, Float } from '@nestjs/graphql';
import { Category } from 'src/categories/models/category.model';
import { BaseModel } from 'src/common/models/base.model';
import { Vendor } from 'src/vendors/models/vendor.model';
import { ProductType, AttendanceType } from 'prisma/prisma-client';
import { VariationOption } from './variation-option.model';
import { Variant } from './variant.model';
import { ServiceAvailability } from 'src/common/models/service-availability.model';
import { Tag } from 'src/tags/models/tag.model';
import './product-type.enum';

@ObjectType()
export class Product extends BaseModel {
  sku?: string;
  title: string;
  title_ar: string;

  description: string;
  description_ar: string;

  @Field(() => ProductType)
  type: ProductType;

  image: string;

  vendorId: string;
  @Field(() => Vendor, { nullable: false })
  vendor?: Vendor;

  categoryId?: string;

  category?: Category;

  active: boolean;

  minPreorderDays?: number;

  @Field(() => [VariationOption], { nullable: true })
  variationOptions: VariationOption[];

  @Field(() => [Variant], { nullable: true })
  variants?: Variant[];

  @Field(() => [ServiceAvailability], { nullable: true })
  availabilities?: ServiceAvailability[];

  tagIds: string[];

  @Field(() => [Tag], { nullable: false })
  Tags?: Tag[];
  @Field(() => Int)
  noOfSeats?: number;

  @Field(() => Int)
  itemsInStock?: number;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  sortOrder?: number;

  @Field(() => AttendanceType, { nullable: true })
  attendanceType?: AttendanceType;

  meetingLink?: string;
  location?: string;
  endTime?: boolean;
  customerLocation?: boolean;
  duration?: number;

  startDate: Date;
  endDate: Date;
}
