/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
import { Tour } from '../tour/entities/tour.entity';
export declare class TourGuide extends Document {
    name: string;
    bio: string;
    specializations: string[];
    rating: number;
    contact: string;
    tours: Tour[];
}
export declare const TourGuideSchema: import("mongoose").Schema<TourGuide, import("mongoose").Model<TourGuide, any, any, any, Document<unknown, any, TourGuide> & TourGuide & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TourGuide, Document<unknown, {}, import("mongoose").FlatRecord<TourGuide>> & import("mongoose").FlatRecord<TourGuide> & {
    _id: import("mongoose").Types.ObjectId;
}>;
