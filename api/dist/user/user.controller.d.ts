import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): {
        message: string;
        data: {
            id: number;
            username: string;
            email: string;
        };
    };
    findAll(): {
        id: number;
        username: string;
        email: string;
    }[];
    findOne(id: string): {
        id: number;
        username: string;
        email: string;
    };
    update(id: string, updateUserDto: UpdateUserDto): {
        message: string;
        data: {
            id: number;
            username: string;
            email: string;
        };
    };
    remove(id: string): {
        message: string;
        id: number;
    };
}
