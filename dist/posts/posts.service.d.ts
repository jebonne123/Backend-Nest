import { Model } from 'mongoose';
import { Post, PostDocument } from './post.schema';
import { CreatePostDto, UpdatePostDto } from './posts.dto';
export declare class PostsService {
    private postModel;
    constructor(postModel: Model<PostDocument>);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAll(): Promise<Post[]>;
    findOne(id: string): Promise<Post>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<Post>;
    remove(id: string): Promise<void>;
}
