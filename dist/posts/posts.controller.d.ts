import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './posts.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<import("./post.schema").Post>;
    findAll(): Promise<import("./post.schema").Post[]>;
    findOne(id: string): Promise<import("./post.schema").Post>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("./post.schema").Post>;
    remove(id: string): Promise<void>;
}
