import * as contentstack from "contentstack";

export const Stack = contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY!,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN!,
  environment: process.env.CONTENTSTACK_ENVIRONMENT!,
});

export const getPageData = async () => {
  const Query = Stack.ContentType("page").Query();
  const result = await Query.toJSON().find();
  const [entries] = result;
  return entries[0]; // Homeページ想定
};

export const PreviewStack = contentstack.Stack({
  api_key: process.env.CONTENTSTACK_API_KEY!,
  delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN!,
  environment: process.env.CONTENTSTACK_ENVIRONMENT!,
});

export const getArticlesData = async () => {
  const Query = PreviewStack.ContentType("articles").Query();
  const result = await Query.toJSON().find();
  const [entries] = result;
  return entries;
};
