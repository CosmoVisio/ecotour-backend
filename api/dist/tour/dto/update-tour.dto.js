"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTourDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_tour_dto_1 = require("./create-tour.dto");
class UpdateTourDto extends (0, mapped_types_1.PartialType)(create_tour_dto_1.CreateTourDto) {
}
exports.UpdateTourDto = UpdateTourDto;
//# sourceMappingURL=update-tour.dto.js.map