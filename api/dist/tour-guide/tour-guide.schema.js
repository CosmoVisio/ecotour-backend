"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TourGuideSchema = exports.TourGuide = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const tour_entity_1 = require("../tour/entities/tour.entity");
let TourGuide = class TourGuide extends mongoose_2.Document {
};
exports.TourGuide = TourGuide;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TourGuide.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '' }),
    __metadata("design:type", String)
], TourGuide.prototype, "bio", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], TourGuide.prototype, "specializations", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], TourGuide.prototype, "rating", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], TourGuide.prototype, "contact", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: [tour_entity_1.Tour] }] }),
    __metadata("design:type", Array)
], TourGuide.prototype, "tours", void 0);
exports.TourGuide = TourGuide = __decorate([
    (0, mongoose_1.Schema)()
], TourGuide);
exports.TourGuideSchema = mongoose_1.SchemaFactory.createForClass(TourGuide);
//# sourceMappingURL=tour-guide.schema.js.map