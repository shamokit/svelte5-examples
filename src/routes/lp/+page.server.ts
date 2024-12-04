declare const __brand: unique symbol;
type BrandedType<T, B> = T & { [__brand]: B };

type PostId = BrandedType<number, 'id'>;
type UserId = BrandedType<number, 'userId'>;

type Post = {
	id: PostId;
	title: string;
	body: string;
	userId: UserId;
};

type PageServerData = {
	posts: Post[];
};
export const load = async (): Promise<PageServerData> => {
	const posts = await fetch('https://jsonplaceholder.typicode.com/posts/').then(
		(response) => response.json()
	);
	return {
		posts: posts.slice(0, 10),
	};
};
