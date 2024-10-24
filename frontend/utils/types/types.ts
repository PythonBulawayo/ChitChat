export interface UserProfile {
    id: number;
    url: string;
    user: string;
    profile_picture: string;
    first_name: string;
    last_name: string;
    follows: Array<{ username: string; url: string }>;
    followers: Array<{username: string, url: string}>;
}

export interface ProfileList {
    profiles: UserProfile[];
}

export interface Post {
    id: number;
    url: string;
    user_profile: string;
    body: string;
    created_at: string;
    likes_count: number;
}

export interface PostList {
    posts: Post[];
}