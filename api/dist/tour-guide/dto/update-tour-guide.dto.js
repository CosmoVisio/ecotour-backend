"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTourGuideDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tour_guide_dto_1 = require("./create-tour-guide.dto");
class UpdateTourGuideDto extends (0, mapped_types_1.PartialType)(create_tour_guide_dto_1.CreateTourGuideDto) {
}
exports.UpdateTourGuideDto = UpdateTourGuideDto;
//# sourceMappingURL=update-tour-guide.dto.js.map